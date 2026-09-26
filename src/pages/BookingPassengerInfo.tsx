import Header from '../components/Header';
import BookingStepper from '../components/BookingStepper';
import BookingSummarySidebar from '../components/BookingSummarySidebar';
import Footer from '../components/Footer';
import { usePassengerInfo } from '../hooks/usePassengerInfo';
import { ContactInfoForm, PassengerForm } from '../components/booking';
import type { SpecialRequest } from '../types';

const SPECIAL_REQUESTS: { id: SpecialRequest; title: string; subtitle: string }[] = [
  { id: 'wheelchair', title: 'Hỗ trợ xe lăn', subtitle: 'Cầu tàu dốc & tiếp đón hỗ trợ' },
  { id: 'elderly', title: 'Người cao tuổi', subtitle: 'Bố trí ưu tiên lối đi rộng rãi' },
  { id: 'pet', title: 'Thú cưng đi cùng', subtitle: 'Trong lồng chuyên dụng an toàn' },
];

const BookingPassengerInfo = () => {
  const {
    contact,
    setContact,
    passengers,
    updatePassenger,
    copyContactToPassenger,
    specialRequests,
    toggleSpecialRequest,
    agreedToTerms,
    setAgreedToTerms,
    error,
    submit,
  } = usePassengerInfo();

  if (passengers.length === 0) return null;

  return (
    <>
      <Header /><main className="w-full pt-20 bg-surface min-h-screen"><div className="flex flex-col w-full">

<div className="max-w-7xl mx-auto px-gutter py-space-md"><BookingStepper currentStep={4} /></div>

<section className="max-w-7xl mx-auto px-gutter py-space-lg w-full">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">

<div className="lg:col-span-8 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest rounded-xl p-space-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm shadow-sm">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px]">bolt</span>
</div>
<div>
<p className="font-title-md text-body-lg text-primary font-semibold">Đặt vé nhanh tiện lợi</p>
<p className="font-body-md text-body-md text-on-surface-variant">Không bắt buộc tạo tài khoản hoặc đăng nhập ngay để tích lũy dặm sóng Sông Xanh.</p>
</div>
</div>
</div>

<ContactInfoForm value={contact} onChange={(patch) => setContact((prev) => ({ ...prev, ...patch }))} />

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-sm">
<span className="w-8 h-8 rounded-full bg-primary-fixed text-primary flex items-center justify-center font-title-md text-label-md">2</span>
<div>
<h2 className="font-title-md text-title-md text-primary uppercase tracking-wide">Danh sách chi tiết hành khách</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Quy định Cục Hàng hải Việt Nam yêu cầu danh sách danh tính trước giờ nhổ neo.</p>
</div>
</div>
<span className="hidden sm:inline-flex px-space-sm py-space-xs rounded bg-surface-container text-primary font-label-sm text-label-sm uppercase">
              {passengers.length} Ghế đã chọn
            </span>
</div>

<div className="flex flex-col gap-space-md">
{passengers.map((passenger, index) => (
  <PassengerForm
    key={passenger.seatId}
    index={index}
    passenger={passenger}
    onChange={(patch) => updatePassenger(index, patch)}
    onCopyFromContact={() => copyContactToPassenger(index)}
  />
))}
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex items-center gap-space-sm mb-space-md">
<span className="w-8 h-8 rounded-full bg-primary-fixed text-primary flex items-center justify-center font-title-md text-label-md">3</span>
<div>
<h2 className="font-title-md text-title-md text-primary uppercase tracking-wide">Yêu cầu hỗ trợ đặc biệt</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Đội ngũ tiếp viên cảng Sông Xanh luôn sẵn sàng chuẩn bị trước khi quý khách lên tàu.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm">
{SPECIAL_REQUESTS.map((req) => (
<label key={req.id} className="flex items-start gap-space-xs p-space-sm rounded-lg bg-surface-container hover:bg-surface-variant transition-colors cursor-pointer">
<input
  className="mt-1 text-secondary focus:ring-secondary accent-secondary"
  type="checkbox"
  checked={specialRequests.includes(req.id)}
  onChange={() => toggleSpecialRequest(req.id)}
/>
<div>
<span className="font-title-md text-body-md text-primary block font-medium">{req.title}</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">{req.subtitle}</span>
</div>
</label>
))}
</div>
</div>

{error && (
<div className="p-space-sm bg-error-container text-error rounded-xl font-body-md text-body-md">{error}</div>
)}

<div className="p-space-sm bg-surface-container-low rounded-xl">
<label className="flex items-start gap-space-sm cursor-pointer select-none">
<input
  checked={agreedToTerms}
  onChange={(e) => setAgreedToTerms(e.target.checked)}
  className="mt-1 w-4 h-4 rounded text-secondary focus:ring-secondary accent-secondary shrink-0"
  type="checkbox"
/>
<span className="font-body-md text-body-md text-on-surface-variant">
              Tôi cam kết thông tin cung cấp trên là chính xác và hoàn toàn đồng ý với
              <a className="text-secondary font-medium hover:underline" href="#">Quy chế vận chuyển hàng hải</a>
              cùng
              <a className="text-secondary font-medium hover:underline" href="#">Điều khoản bảo vệ dữ liệu cá nhân</a>
              của Sông Xanh Water Express.
            </span>
</label>
</div>
</div>

<div className="lg:col-span-4"><BookingSummarySidebar buttonText="Tiếp tục đến Thanh toán" onNext={submit} /></div>
</div>
</section>
</div></main><Footer />


    </>
  );
};

export default BookingPassengerInfo;
