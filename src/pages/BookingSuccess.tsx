import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useBookingSuccess } from '../hooks/useBookingSuccess';
import { TicketCard } from '../components/booking';

const BookingSuccess = () => {
  const { bookingConfirmation, resetBooking } = useBookingSuccess();

  if (!bookingConfirmation) return null;

  const { passengerInfo } = bookingConfirmation;
  const contact = passengerInfo.contact;

  return (
    <>
      <Header /><main className="w-full pt-20 bg-surface min-h-screen"><div className="flex flex-col w-full">

<section className="relative w-full overflow-hidden bg-primary-container py-space-lg text-on-primary">
<div className="relative max-w-6xl mx-auto px-gutter flex flex-col md:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-sm">
<span className="px-space-xs py-0.5 rounded bg-on-tertiary-container/20 text-on-tertiary-container font-label-sm uppercase tracking-widest font-semibold">Đặt vé thành công</span>
<span className="text-outline text-label-sm font-label-sm">/</span>
<span className="font-label-sm uppercase tracking-widest text-on-primary-container">Vé Điện Tử &amp; Xác Nhận Hành Trình</span>
</div>
<div className="flex items-center gap-space-sm text-on-primary-container font-body-md text-body-md">
<span className="material-symbols-outlined text-[18px] text-secondary-fixed">verified_user</span>
<span className="">Giao dịch bảo mật &amp; Chứng nhận vận chuyển</span>
</div>
</div>
</section>

<div className="w-full bg-surface-bright py-space-xl">
<div className="max-w-4xl mx-auto px-gutter flex flex-col items-center">

<div className="w-full text-center mb-space-lg">
<div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/10 mb-space-md shadow-sm relative">
<div className="absolute inset-0 rounded-full bg-secondary/20 animate-ping opacity-25"></div>
<div className="w-14 h-14 rounded-full bg-gradient-to-tr from-secondary to-on-tertiary-container text-on-primary flex items-center justify-center shadow-md">
<span className="material-symbols-outlined text-[32px]">done_all</span>
</div>
</div>
<p className="font-label-sm text-secondary uppercase tracking-widest font-semibold mb-space-xs">Hệ thống Đặt vé Trực tuyến Sông Xanh</p>
<h1 className="font-headline-lg text-headline-lg text-primary mb-space-sm font-normal">Đặt Vé Thành Công!</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Cảm ơn bạn <span className="font-title-md text-primary font-semibold">{contact.fullName}</span>. Vé điện tử của bạn đã được xác nhận và gửi tới email <span className="text-secondary font-medium underline">{contact.email}</span> &amp; SMS <span className="text-secondary font-medium">{contact.phone}</span>.
        </p>
</div>

<div className="w-full flex flex-col gap-space-lg mb-space-lg">
  <TicketCard confirmation={bookingConfirmation} />
  {bookingConfirmation.returnTrip && bookingConfirmation.returnSeats && (
    <TicketCard 
      confirmation={{
        ...bookingConfirmation, 
        trip: bookingConfirmation.returnTrip, 
        seats: bookingConfirmation.returnSeats 
      }} 
      isReturn={true} 
    />
  )}
</div>

<div className="w-full mb-space-xl">
<h2 className="font-headline-sm text-title-md text-primary mb-space-sm uppercase tracking-wide">Tiện ích vé &amp; Quản lý lịch trình</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-sm">
<button className="flex items-center justify-center gap-space-xs px-space-md py-space-sm bg-primary hover:bg-secondary text-on-primary rounded font-title-md text-body-md transition-colors shadow-sm group" type="button">
<span className="material-symbols-outlined text-[20px] group-hover:-translate-y-0.5 transition-transform">download</span>
<span className="">Tải vé PDF (Lưu máy)</span>
</button>
<button className="flex items-center justify-center gap-space-xs px-space-md py-space-sm bg-surface-container-low hover:bg-surface-container text-primary rounded font-title-md text-body-md transition-colors" type="button">
<span className="material-symbols-outlined text-[20px] text-secondary">forward_to_inbox</span>
<span className="">Gửi lại qua Email / Zalo</span>
</button>
<button className="flex items-center justify-center gap-space-xs px-space-md py-space-sm bg-surface-container-low hover:bg-surface-container text-primary rounded font-title-md text-body-md transition-colors" type="button">
<span className="material-symbols-outlined text-[20px] text-on-tertiary-container">event</span>
<span className="">Thêm vào Lịch / Wallet</span>
</button>
<a className="flex items-center justify-center gap-space-xs px-space-md py-space-sm bg-surface-container-low hover:bg-surface-container text-primary rounded font-title-md text-body-md transition-colors" href="https://maps.google.com" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-[20px] text-secondary">explore</span>
<span className="">Chỉ đường tới Bến</span>
</a>
</div>
</div>

<div className="w-full bg-surface-container-low rounded-xl p-space-lg mb-space-xl shadow-sm">
<div className="flex items-center gap-space-xs mb-space-md">
<span className="material-symbols-outlined text-[24px] text-on-tertiary-container">info</span>
<h3 className="font-title-md text-title-md text-primary font-bold">Hướng Dẫn Lên Tàu Quan Trọng</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md font-body-md text-body-md text-on-surface-variant">
<div className="flex items-start gap-space-sm bg-surface-container-lowest p-space-md rounded-lg">
<div className="w-8 h-8 rounded-full bg-secondary/15 text-secondary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px]">schedule</span>
</div>
<div>
<p className="font-title-md text-body-lg text-primary font-semibold mb-1">Thời gian tập trung</p>
<p className="leading-relaxed">Quý khách vui lòng có mặt tại nhà chờ trước giờ tàu chạy ít nhất <strong className="text-primary font-semibold">15 phút</strong> để làm thủ tục check-in.</p>
</div>
</div>
<div className="flex items-start gap-space-sm bg-surface-container-lowest p-space-md rounded-lg">
<div className="w-8 h-8 rounded-full bg-secondary/15 text-secondary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px]">qr_code_scanner</span>
</div>
<div>
<p className="font-title-md text-body-lg text-primary font-semibold mb-1">Mã QR lên tàu</p>
<p className="leading-relaxed">Chuẩn bị sẵn màn hình điện thoại có mã QR hoặc bản in để quét tại cửa tự động trước khi bước xuống cầu phao.</p>
</div>
</div>
<div className="flex items-start gap-space-sm bg-surface-container-lowest p-space-md rounded-lg">
<div className="w-8 h-8 rounded-full bg-secondary/15 text-secondary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px]">luggage</span>
</div>
<div>
<p className="font-title-md text-body-lg text-primary font-semibold mb-1">Hành lý &amp; Trợ giúp</p>
<p className="leading-relaxed">Mỗi hành khách được mang tối đa 1 kiện hành lý xách tay 10kg. Nhân viên hỗ trợ xe đẩy và người lớn tuổi luôn túc trực tại bến.</p>
</div>
</div>
<div className="flex items-start gap-space-sm bg-surface-container-lowest p-space-md rounded-lg">
<div className="w-8 h-8 rounded-full bg-secondary/15 text-secondary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px]">travel_explore</span>
</div>
<div>
<p className="font-title-md text-body-lg text-primary font-semibold mb-1">An toàn đường sông</p>
<p className="leading-relaxed">Áo phao tiêu chuẩn được bố trí sẵn dưới mỗi ghế ngồi. Vui lòng tuân theo hiệu lệnh của thuyền trưởng và thủy thủ đoàn.</p>
</div>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center justify-center gap-space-md w-full pt-space-sm">
<Link className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm bg-surface-container-high hover:bg-surface-variant text-primary rounded font-title-md text-body-md transition-colors" onClick={resetBooking} to="/">
<span className="material-symbols-outlined text-[18px]">home</span>
<span className="">Quay về Trang chủ</span>
</Link>
<Link className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm bg-on-tertiary-container hover:bg-secondary text-on-primary rounded font-title-md text-body-md transition-colors shadow-sm" onClick={resetBooking} to="/search">
<span className="material-symbols-outlined text-[18px]">calendar_month</span>
<span className="">Đặt Vé Chuyến Khác</span>
</Link>
</div>
</div>
</div>

</div></main><Footer />


    </>
  );
};

export default BookingSuccess;
