import { usePayment } from '../hooks/usePayment';
import { PaymentMethodOption, VoucherInput, PaymentSummaryCard } from '../components/booking';
import { listPaymentMethodsSync } from '../services';
import { useBooking } from '../context/BookingContext';

const BookingPayment = () => {
  const {
    selectedTrip,
    selectedReturnTrip,
    selectedSeats,
    selectedReturnSeats,
    method,
    setMethod,
    voucherCode,
    setVoucherCode,
    appliedVoucher,
    voucherError,
    applyVoucherCode,
    removeVoucher,
    priceBreakdown,
    submitting,
    submit,
    countdown,
  } = usePayment();
  const { bookingData } = useBooking();

  if (!selectedTrip || !bookingData.passengerInfo) return null;

  return (
    <>
      <main className="bg-surface min-h-screen w-full pt-20">
        <div className="flex w-full flex-col">
          <section className="bg-surface-container-lowest py-space-md w-full shadow-sm">
            <div className="px-gutter mx-auto max-w-7xl">
              <div className="gap-space-xs mb-space-md flex flex-wrap items-center justify-between">
                <div className="gap-space-xs flex items-center">
                  <span className="font-label-sm text-label-sm text-outline tracking-widest uppercase">
                    Quy trình đặt vé
                  </span>
                  <span className="text-outline text-label-sm">/</span>
                  <span className="font-label-md text-label-md text-on-tertiary-container bg-tertiary-fixed/60 px-space-xs rounded py-0.5 tracking-wider uppercase">
                    Thanh toán
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-primary-container text-on-primary w-full">
            <div className="px-gutter py-space-sm gap-space-sm mx-auto flex max-w-7xl flex-col items-center justify-between sm:flex-row">
              <div className="gap-space-sm flex items-center">
                <div className="bg-on-tertiary-container/20 text-on-tertiary-container flex h-9 w-9 animate-pulse items-center justify-center rounded-full">
                  <span className="material-symbols-outlined text-[20px]">hourglass_top</span>
                </div>
                <div>
                  <span className="font-body-md text-body-md text-surface-container-low">
                    Thời gian giữ chỗ ưu đãi còn lại:
                  </span>
                  <span className="font-headline-sm text-headline-sm text-tertiary-fixed ml-space-xs font-bold tracking-wider">
                    {countdown.formatted}
                  </span>
                </div>
              </div>
            </div>
          </section>

          <main className="px-gutter py-space-lg lg:py-space-xl mx-auto w-full max-w-7xl">
            <div className="gap-space-lg lg:gap-space-xl grid grid-cols-1 items-start lg:grid-cols-12">
              <section className="space-y-space-lg lg:col-span-7">
                <div className="space-y-space-xs">
                  <p className="font-label-md text-label-md text-secondary tracking-widest uppercase">
                    Cổng giao dịch mã hóa 256-bit
                  </p>
                  <h1 className="font-headline-lg text-headline-md sm:text-headline-lg text-on-surface">
                    Phương Thức Thanh Toán
                  </h1>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Chọn một trong các cổng thanh toán bảo mật nội địa &amp; quốc tế bên dưới để
                    tiến hành xuất vé tức thì.
                  </p>
                </div>

                <fieldset className="space-y-space-sm">
                  <legend className="sr-only">Lựa chọn cổng thanh toán</legend>
                  {listPaymentMethodsSync().map((pm) => (
                    <PaymentMethodOption
                      key={pm.id}
                      method={pm}
                      selected={method === pm.id}
                      onSelect={() => setMethod(pm.id)}
                    />
                  ))}
                </fieldset>

                <VoucherInput
                  code={voucherCode}
                  onCodeChange={setVoucherCode}
                  applied={appliedVoucher}
                  error={voucherError}
                  onApply={applyVoucherCode}
                  onRemove={removeVoucher}
                />

                <div className="p-space-md bg-surface-container-low gap-space-md flex flex-col items-center justify-between rounded-xl sm:flex-row">
                  <div className="gap-space-md flex flex-wrap items-center justify-center sm:justify-start">
                    <div className="text-on-surface-variant font-label-md text-label-md flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        lock
                      </span>
                      <span className="">SSL 256-bit</span>
                    </div>
                    <span className="bg-outline-variant hidden h-4 w-[1px] sm:inline-block"></span>
                    <div className="text-on-surface-variant font-label-md text-label-md flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        security
                      </span>
                      <span className="">PCI-DSS Chuẩn 4.0</span>
                    </div>
                    <span className="bg-outline-variant hidden h-4 w-[1px] sm:inline-block"></span>
                    <div className="text-on-surface-variant font-label-md text-label-md flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        mobile_friendly
                      </span>
                      <span className="">3D Secure OTP</span>
                    </div>
                  </div>
                  <span className="font-label-sm text-label-sm text-outline">
                    Bảo mật thanh toán cấp ngân hàng
                  </span>
                </div>

                <div className="p-space-md bg-surface-container-lowest gap-space-sm flex items-start rounded-xl shadow-sm">
                  <span className="material-symbols-outlined text-secondary mt-0.5 shrink-0 text-[22px]">
                    policy
                  </span>
                  <div className="space-y-1">
                    <h4 className="font-title-md text-title-md text-on-surface">
                      Chính sách linh hoạt &amp; bảo lưu hành trình
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Hỗ trợ hoàn tiền 100% hoặc đổi giờ khởi hành miễn phí trước giờ tàu chạy 60
                      phút trực tiếp trên website qua mục Tra cứu vé.
                    </p>
                  </div>
                </div>
              </section>

              <PaymentSummaryCard
                trip={selectedTrip}
                returnTrip={selectedReturnTrip}
                seats={selectedSeats}
                returnSeats={selectedReturnSeats}
                contact={bookingData.passengerInfo.contact}
                priceBreakdown={priceBreakdown}
                submitting={submitting}
                onSubmit={submit}
              />
            </div>
          </main>
        </div>
      </main>
    </>
  );
};

export default BookingPayment;
