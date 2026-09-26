import { useState } from 'react';
import Header from '../components/Header';
import BookingStepper from '../components/BookingStepper';
import Footer from '../components/Footer';
import { useBookingSearch } from '../hooks/useBookingSearch';
import { StationSelect } from '../components/booking';

const BookingSearch = () => {
  const { stations, from, setFrom, to, setTo, date, setDate, returnDate, setReturnDate, passengers, setPassengers, swapStations, handleSearch, tripType, setTripType } =
    useBookingSearch();
  const [passengerOpen, setPassengerOpen] = useState(false);

  return (
    <>
      <Header /><main className="w-full pt-20 bg-surface min-h-screen"><div className="flex flex-col w-full">

<div className="relative w-full overflow-hidden">
<div className="absolute -top-40 right-1/4 w-96 h-96 bg-secondary-container/30 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute top-10 left-10 w-80 h-80 bg-tertiary-fixed/30 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-gutter py-space-lg relative z-10">

<div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-md">
<div className="flex items-center gap-space-xs font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
<span className="hover:text-primary transition-colors cursor-pointer">Trang chủ</span>
<span className="text-outline-variant">/</span>
<span className="text-on-tertiary-container font-semibold">Đặt vé trực tuyến</span>
</div>
<div className="inline-flex items-center gap-space-xs bg-surface-container px-space-sm py-1 rounded-full text-outline font-label-sm text-label-sm">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
<span className="">Hệ thống thời gian thực</span>
</div>
</div>

<BookingStepper currentStep={1} />

<div className="max-w-3xl mb-space-lg">
<span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-semibold">Tuyến sông Sài Gòn Di Sản & Đô Thị Mới</span>
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-space-xs mb-space-xs font-normal">
          Bắt đầu hành trình trên sông Sài Gòn
        </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          Tận hưởng góc nhìn khoáng đạt của đô thị hoa lệ khi lướt êm qua những công trình biểu tượng. Lựa chọn bến cảng khởi hành để bắt đầu chuyến du ngoạn sông nước độc bản.
        </p>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-space-md md:p-space-lg shadow-xl shadow-primary-container/5 relative z-20">

<div className="flex items-center justify-between flex-wrap gap-space-sm pb-space-md mb-space-md">
<div className="inline-flex bg-surface-container p-1 rounded-lg">
<button type="button" onClick={() => setTripType('one-way')} className={`px-space-md py-space-xs rounded font-title-md text-body-md shadow-sm transition-all flex items-center gap-1.5 ${tripType === 'one-way' ? 'bg-surface-container-lowest text-primary' : 'text-on-surface-variant hover:text-primary'}`}>
<span className={`material-symbols-outlined text-[18px] ${tripType === 'one-way' ? 'text-on-tertiary-container' : ''}`}>arrow_forward</span>
<span className="">Một chiều</span>
</button>
<button type="button" onClick={() => setTripType('round-trip')} className={`px-space-md py-space-xs rounded font-title-md text-body-md shadow-sm transition-all flex items-center gap-1.5 ${tripType === 'round-trip' ? 'bg-surface-container-lowest text-primary' : 'text-on-surface-variant hover:text-primary'}`}>
<span className={`material-symbols-outlined text-[18px] ${tripType === 'round-trip' ? 'text-on-tertiary-container' : ''}`}>sync_alt</span>
<span className="">Khứ hồi</span>
</button>
</div>
<div className="flex items-center gap-space-sm text-outline font-label-md text-label-md">
<span className="material-symbols-outlined text-[18px] text-secondary">verified_user</span>
<span className="">Giữ chỗ ngay • Thanh toán linh hoạt</span>
</div>
</div>

<form className="space-y-space-md" id="booking-search-form" onSubmit={handleSearch}>

<div className="grid grid-cols-1 lg:grid-cols-11 gap-space-sm items-center">

<StationSelect
  id="origin-pier"
  label="Bến khởi hành"
  icon="anchor"
  iconColorClass="text-secondary"
  value={from}
  onChange={setFrom}
  options={stations}
/>

<div className="lg:col-span-1 flex justify-center -my-2 lg:my-0">
<button aria-label="Đổi chiều bến tàu" className="w-11 h-11 rounded-full bg-surface-container-lowest shadow-md hover:bg-secondary-container hover:text-on-secondary-container text-primary flex items-center justify-center transition-transform active:scale-95 group" onClick={swapStations} type="button">
<span className="material-symbols-outlined text-[20px] transition-transform group-hover:rotate-180">swap_horiz</span>
</button>
</div>

<StationSelect
  id="dest-pier"
  label="Bến đến"
  icon="location_on"
  iconColorClass="text-on-tertiary-container"
  value={to}
  onChange={setTo}
  options={stations}
/>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm">

<div className="bg-surface-container-low p-space-sm rounded-xl">
<label className="flex items-center gap-1 font-label-sm text-label-sm uppercase tracking-wider text-outline mb-1" htmlFor="dep-date">
<span className="material-symbols-outlined text-[16px] text-primary">calendar_today</span>
<span className="">Ngày khởi hành</span>
</label>
<div className="flex items-center justify-between">
<input className="bg-transparent font-title-md text-title-md text-primary font-medium focus:outline-none w-full cursor-pointer" id="dep-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
<span className="material-symbols-outlined text-outline text-[18px]">event</span>
</div>
</div>

<div className={`bg-surface-container-low p-space-sm rounded-xl transition-opacity ${tripType === 'one-way' ? 'opacity-40' : 'opacity-100'}`} id="return-date-card">
<label className="flex items-center gap-1 font-label-sm text-label-sm uppercase tracking-wider text-outline mb-1" htmlFor="ret-date">
<span className="material-symbols-outlined text-[16px]">event_repeat</span>
<span className="">Ngày về (Tùy chọn)</span>
</label>
<div className="flex items-center justify-between">
<input className={`bg-transparent font-title-md font-medium focus:outline-none w-full ${tripType === 'one-way' ? 'text-outline cursor-not-allowed text-body-md' : 'text-primary cursor-pointer text-title-md'}`} disabled={tripType === 'one-way'} id="ret-date" type={tripType === 'one-way' ? 'text' : 'date'} value={tripType === 'one-way' ? 'Chọn ngày về' : returnDate} onChange={(e) => setReturnDate(e.target.value)} />
<span className="material-symbols-outlined text-outline text-[18px]">calendar_month</span>
</div>
</div>

<div className="bg-surface-container-low p-space-sm rounded-xl relative">
<label className="flex items-center gap-1 font-label-sm text-label-sm uppercase tracking-wider text-outline mb-1">
<span className="material-symbols-outlined text-[16px] text-primary">groups</span>
<span className="">Hành khách</span>
</label>
<button className="w-full flex items-center justify-between text-left focus:outline-none" onClick={() => setPassengerOpen((v) => !v)} type="button">
<span className="font-title-md text-title-md text-primary font-medium">{passengers} Người lớn</span>
<span className="material-symbols-outlined text-outline">arrow_drop_down</span>
</button>

{passengerOpen && (
<div className="absolute top-full left-0 mt-2 w-72 bg-surface-container-lowest p-space-md rounded-xl shadow-xl z-30 space-y-space-sm">
<div className="flex items-center justify-between pb-space-xs">
<div>
<span className="block font-title-md text-body-md text-primary font-semibold">Người lớn</span>
<span className="block font-label-sm text-label-sm text-outline">≥ 12 tuổi</span>
</div>
<div className="flex items-center gap-2">
<button className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-surface-variant font-bold" onClick={() => setPassengers((p) => Math.max(1, p - 1))} type="button">-</button>
<span className="w-6 text-center font-title-md text-body-md font-semibold text-primary">{passengers}</span>
<button className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-surface-variant font-bold" onClick={() => setPassengers((p) => Math.min(8, p + 1))} type="button">+</button>
</div>
</div>
<div className="pt-space-xs">
<button className="w-full py-1.5 bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider rounded" onClick={() => setPassengerOpen(false)} type="button">Xong</button>
</div>
</div>
)}
</div>
</div>

<div className="pt-space-sm flex flex-col sm:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-xs text-on-surface-variant font-body-md text-body-md">
<span className="material-symbols-outlined text-[20px] text-secondary">schedule</span>
<span className="">Thời gian hành trình dự kiến: <strong className="text-primary font-semibold">25 - 35 phút / chuyến</strong></span>
</div>

<button className="w-full sm:w-auto px-space-xl py-3.5 bg-on-tertiary-container hover:bg-secondary text-on-primary font-title-md text-title-md rounded-xl transition-all duration-200 flex items-center justify-center gap-space-xs shadow-lg shadow-on-tertiary-container/20 group" type="submit">
<span className="">Tìm chuyến tàu</span>
<span className="material-symbols-outlined text-[22px] transition-transform group-hover:translate-x-1">arrow_forward</span>
</button>
</div>
</form>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md my-space-xl">
<div className="bg-surface-container-lowest p-space-md rounded-xl flex items-start gap-space-sm shadow-sm">
<div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[22px]">nest_clock_farsight_analog</span>
</div>
<div>
<h2 className="font-title-md text-body-md text-primary font-bold mb-0.5">Đúng giờ 100%</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Lộ trình vận hành chính xác theo biểu đồ sóng, hạn chế tối đa độ trễ bến bãi.</p>
</div>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-xl flex items-start gap-space-sm shadow-sm">
<div className="w-10 h-10 rounded-full bg-tertiary-fixed text-on-tertiary-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[22px]">mark_email_read</span>
</div>
<div>
<h2 className="font-title-md text-body-md text-primary font-bold mb-0.5">Vé điện tử tức thì</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Nhận vé mã QR bảo mật ngay qua SMS &amp; Email sau thao tác thanh toán 30 giây.</p>
</div>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-xl flex items-start gap-space-sm shadow-sm">
<div className="w-10 h-10 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[22px]">published_with_changes</span>
</div>
<div>
<h2 className="font-title-md text-body-md text-primary font-bold mb-0.5">Đổi chuyến linh hoạt</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Hỗ trợ dời giờ hoặc chuyến tàu trực tuyến dễ dàng trước giờ xuất bến 60 phút.</p>
</div>
</div>
</div>
</div>
</div>
</div></main><Footer />


    </>
  );
};

export default BookingSearch;
