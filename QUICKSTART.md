# 🚀 Hướng Dẫn Nhanh (Quick Start) - Sông Xanh Waterbus Prototype

Tài liệu này giúp các thành viên trong team hiểu cách chạy dự án, vị trí các file cần sửa để điều chỉnh giao diện/logic, và cách xuất (deploy) link cho người khác xem.

---

## 1. 💻 Chạy Dự Án Chế Độ Dev (Dưới máy cá nhân)

Để chạy code và xem thay đổi ngay lập tức (hot-reload), bạn mở Terminal trong thư mục `waterbus-client-prototype` và chạy:

```bash
# Tải các thư viện cần thiết (nếu là lần đầu tải code về máy)
npm install

# Khởi động server ảo
npm run dev
```

Trang web sẽ hiện lên ở địa chỉ `http://localhost:5174` (thông số port có thể khác tùy máy).

---

## 2. 🛠 Chỉnh Sửa Prototype (Vị Trí Các File)

Dự án này sử dụng Vite + React + TypeScript + TailwindCSS. Dưới đây là các vị trí quan trọng nhất để team vào thay đổi:

- 📄 **Cấu trúc trang (Pages):** Vào thư mục `src/pages/`.
  _Bạn muốn đổi giao diện Trang Chủ? Sửa `Home.tsx`._
  _Bạn muốn đổi màn hình chọn ghế? Sửa `BookingSeatSelection.tsx`._
- 🧩 **Các mảnh ghép giao diện (Components):** Vào thư mục `src/components/`. Ở đây chứa thanh Header, Footer, Thanh điều hướng ngày, Card hiển thị vé...
- 🗄️ **Dữ Liệu Ảo (Mock Data):** Prototype này dùng dữ liệu ảo để demo nhanh.
  _Hãy vào thư mục `src/mocks/` nếu bạn muốn: Đổi tên bến tàu, đổi giá tiền, tạo thêm giờ khởi hành, v.v._
- 🎨 **Màu Sắc & CSS chung:** Các biến màu sắc chuẩn và Tailwind class tự tạo nằm trong file `src/index.css`.

---

## 3. 🌐 Cập Nhật Bản Deploy (Cho team review)

Mỗi khi bạn chỉnh sửa xong mã nguồn và muốn gửi link lên group cho các sếp hoặc thành viên khác xem, bạn **không cần** setup Server phức tạp. Chỉ cần dùng Vercel!

Mở Terminal và gõ:

```bash
# Chỉ cần chạy đúng lệnh này:
npx vercel deploy --temporary
```

**Cách hoạt động:**

1. Vercel sẽ tự động build code của bạn thành web.
2. Nó sẽ sinh ra một đường link tạm thời dạng: `https://waterbus-xyz.vercel.app`
3. Bạn copy link đó và gửi cho team là xong! Lần sau sửa code xong, lại chạy lại lệnh đó để lấy link mới cập nhật.

_(Lưu ý: Nếu Vercel yêu cầu đăng nhập ở lần chạy đầu tiên, bạn chỉ cần gõ Enter để mở trình duyệt, đăng nhập bằng GitHub hoặc Google là hệ thống sẽ tự lưu cho các lần sau)._

---

🎉 **Happy Coding!**
