import Header from '../components/Header';
import Footer from '../components/Footer';
import BookingSummarySidebar from '../components/BookingSummarySidebar';
import { useSeatSelection } from '../hooks/useSeatSelection';
import { SeatMapSection } from '../components/booking';
import { useBooking } from '../context/BookingContext';

const BookingSeatSelection = () => {
  const {
    selectedTrip,
    seatMap,
    loading,
    selectedSeatIds,
    selectedSeats,
    toggleSeat,
    maxSeats,
    canContinue,
    goToPassengerInfo,
    countdown,
    isReturn,
  } = useSeatSelection();
  const { bookingData } = useBooking();

  if (!selectedTrip) return null;

  return (
    <>
      <Header /><main className="w-full pt-20 bg-surface min-h-screen"><div className="flex flex-col w-full">

<section className="w-full bg-surface-container-lowest shadow-sm py-space-md">
<div className="max-w-7xl mx-auto px-gutter">

<div className="flex flex-col md:flex-row md:items-center justify-between pb-space-md gap-space-xs">
<div>
<span className="font-label-sm text-label-sm text-outline uppercase tracking-widest">12_Booking_Seat_Selection</span>
<h1 className="font-headline-sm text-headline-sm text-primary tracking-tight">Lựa Chọn Chỗ Ngồi Trực Quan</h1>
</div>
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md bg-surface-container px-space-sm py-space-xs rounded-full self-start md:self-auto">
<span className="material-symbols-outlined text-secondary text-[18px]">timer</span>
<span className="">Thời gian giữ ghế tạm: <strong className={countdown.expired ? 'text-error font-bold' : 'text-primary font-bold'}>{countdown.formatted}</strong></span>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-gutter py-space-xl w-full">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<div className="lg:col-span-8 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-secondary-fixed shadow-sm">
<span className="material-symbols-outlined text-[28px]">directions_boat</span>
</div>
<div>
<div className="flex items-center gap-space-xs">
<span className="font-title-md text-title-md text-primary font-bold">Tàu {selectedTrip.vessel.name} {selectedTrip.code}</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">{selectedTrip.vessel.description}</p>
</div>
</div>
<div className="flex items-center gap-space-sm self-end md:self-auto text-on-surface-variant font-label-sm text-label-sm">
{selectedTrip.vessel.amenities.map((a) => (
<span key={a} className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-secondary"></span> {a}</span>
))}
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
<div className="grid grid-cols-2 sm:grid-cols-4 gap-space-md">

<div className="flex items-center gap-space-xs">
<div className="w-7 h-7 rounded-lg bg-surface-container-low shadow-sm flex items-center justify-center">
<span className="material-symbols-outlined text-outline text-[16px]">airline_seat_recline_extra</span>
</div>
<span className="font-body-md text-body-md text-on-surface">Ghế trống</span>
</div>

<div className="flex items-center gap-space-xs">
<div className="w-7 h-7 rounded-lg bg-on-tertiary-container text-on-primary shadow-sm flex items-center justify-center font-bold text-label-sm">
<span className="material-symbols-outlined text-[16px]">check</span>
</div>
<span className="font-body-md text-body-md text-primary font-semibold">Đang chọn</span>
</div>

<div className="flex items-center gap-space-xs">
<div className="w-7 h-7 rounded-lg bg-surface-variant text-outline flex items-center justify-center opacity-60">
<span className="material-symbols-outlined text-[16px]">close</span>
</div>
<span className="font-body-md text-body-md text-outline">Đã kín chỗ</span>
</div>

<div className="flex items-center gap-space-xs">
<div className="w-7 h-7 rounded-lg bg-secondary-container text-on-secondary-container shadow-sm flex items-center justify-center">
<span className="material-symbols-outlined text-[16px]">accessible_forward</span>
</div>
<span className="font-body-md text-body-md text-secondary font-medium">Ghế ưu tiên</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm relative overflow-hidden">

<div className="flex flex-col items-center mb-space-lg relative">
<div className="w-32 h-14 bg-surface-container-high rounded-t-full flex items-center justify-center text-primary-container shadow-inner">
<div className="flex flex-col items-center">
<span className="material-symbols-outlined text-secondary text-[22px]">navigation</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">MŨI TÀU (BOW)</span>
</div>
</div>
<div className="w-full max-w-sm h-1 bg-surface-variant rounded-full mt-space-xs"></div>
<div className="mt-space-xs flex items-center gap-space-xs text-outline font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]">sports_motorsports</span>
<span className="">Buồng Lái Thuyền Trưởng &amp; Lối Thoát Hiểm Khẩn Cấp Số 1</span>
</div>
</div>

{loading && <div className="p-space-lg text-center text-on-surface-variant font-body-md text-body-md">Đang tải sơ đồ ghế...</div>}

{!loading && seatMap && seatMap.sections.map((section) => (
  <SeatMapSection key={section.id} section={section} selectedIds={selectedSeatIds} onToggle={(seatId) => {
    const seat = section.rows.flat().find((s) => s.id === seatId);
    if (seat) toggleSeat(seat);
  }} />
))}
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-start gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[24px]">wb_sunny</span>
<div>
<h4 className="font-title-md text-body-md font-bold text-primary">Hướng nắng buổi sáng</h4>
<p className="font-body-md text-body-md text-on-surface-variant">Dãy A &amp; B nằm phía đón bình minh sông Sài Gòn, rất lý tưởng để chụp ảnh tòa nhà Bitexco &amp; Ba Son.</p>
</div>
</div>
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-start gap-space-sm">
<span className="material-symbols-outlined text-on-tertiary-container text-[24px]">verified_user</span>
<div>
<h4 className="font-title-md text-body-md font-bold text-primary">An toàn hàng hải 100%</h4>
<p className="font-body-md text-body-md text-on-surface-variant">Toàn bộ chỗ ngồi đều trang bị áo phao đạt kiểm định của Cục Đăng kiểm Đường thủy Việt Nam.</p>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low text-on-surface-variant font-body-md text-body-md text-center">
  Đã chọn {selectedSeatIds.length}/{maxSeats} ghế theo số hành khách đã khai báo.
</div>
</div>

<div className="lg:col-span-4 sticky top-24">
<BookingSummarySidebar
  buttonText={!isReturn && bookingData.searchParams?.tripType === 'round-trip' ? "Tiếp tục: Chọn chuyến về" : "Tiếp tục: Nhập thông tin khách"}
  onNext={goToPassengerInfo}
  disabled={!canContinue}
  trip={selectedTrip}
  seats={selectedSeats}
  showSeatChips
  onRemoveSeat={(seatId) => {
    const seat = seatMap?.sections.flatMap((s) => s.rows.flat()).find((s) => s.id === seatId);
    if (seat) toggleSeat(seat);
  }}
/>
</div>
</div>
</section>


</div></main><Footer />


    </>
  );
};

export default BookingSeatSelection;
