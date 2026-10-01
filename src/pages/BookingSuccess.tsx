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
          <div className="bg-surface-bright py-space-md w-full">
            <div className="px-gutter lg:gap-space-xl mx-auto flex max-w-6xl flex-col lg:flex-row">
              {/* Left Column: Success Msg + Tickets */}
              <div className="flex-1">
                <div className="mb-space-md flex items-center gap-4">
                  <div className="bg-secondary/10 relative inline-flex h-12 w-12 items-center justify-center rounded-full shadow-sm">
                    <div className="bg-secondary/20 absolute inset-0 animate-ping rounded-full opacity-25"></div>
                    <div className="from-secondary to-on-tertiary-container text-on-primary flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr shadow-md">
                      <span className="material-symbols-outlined text-[20px]">done_all</span>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-primary text-xl font-bold">Đặt Vé Thành Công!</h1>
                    <p className="text-on-surface-variant text-sm">
                      Cảm ơn <span className="text-primary font-semibold">{contact.fullName}</span>.
                      Vé đã gửi tới email và SMS của bạn.
                    </p>
                  </div>
                </div>

                <div className="gap-space-md mb-space-md flex w-full flex-col">
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
              </div>

              {/* Right Column: Actions & Info */}
              <div className="w-full flex-shrink-0 lg:w-[320px]">
                <div className="mb-6 flex flex-col gap-2 sm:flex-row lg:flex-col">
                  <Link
                    className="bg-surface-container-high hover:bg-surface-variant text-primary inline-flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors"
                    onClick={resetBooking}
                    to="/"
                  >
                    <span className="material-symbols-outlined text-[18px]">home</span>
                    <span className="">Về Trang chủ</span>
                  </Link>
                  <Link
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
                    onClick={resetBooking}
                    to="/search"
                  >
                    <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                    <span className="">Đặt Chuyến Khác</span>
                  </Link>
                </div>

                <div className="mb-4 w-full">
                  <h2 className="text-primary mb-3 text-sm font-semibold tracking-wide uppercase">
                    Tiện ích vé
                  </h2>
                  <div className="flex flex-col gap-2">
                    <button
                      className="bg-primary hover:bg-secondary text-on-primary group flex items-center justify-center gap-2 rounded px-3 py-2 text-xs font-semibold shadow-sm transition-colors"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">download</span>
                      <span className="">Tải vé PDF</span>
                    </button>
                    <button
                      className="bg-surface-container-low hover:bg-surface-container text-primary flex items-center justify-center gap-2 rounded px-3 py-2 text-xs font-semibold transition-colors"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        forward_to_inbox
                      </span>
                      <span className="">Gửi lại qua Email</span>
                    </button>
                  </div>
                </div>

                <div className="bg-surface-container-low w-full rounded-xl p-4 shadow-sm">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-on-tertiary-container text-[18px]">
                      info
                    </span>
                    <h3 className="text-primary text-sm font-bold">Lưu ý lên tàu</h3>
                  </div>
                  <div className="text-on-surface-variant flex flex-col gap-2 text-xs leading-relaxed">
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary mt-0.5 text-[14px]">
                        schedule
                      </span>
                      <p>
                        Có mặt tại bến trước <strong className="text-primary">15 phút</strong>.
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary mt-0.5 text-[14px]">
                        qr_code_scanner
                      </span>
                      <p>Chuẩn bị sẵn mã QR để quét qua cổng.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary mt-0.5 text-[14px]">
                        luggage
                      </span>
                      <p>Hành lý xách tay tối đa 10kg.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BookingSuccess;
