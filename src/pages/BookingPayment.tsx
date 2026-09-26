import Header from '../components/Header';
import Footer from '../components/Footer';
import { usePayment } from '../hooks/usePayment';
import { PaymentMethodOption, VoucherInput, PaymentSummaryCard } from '../components/booking';
import { PAYMENT_METHODS } from '../mocks';
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
      <Header /><main className="w-full pt-20 bg-surface min-h-screen"><div className="flex flex-col w-full">

<section className="w-full bg-surface-container-lowest shadow-sm py-space-md">
<div className="max-w-7xl mx-auto px-gutter">
<div className="flex flex-wrap items-center justify-between gap-space-xs mb-space-md">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-outline tracking-widest uppercase">Quy trình đặt vé</span>
<span className="text-outline text-label-sm">/</span>
<span className="font-label-md text-label-md text-on-tertiary-container uppercase tracking-wider bg-tertiary-fixed/60 px-space-xs py-0.5 rounded">Thanh toán</span>
</div>
</div>
</div>
</section>

<section className="w-full bg-primary-container text-on-primary">
<div className="max-w-7xl mx-auto px-gutter py-space-sm flex flex-col sm:flex-row items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-full bg-on-tertiary-container/20 flex items-center justify-center text-on-tertiary-container animate-pulse">
<span className="material-symbols-outlined text-[20px]">hourglass_top</span>
</div>
<div>
<span className="font-body-md text-body-md text-surface-container-low">Thời gian giữ chỗ ưu đãi còn lại:</span>
<span className="font-headline-sm text-headline-sm text-tertiary-fixed font-bold ml-space-xs tracking-wider">{countdown.formatted}</span>
</div>
</div>
</div>
</section>

<main className="w-full max-w-7xl mx-auto px-gutter py-space-lg lg:py-space-xl">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-space-xl items-start">

<section className="lg:col-span-7 space-y-space-lg">

<div className="space-y-space-xs">
<p className="font-label-md text-label-md text-secondary uppercase tracking-widest">Cổng giao dịch mã hóa 256-bit</p>
<h1 className="font-headline-lg text-headline-md sm:text-headline-lg text-on-surface">Phương Thức Thanh Toán</h1>
<p className="font-body-md text-body-md text-on-surface-variant">Chọn một trong các cổng thanh toán bảo mật nội địa &amp; quốc tế bên dưới để tiến hành xuất vé tức thì.</p>
</div>

<fieldset className="space-y-space-sm">
<legend className="sr-only">Lựa chọn cổng thanh toán</legend>
{PAYMENT_METHODS.map((pm) => (
  <PaymentMethodOption key={pm.id} method={pm} selected={method === pm.id} onSelect={() => setMethod(pm.id)} />
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

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md flex-wrap justify-center sm:justify-start">
<div className="flex items-center gap-1.5 text-on-surface-variant font-label-md text-label-md">
<span className="material-symbols-outlined text-secondary text-[20px]">lock</span>
<span className="">SSL 256-bit</span>
</div>
<span className="h-4 w-[1px] bg-outline-variant hidden sm:inline-block"></span>
<div className="flex items-center gap-1.5 text-on-surface-variant font-label-md text-label-md">
<span className="material-symbols-outlined text-secondary text-[20px]">security</span>
<span className="">PCI-DSS Chuẩn 4.0</span>
</div>
<span className="h-4 w-[1px] bg-outline-variant hidden sm:inline-block"></span>
<div className="flex items-center gap-1.5 text-on-surface-variant font-label-md text-label-md">
<span className="material-symbols-outlined text-secondary text-[20px]">mobile_friendly</span>
<span className="">3D Secure OTP</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-outline">Bảo mật thanh toán cấp ngân hàng</span>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[22px] shrink-0 mt-0.5">policy</span>
<div className="space-y-1">
<h4 className="font-title-md text-title-md text-on-surface">Chính sách linh hoạt &amp; bảo lưu hành trình</h4>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Hỗ trợ hoàn tiền 100% hoặc đổi giờ khởi hành miễn phí trước giờ tàu chạy 60 phút trực tiếp trên website qua mục Tra cứu vé.
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
</div></main><Footer />


    </>
  );
};

export default BookingPayment;
