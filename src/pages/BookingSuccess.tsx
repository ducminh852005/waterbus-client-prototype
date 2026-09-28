import { Link } from 'react-router-dom';
import { useBookingSuccess } from '../hooks/useBookingSuccess';
import { TicketCard } from '../components/booking';

const BookingSuccess = () => {
  const { bookingConfirmation, resetBooking } = useBookingSuccess();

  if (!bookingConfirmation) return null;

  const { passengerInfo } = bookingConfirmation;
  const contact = passengerInfo.contact;

  return (
    <>
      <main className="bg-surface min-h-screen w-full pt-20">
        <div className="flex w-full flex-col">
          <section className="bg-primary-container py-space-lg text-on-primary relative w-full overflow-hidden">
            <div className="px-gutter gap-space-md relative mx-auto flex max-w-6xl flex-col items-center justify-between md:flex-row">
              <div className="gap-space-sm flex items-center">
                <span className="px-space-xs bg-on-tertiary-container/20 text-on-tertiary-container font-label-sm rounded py-0.5 font-semibold tracking-widest uppercase">
                  Đặt vé thành công
                </span>
                <span className="text-outline text-label-sm font-label-sm">/</span>
                <span className="font-label-sm text-on-primary-container tracking-widest uppercase">
                  Vé Điện Tử &amp; Xác Nhận Hành Trình
                </span>
              </div>
              <div className="gap-space-sm text-on-primary-container font-body-md text-body-md flex items-center">
                <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                  verified_user
                </span>
                <span className="">Giao dịch bảo mật &amp; Chứng nhận vận chuyển</span>
              </div>
            </div>
          </section>

          <div className="bg-surface-bright py-space-xl w-full">
            <div className="px-gutter mx-auto flex max-w-4xl flex-col items-center">
              <div className="mb-space-lg w-full text-center">
                <div className="bg-secondary/10 mb-space-md relative inline-flex h-20 w-20 items-center justify-center rounded-full shadow-sm">
                  <div className="bg-secondary/20 absolute inset-0 animate-ping rounded-full opacity-25"></div>
                  <div className="from-secondary to-on-tertiary-container text-on-primary flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr shadow-md">
                    <span className="material-symbols-outlined text-[32px]">done_all</span>
                  </div>
                </div>
                <p className="font-label-sm text-secondary mb-space-xs font-semibold tracking-widest uppercase">
                  Hệ thống Đặt vé Trực tuyến Sông Xanh
                </p>
                <h1 className="font-headline-lg text-headline-lg text-primary mb-space-sm font-normal">
                  Đặt Vé Thành Công!
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant mx-auto max-w-2xl leading-relaxed">
                  Cảm ơn bạn{' '}
                  <span className="font-title-md text-primary font-semibold">
                    {contact.fullName}
                  </span>
                  . Vé điện tử của bạn đã được xác nhận và gửi tới email{' '}
                  <span className="text-secondary font-medium underline">{contact.email}</span>{' '}
                  &amp; SMS <span className="text-secondary font-medium">{contact.phone}</span>.
                </p>
              </div>

              <div className="gap-space-lg mb-space-lg flex w-full flex-col">
                <TicketCard confirmation={bookingConfirmation} />
                {bookingConfirmation.returnTrip && bookingConfirmation.returnSeats && (
                  <TicketCard
                    confirmation={{
                      ...bookingConfirmation,
                      trip: bookingConfirmation.returnTrip,
                      seats: bookingConfirmation.returnSeats,
                    }}
                    isReturn={true}
                  />
                )}
              </div>

              <div className="mb-space-xl w-full">
                <h2 className="font-headline-sm text-title-md text-primary mb-space-sm tracking-wide uppercase">
                  Tiện ích vé &amp; Quản lý lịch trình
                </h2>
                <div className="gap-space-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                  <button
                    className="gap-space-xs px-space-md py-space-sm bg-primary hover:bg-secondary text-on-primary font-title-md text-body-md group flex items-center justify-center rounded shadow-sm transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[20px] transition-transform group-hover:-translate-y-0.5">
                      download
                    </span>
                    <span className="">Tải vé PDF (Lưu máy)</span>
                  </button>
                  <button
                    className="gap-space-xs px-space-md py-space-sm bg-surface-container-low hover:bg-surface-container text-primary font-title-md text-body-md flex items-center justify-center rounded transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-secondary text-[20px]">
                      forward_to_inbox
                    </span>
                    <span className="">Gửi lại qua Email / Zalo</span>
                  </button>
                  <button
                    className="gap-space-xs px-space-md py-space-sm bg-surface-container-low hover:bg-surface-container text-primary font-title-md text-body-md flex items-center justify-center rounded transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-on-tertiary-container text-[20px]">
                      event
                    </span>
                    <span className="">Thêm vào Lịch / Wallet</span>
                  </button>
                  <a
                    className="gap-space-xs px-space-md py-space-sm bg-surface-container-low hover:bg-surface-container text-primary font-title-md text-body-md flex items-center justify-center rounded transition-colors"
                    href="https://maps.google.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-secondary text-[20px]">
                      explore
                    </span>
                    <span className="">Chỉ đường tới Bến</span>
                  </a>
                </div>
              </div>

              <div className="bg-surface-container-low p-space-lg mb-space-xl w-full rounded-xl shadow-sm">
                <div className="gap-space-xs mb-space-md flex items-center">
                  <span className="material-symbols-outlined text-on-tertiary-container text-[24px]">
                    info
                  </span>
                  <h3 className="font-title-md text-title-md text-primary font-bold">
                    Hướng Dẫn Lên Tàu Quan Trọng
                  </h3>
                </div>
                <div className="gap-space-md font-body-md text-body-md text-on-surface-variant grid grid-cols-1 md:grid-cols-2">
                  <div className="gap-space-sm bg-surface-container-lowest p-space-md flex items-start rounded-lg">
                    <div className="bg-secondary/15 text-secondary flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                      <span className="material-symbols-outlined text-[20px]">schedule</span>
                    </div>
                    <div>
                      <p className="font-title-md text-body-lg text-primary mb-1 font-semibold">
                        Thời gian tập trung
                      </p>
                      <p className="leading-relaxed">
                        Quý khách vui lòng có mặt tại nhà chờ trước giờ tàu chạy ít nhất{' '}
                        <strong className="text-primary font-semibold">15 phút</strong> để làm thủ
                        tục check-in.
                      </p>
                    </div>
                  </div>
                  <div className="gap-space-sm bg-surface-container-lowest p-space-md flex items-start rounded-lg">
                    <div className="bg-secondary/15 text-secondary flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                      <span className="material-symbols-outlined text-[20px]">qr_code_scanner</span>
                    </div>
                    <div>
                      <p className="font-title-md text-body-lg text-primary mb-1 font-semibold">
                        Mã QR lên tàu
                      </p>
                      <p className="leading-relaxed">
                        Chuẩn bị sẵn màn hình điện thoại có mã QR hoặc bản in để quét tại cửa tự
                        động trước khi bước xuống cầu phao.
                      </p>
                    </div>
                  </div>
                  <div className="gap-space-sm bg-surface-container-lowest p-space-md flex items-start rounded-lg">
                    <div className="bg-secondary/15 text-secondary flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                      <span className="material-symbols-outlined text-[20px]">luggage</span>
                    </div>
                    <div>
                      <p className="font-title-md text-body-lg text-primary mb-1 font-semibold">
                        Hành lý &amp; Trợ giúp
                      </p>
                      <p className="leading-relaxed">
                        Mỗi hành khách được mang tối đa 1 kiện hành lý xách tay 10kg. Nhân viên hỗ
                        trợ xe đẩy và người lớn tuổi luôn túc trực tại bến.
                      </p>
                    </div>
                  </div>
                  <div className="gap-space-sm bg-surface-container-lowest p-space-md flex items-start rounded-lg">
                    <div className="bg-secondary/15 text-secondary flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                      <span className="material-symbols-outlined text-[20px]">travel_explore</span>
                    </div>
                    <div>
                      <p className="font-title-md text-body-lg text-primary mb-1 font-semibold">
                        An toàn đường sông
                      </p>
                      <p className="leading-relaxed">
                        Áo phao tiêu chuẩn được bố trí sẵn dưới mỗi ghế ngồi. Vui lòng tuân theo
                        hiệu lệnh của thuyền trưởng và thủy thủ đoàn.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="gap-space-md pt-space-sm flex w-full flex-col items-center justify-center sm:flex-row">
                <Link
                  className="gap-space-xs px-space-lg py-space-sm bg-surface-container-high hover:bg-surface-variant text-primary font-title-md text-body-md inline-flex w-full items-center justify-center rounded transition-colors sm:w-auto"
                  onClick={resetBooking}
                  to="/"
                >
                  <span className="material-symbols-outlined text-[18px]">home</span>
                  <span className="">Quay về Trang chủ</span>
                </Link>
                <Link
                  className="gap-space-xs px-space-lg py-space-sm bg-on-tertiary-container hover:bg-secondary text-on-primary font-title-md text-body-md inline-flex w-full items-center justify-center rounded shadow-sm transition-colors sm:w-auto"
                  onClick={resetBooking}
                  to="/search"
                >
                  <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                  <span className="">Đặt Vé Chuyến Khác</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BookingSuccess;
