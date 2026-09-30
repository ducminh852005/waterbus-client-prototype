import { useState } from 'react';
import { useBookingSearch } from '../../hooks/useBookingSearch';
import StationSelect from './StationSelect';

export default function BookingSearchWidget() {
  const {
    stations,
    from,
    setFrom,
    to,
    setTo,
    date,
    setDate,
    returnDate,
    setReturnDate,
    passengers,
    setPassengers,
    swapStations,
    handleSearch,
    tripType,
    setTripType,
  } = useBookingSearch();
  const [passengerOpen, setPassengerOpen] = useState(false);

  return (
    <div className="bg-surface-container-lowest p-space-md md:p-space-lg shadow-primary-container/5 relative z-20 rounded-2xl shadow-xl">
      <div className="gap-space-sm pb-space-md mb-space-md flex flex-wrap items-center justify-between">
        <div className="bg-surface-container inline-flex rounded-lg p-1">
          <button
            type="button"
            onClick={() => setTripType('one-way')}
            className={`px-space-md py-space-xs font-title-md text-body-md flex items-center gap-1.5 rounded shadow-sm transition-all ${
              tripType === 'one-way'
                ? 'bg-surface-container-lowest text-primary'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            <span
              className={`material-symbols-outlined text-[18px] ${
                tripType === 'one-way' ? 'text-on-tertiary-container' : ''
              }`}
            >
              arrow_forward
            </span>
            <span className="">Một chiều</span>
          </button>
          <button
            type="button"
            onClick={() => setTripType('round-trip')}
            className={`px-space-md py-space-xs font-title-md text-body-md flex items-center gap-1.5 rounded shadow-sm transition-all ${
              tripType === 'round-trip'
                ? 'bg-surface-container-lowest text-primary'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            <span
              className={`material-symbols-outlined text-[18px] ${
                tripType === 'round-trip' ? 'text-on-tertiary-container' : ''
              }`}
            >
              sync_alt
            </span>
            <span className="">Khứ hồi</span>
          </button>
        </div>
        <div className="gap-space-sm text-outline font-label-md text-label-md flex items-center">
          <span className="material-symbols-outlined text-secondary text-[18px]">
            verified_user
          </span>
          <span className="">Giữ chỗ ngay • Thanh toán linh hoạt</span>
        </div>
      </div>

      <form className="space-y-space-md" id="booking-search-form" onSubmit={handleSearch}>
        <div className="gap-space-sm grid grid-cols-1 items-center lg:grid-cols-11">
          <StationSelect
            id="origin-pier"
            label="Bến khởi hành"
            icon="anchor"
            iconColorClass="text-secondary"
            value={from}
            onChange={setFrom}
            options={stations}
          />

          <div className="-my-2 flex justify-center lg:col-span-1 lg:my-0">
            <button
              aria-label="Đổi chiều bến tàu"
              className="bg-surface-container-lowest hover:bg-secondary-container hover:text-on-secondary-container text-primary group flex h-11 w-11 items-center justify-center rounded-full shadow-md transition-transform active:scale-95"
              onClick={swapStations}
              type="button"
            >
              <span className="material-symbols-outlined text-[20px] transition-transform group-hover:rotate-180">
                swap_horiz
              </span>
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

        <div className="gap-space-sm grid grid-cols-1 md:grid-cols-3">
          <div className="bg-surface-container-low p-space-sm rounded-xl">
            <label
              className="font-label-sm text-label-sm text-outline mb-1 flex items-center gap-1 tracking-wider uppercase"
              htmlFor="dep-date"
            >
              <span className="material-symbols-outlined text-primary text-[16px]">
                calendar_today
              </span>
              <span className="">Ngày khởi hành</span>
            </label>
            <div className="flex items-center justify-between">
              <input
                className="font-title-md text-title-md text-primary w-full cursor-pointer bg-transparent font-medium focus:outline-none"
                id="dep-date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <span className="material-symbols-outlined text-outline text-[18px]">event</span>
            </div>
          </div>

          <div
            className={`bg-surface-container-low p-space-sm rounded-xl transition-opacity ${
              tripType === 'one-way' ? 'opacity-40' : 'opacity-100'
            }`}
            id="return-date-card"
          >
            <label
              className="font-label-sm text-label-sm text-outline mb-1 flex items-center gap-1 tracking-wider uppercase"
              htmlFor="ret-date"
            >
              <span className="material-symbols-outlined text-[16px]">event_repeat</span>
              <span className="">Ngày về (Tùy chọn)</span>
            </label>
            <div className="flex items-center justify-between">
              <input
                className={`font-title-md w-full bg-transparent font-medium focus:outline-none ${
                  tripType === 'one-way'
                    ? 'text-outline text-body-md cursor-not-allowed'
                    : 'text-primary text-title-md cursor-pointer'
                }`}
                disabled={tripType === 'one-way'}
                id="ret-date"
                type={tripType === 'one-way' ? 'text' : 'date'}
                value={tripType === 'one-way' ? 'Chọn ngày về' : returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
              />
              <span className="material-symbols-outlined text-outline text-[18px]">
                calendar_month
              </span>
            </div>
          </div>

          <div className="bg-surface-container-low p-space-sm relative rounded-xl">
            <label className="font-label-sm text-label-sm text-outline mb-1 flex items-center gap-1 tracking-wider uppercase">
              <span className="material-symbols-outlined text-primary text-[16px]">groups</span>
              <span className="">Hành khách</span>
            </label>
            <button
              className="flex w-full items-center justify-between text-left focus:outline-none"
              onClick={() => setPassengerOpen((v) => !v)}
              type="button"
            >
              <span className="font-title-md text-title-md text-primary font-medium">
                {passengers} Người lớn
              </span>
              <span className="material-symbols-outlined text-outline">arrow_drop_down</span>
            </button>

            {passengerOpen && (
              <div className="bg-surface-container-lowest p-space-md space-y-space-sm absolute top-full left-0 z-30 mt-2 w-72 rounded-xl shadow-xl">
                <div className="pb-space-xs flex items-center justify-between">
                  <div>
                    <span className="font-title-md text-body-md text-primary block font-semibold">
                      Người lớn
                    </span>
                    <span className="font-label-sm text-label-sm text-outline block">
                      ≥ 12 tuổi
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      className="bg-surface-container text-primary hover:bg-surface-variant flex h-7 w-7 items-center justify-center rounded-full font-bold"
                      onClick={() => setPassengers((p) => Math.max(1, p - 1))}
                      type="button"
                    >
                      -
                    </button>
                    <span className="font-title-md text-body-md text-primary w-6 text-center font-semibold">
                      {passengers}
                    </span>
                    <button
                      className="bg-surface-container text-primary hover:bg-surface-variant flex h-7 w-7 items-center justify-center rounded-full font-bold"
                      onClick={() => setPassengers((p) => Math.min(8, p + 1))}
                      type="button"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="pt-space-xs">
                  <button
                    className="bg-primary text-on-primary font-label-md text-label-md w-full rounded py-1.5 tracking-wider uppercase"
                    onClick={() => setPassengerOpen(false)}
                    type="button"
                  >
                    Xong
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="pt-space-sm gap-space-md flex flex-col items-center justify-between sm:flex-row">
          <div className="gap-space-xs text-on-surface-variant font-body-md text-body-md flex items-center">
            <span className="material-symbols-outlined text-secondary text-[20px]">schedule</span>
            <span className="">
              Thời gian hành trình dự kiến:{' '}
              <strong className="text-primary font-semibold">25 - 35 phút / chuyến</strong>
            </span>
          </div>

          <button
            className="px-space-xl bg-on-tertiary-container hover:bg-secondary text-on-primary font-title-md text-title-md gap-space-xs shadow-on-tertiary-container/20 group flex w-full items-center justify-center rounded-xl py-3.5 shadow-lg transition-all duration-200 sm:w-auto"
            type="submit"
          >
            <span className="">Tìm chuyến tàu</span>
            <span className="material-symbols-outlined text-[22px] transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
