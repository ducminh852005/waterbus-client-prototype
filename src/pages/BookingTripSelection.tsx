import Header from '../components/Header';
import BookingStepper from '../components/BookingStepper';
import Footer from '../components/Footer';
import { useTripSearch } from '../hooks/useTripSearch';
import { DateStrip, TripCard } from '../components/booking';
import { getStationByCode } from '../mocks';

const BookingTripSelection = () => {
  const { searchParams, trips, loading, sortBy, setSortBy, selectTrip, weekDates, changeDate, isReturn } = useTripSearch();

  if (!searchParams) return null;

  const origin = getStationByCode(isReturn ? searchParams.to : searchParams.from);
  const dest = getStationByCode(isReturn ? searchParams.from : searchParams.to);

  return (
    <>
      <Header /><main className="w-full pt-20 bg-surface min-h-screen"><div className="flex flex-col w-full">

<div className="max-w-7xl mx-auto px-gutter py-space-md"><BookingStepper currentStep={2} /></div>

<section className="w-full bg-surface-container-lowest shadow-sm">
<div className="max-w-7xl mx-auto px-gutter py-space-sm flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex flex-wrap items-center gap-x-space-md gap-y-1 text-on-surface">
<div className="flex items-center gap-1.5 font-title-md text-title-md font-semibold text-primary">
<span className="material-symbols-outlined text-[20px] text-secondary">anchor</span>
<span className="">{origin?.name} ({origin?.shortName})</span>
<span className="material-symbols-outlined text-[18px] text-on-tertiary-container mx-0.5">arrow_forward</span>
<span className="">{dest?.name} ({dest?.shortName})</span>
</div>
<div className="flex items-center gap-2 font-body-md text-body-md text-on-surface-variant">
<span className="w-1 h-1 rounded-full bg-outline"></span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">calendar_today</span>
            {isReturn ? searchParams.returnDate : searchParams.date}
          </span>
<span className="w-1 h-1 rounded-full bg-outline"></span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">group</span>
            {String(searchParams.passengers).padStart(2, '0')} Người lớn • {isReturn ? 'Chiều Về' : 'Chiều Đi'}
          </span>
</div>
</div>
</div>
</section>

<DateStrip dates={weekDates} selectedDate={isReturn ? searchParams.returnDate! : searchParams.date} onSelect={changeDate} />

<div className="w-full max-w-7xl mx-auto px-gutter py-space-lg">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<aside className="lg:col-span-4 space-y-space-md">
<div className="rounded-xl overflow-hidden bg-primary-container text-on-primary-container shadow-md">
<div className="h-28 w-full bg-cover bg-center relative">
<div className="absolute inset-0 bg-gradient-to-t from-primary-container to-transparent"></div>
</div>
<div className="p-space-md -mt-4 relative">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-container">Chính Sách Chuyến Sông Xanh</span>
<h3 className="font-headline-sm text-title-md text-on-primary mt-1 mb-2">Trải Nghiệm Hành Trình Thư Thái</h3>
<ul className="space-y-1.5 font-body-md text-label-md text-on-primary-container">
<li className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-secondary-fixed">schedule</span>
                Có mặt trước giờ khởi hành 15 phút tại bến
              </li>
<li className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-secondary-fixed">wifi</span>
                Miễn phí Wi-Fi tốc độ cao &amp; cổng sạc điện thoại
              </li>
<li className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-secondary-fixed">luggage</span>
                Miễn phí 01 kiện hành lý xách tay tiêu chuẩn
              </li>
</ul>
</div>
</div>
</aside>

<main className="lg:col-span-8 space-y-space-md">

<div className="flex flex-wrap items-center justify-between gap-space-sm px-1">
<div className="flex items-center gap-2">
<span className="font-title-md text-title-md text-primary font-semibold">{isReturn ? 'Tuyến Trở Về' : 'Tuyến Khởi Hành'}: {origin?.shortName} ➔ {dest?.shortName}</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold">{trips.length} Chuyến Khả Dụng</span>
</div>
<div className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant">
<span className="">Sắp xếp theo:</span>
<select
  className="bg-surface-container-lowest text-primary px-2.5 py-1 rounded font-body-md text-body-md focus:outline-none shadow-sm cursor-pointer"
  value={sortBy}
  onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
>
<option value="earliest">Giờ khởi hành sớm nhất</option>
<option value="cheapest">Giá vé thấp nhất</option>
<option value="most-seats">Chỗ trống nhiều nhất</option>
</select>
</div>
</div>

{loading && (
  <div className="p-space-lg text-center text-on-surface-variant font-body-md text-body-md">Đang tải danh sách chuyến...</div>
)}

{!loading && trips.length === 0 && (
  <div className="p-space-lg text-center text-on-surface-variant font-body-md text-body-md">Không tìm thấy chuyến phù hợp cho ngày đã chọn.</div>
)}

{!loading && trips.map((trip) => (
  <TripCard
    key={trip.id}
    trip={trip}
    originLabel={origin?.shortName ?? trip.from}
    destLabel={dest?.shortName ?? trip.to}
    onSelect={() => selectTrip(trip)}
  />
))}

<div className="p-space-md rounded-xl bg-surface-container-low flex items-start gap-space-sm text-on-surface-variant">
<span className="material-symbols-outlined text-secondary text-[22px] mt-0.5">info</span>
<div className="text-body-md space-y-1">
<p className="font-title-md text-body-md font-semibold text-primary">Lưu ý cho quý khách:</p>
<p className="font-body-md text-body-md leading-relaxed">
              Giá vé niêm yết áp dụng cho chuyến di chuyển một chiều giữa {origin?.shortName} và {dest?.shortName}. Vé đã mua được hỗ trợ hoàn đổi trước 02 giờ tàu khởi hành theo quy định của Sông Xanh Water Express. Sau khi chọn chuyến, quý khách sẽ tiến hành chọn vị trí ghế ngồi trực quan ở Bước 3.
            </p>
</div>
</div>
</main>
</div>
</div>
</div></main><Footer />


    </>
  );
};

export default BookingTripSelection;
