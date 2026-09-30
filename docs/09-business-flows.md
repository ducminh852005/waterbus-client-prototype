# 9. Business Flows (Luồng Nghiệp Vụ)

Tài liệu này mô tả chi tiết các luồng nghiệp vụ cốt lõi của hệ thống Sông Xanh Water Express, được ánh xạ trực tiếp 100% vào sơ đồ thiết kế cơ sở dữ liệu (ERD).

---

## 9.1. Luồng Cấu Hình Lịch Trình Tàu & Mở Bán Vé (Schedule & Trip Generation)

Luồng này do **Admin/Fleet Manager** thực hiện để cấu hình dữ liệu và tạo ra các chuyến tàu sẵn sàng cho khách hàng đặt vé.

1. **Thiết lập Tuyến & Bến tàu**:
   - Khởi tạo danh sách các bến (`STATIONS`) và các tuyến đường chính (`ROUTES`).
   - Định nghĩa chi tiết các trạm dừng (`ROUTE_STOPS`) thuộc tuyến đường.
2. **Cấu hình Đội tàu & Ghế ngồi**:
   - Thêm tàu mới (`SHIPS`) cùng các tiện ích (`amenities_json`).
   - Bố trí cấu hình ghế vật lý (`SEATS`) cho từng tàu (chia theo loại ghế `VIP`, `STANDARD`...).
3. **Sinh Chuyến (Trip Instantiation)**:
   - Dựa trên lịch mẫu (`SCHEDULES`), Admin chọn ngày và sinh ra các chuyến chạy thực tế (`TRIP_INSTANCES`) với trạng thái ban đầu là `SCHEDULED`.
   - Hệ thống tự động dựa vào `actual_ship_id` của chuyến và danh sách `SEATS` của tàu đó để sinh ra toàn bộ các bản ghi `SEAT_RESERVATIONS` (Trạng thái `AVAILABLE`) nhằm sẵn sàng mở bán.

---

## 9.2. Luồng Tìm Kiếm & Đặt Vé Thường (Regular Booking Flow)

Luồng dành cho **Khách hàng (Customer)** mua vé di chuyển thông thường.

1. **Khách hàng tìm chuyến**:
   - Hệ thống query bảng `TRIP_INSTANCES` kết hợp với `ROUTES` để lọc ra các chuyến có lịch trình phù hợp.
2. **Chọn ghế trực quan**:
   - Dựa trên `trip_instance_id`, hệ thống trả về danh sách `SEAT_RESERVATIONS`. Khách click chọn ghế, hệ thống cập nhật tức thì trạng thái ghế từ `AVAILABLE` sang `HOLDING` (kết hợp TTL lock trên Redis).
3. **Tạo Đơn Hàng (Booking)**:
   - Khách điền thông tin liên hệ và xác nhận đặt vé.
   - Hệ thống tạo record trong `BOOKINGS` (`status` = `PENDING`).
   - Gắn `booking_id` vào các `SEAT_RESERVATIONS` tương ứng để giữ chỗ chính thức.
   - Khách có thể áp mã giảm giá, kiểm tra `VOUCHERS` và tạo liên kết `USER_VOUCHERS`.
4. **Thanh toán & Xuất vé**:
   - Khách tiến hành thanh toán qua Payment Gateway. Tạo `PAYMENT_TRANSACTIONS`.
   - Thanh toán thành công (Webhook trả về `SUCCESS`): Cập nhật `BOOKINGS` thành `PAID` / `CONFIRMED`.
   - Hệ thống sinh ra các `TICKETS` điện tử cho từng `SEAT_RESERVATIONS` đã được giữ, kèm theo mã `qr_token_hash`. `SEAT_RESERVATIONS` chuyển thành `BOOKED`.

---

## 9.3. Luồng Thuê Tàu Riêng (Charter Request Flow)

Luồng dành cho **Khách Hàng Đoàn/Doanh Nghiệp** gửi yêu cầu thuê nguyên chuyến tàu.

1. **Khách hàng gửi Yêu cầu**:
   - Khách điền form (quy mô, ngày đi mong muốn, ghi chú lộ trình).
   - Hệ thống lưu vào `CHARTER_REQUESTS` với trạng thái `NEW`.
2. **Nhân viên Điều hành Xử lý**:
   - Admin liên hệ, tư vấn khách hàng. Đổi trạng thái thành `PROCESSING`.
   - Sau khi chốt thỏa thuận (offline/hợp đồng), Admin cập nhật trạng thái thành `CONFIRMED` hoặc nếu thất bại thì `REJECTED`.
   - Admin có thể lưu lại `staff_note` để ghi chú nội bộ.

---

## 9.4. Luồng Vận Hành Lên Tàu (Boarding & Scanning Flow)

Luồng vận hành thực tế tại bến tàu vào ngày khởi hành, liên quan đến **Nhân Viên Soát Vé (Staff)** và **Hành Khách**.

1. **Kiểm tra trạng thái Chuyến đi**:
   - Staff mở app, hệ thống truy vấn `TRIP_INSTANCES` sắp chạy (Trạng thái đổi từ `SCHEDULED` sang `BOARDING`).
2. **Quét mã QR (QR Scanning)**:
   - Khách hàng đưa vé điện tử (hoặc mã QR).
   - Máy quét của Staff đọc `qr_token_hash`, đối chiếu với bảng `TICKETS`.
3. **Ghi nhận lịch sử (Audit Log)**:
   - Hệ thống tạo bản ghi `TICKET_SCAN_EVENTS` (lưu trữ `staff_id`, `ticket_id`, thời gian quét và `result` là `SUCCESS` hoặc `INVALID`).
   - Nếu `SUCCESS`, cập nhật `TICKETS.status` thành `USED`.
4. **Khởi hành**:
   - Khi đã hết khách, Staff đánh dấu chuyến đi kết thúc boarding, `TRIP_INSTANCES` chuyển thành `DONE`.
   - Hệ thống thu thập tọa độ tàu thực tế qua `SHIP_TELEMETRIES`.

---

## 9.5. Luồng Hủy Vé & Hoàn Tiền (Cancellation & Refund Flow)

Luồng xử lý khi khách hàng hoặc hệ thống yêu cầu hủy chuyến.

1. **Hủy Đơn**:
   - Cập nhật trạng thái `BOOKINGS` thành `CANCELLED`.
   - Ghi lại `cancel_reason` và `cancelled_at`.
2. **Giải phóng Ghế**:
   - Hệ thống tìm các bản ghi `TICKETS` liên quan, đổi trạng thái thành `CANCELLED`.
   - Tìm các `SEAT_RESERVATIONS` đã lock, đổi lại thành `AVAILABLE` và xóa `booking_id` để khách khác có thể đặt.
3. **Hoàn Tiền (Refund)**:
   - Hệ thống tạo `REFUND_TRANSACTIONS` (Trạng thái ban đầu: `REQUESTED`), lưu lại số tiền sẽ hoàn `refund_amount` và phí phạt `penalty_fee` dựa trên chính sách (VD: sát giờ khởi hành bị trừ phí).
   - Khi kế toán/Cổng thanh toán xử lý hoàn tiền xong, cập nhật trạng thái thành `SUCCESS`.
