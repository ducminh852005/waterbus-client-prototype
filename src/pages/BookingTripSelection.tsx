import BookingStepper from '../components/BookingStepper';
import { useTripSearch } from '../hooks/useTripSearch';
import { DateStrip, TripCard } from '../components/booking';
import { getStationByCodeSync } from '../services';

const BookingTripSelection = () => {
  const {
    searchParams,
    trips,
    loading,
    sortBy,
    setSortBy,
    selectTrip,
    weekDates,
    changeDate,
    isReturn,
  } = useTripSearch();

  if (!searchParams) return null;

  const origin = getStationByCodeSync(isReturn ? searchParams.to : searchParams.from);
  const dest = getStationByCodeSync(isReturn ? searchParams.from : searchParams.to);

  return (
    <>
      <main className="bg-surface min-h-screen w-full pt-20">
        <div className="flex w-full flex-col">
          <div className="px-gutter py-space-md mx-auto max-w-7xl">
            <BookingStepper currentStep={2} />
          </div>

          <section className="bg-surface-container-lowest w-full shadow-sm">
            <div className="px-gutter py-space-sm gap-space-sm mx-auto flex max-w-7xl flex-wrap items-center justify-between">
              <div className="gap-x-space-md text-on-surface flex flex-wrap items-center gap-y-1">
                <div className="font-title-md text-title-md text-primary flex items-center gap-1.5 font-semibold">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    anchor
                  </span>
                  <span className="">
                    {origin?.name} ({origin?.shortName})
                  </span>
                  <span className="material-symbols-outlined text-on-tertiary-container mx-0.5 text-[18px]">
                    arrow_forward
                  </span>
                  <span className="">
                    {dest?.name} ({dest?.shortName})
                  </span>
                </div>
                <div className="font-body-md text-body-md text-on-surface-variant flex items-center gap-2">
                  <span className="bg-outline h-1 w-1 rounded-full"></span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                    {isReturn ? searchParams.returnDate : searchParams.date}
                  </span>
                  <span className="bg-outline h-1 w-1 rounded-full"></span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">group</span>
                    {String(searchParams.passengers).padStart(2, '0')} Người lớn •{' '}
                    {isReturn ? 'Chiều Về' : 'Chiều Đi'}
                  </span>
                </div>
              </div>
            </div>
          </section>

          <DateStrip
            dates={weekDates}
            selectedDate={isReturn ? searchParams.returnDate! : searchParams.date}
            onSelect={changeDate}
          />

          <div className="px-gutter py-space-lg mx-auto w-full max-w-7xl">
            <div className="gap-space-lg grid grid-cols-1 items-start lg:grid-cols-12">
              <aside className="space-y-space-md lg:col-span-4">
                <div className="bg-primary-container text-on-primary-container overflow-hidden rounded-xl shadow-md">
                  <div className="relative h-28 w-full bg-cover bg-center">
                    <div className="from-primary-container absolute inset-0 bg-gradient-to-t to-transparent"></div>
                  </div>
                  <div className="p-space-md relative -mt-4">
                    <span className="font-label-sm text-label-sm text-secondary-container tracking-widest uppercase">
                      Chính Sách Chuyến Sông Xanh
                    </span>
                    <h3 className="font-headline-sm text-title-md text-on-primary mt-1 mb-2">
                      Trải Nghiệm Hành Trình Thư Thái
                    </h3>
                    <ul className="font-body-md text-label-md text-on-primary-container space-y-1.5">
                      <li className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-secondary-fixed text-[16px]">
                          schedule
                        </span>
                        Có mặt trước giờ khởi hành 15 phút tại bến
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-secondary-fixed text-[16px]">
                          wifi
                        </span>
                        Miễn phí Wi-Fi tốc độ cao &amp; cổng sạc điện thoại
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-secondary-fixed text-[16px]">
                          luggage
                        </span>
                        Miễn phí 01 kiện hành lý xách tay tiêu chuẩn
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>

              <main className="space-y-space-md lg:col-span-8">
                <div className="gap-space-sm flex flex-wrap items-center justify-between px-1">
                  <div className="flex items-center gap-2">
                    <span className="font-title-md text-title-md text-primary font-semibold">
                      {isReturn ? 'Tuyến Trở Về (Chiều Về)' : 'Tuyến Khởi Hành (Chiều Đi)'}:{' '}
                      {origin?.shortName} ➔ {dest?.shortName}
                    </span>
                    <span className="bg-secondary-container text-on-secondary-container font-label-sm text-label-sm rounded-full px-2 py-0.5 font-bold">
                      {trips.length} Chuyến Khả Dụng
                    </span>
                  </div>
                  <div className="font-label-md text-label-md text-on-surface-variant flex items-center gap-2">
                    <span className="">Sắp xếp theo:</span>
                    <select
                      className="bg-surface-container-lowest text-primary font-body-md text-body-md cursor-pointer rounded px-2.5 py-1 shadow-sm focus:outline-none"
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
                  <div className="p-space-lg text-on-surface-variant font-body-md text-body-md text-center">
                    Đang tải danh sách chuyến...
                  </div>
                )}

                {!loading && trips.length === 0 && (
                  <div className="p-space-lg text-on-surface-variant font-body-md text-body-md text-center">
                    Không tìm thấy chuyến phù hợp cho ngày đã chọn.
                  </div>
                )}

                {!loading &&
                  trips.map((trip) => (
                    <TripCard
                      key={trip.id}
                      trip={trip}
                      originLabel={origin?.shortName ?? trip.from}
                      destLabel={dest?.shortName ?? trip.to}
                      onSelect={() => selectTrip(trip)}
                    />
                  ))}

                <div className="p-space-md bg-surface-container-low gap-space-sm text-on-surface-variant flex items-start rounded-xl">
                  <span className="material-symbols-outlined text-secondary mt-0.5 text-[22px]">
                    info
                  </span>
                  <div className="text-body-md space-y-1">
                    <p className="font-title-md text-body-md text-primary font-semibold">
                      Lưu ý cho quý khách:
                    </p>
                    <p className="font-body-md text-body-md leading-relaxed">
                      Giá vé niêm yết áp dụng cho chuyến di chuyển một chiều giữa{' '}
                      {origin?.shortName} và {dest?.shortName}. Vé đã mua được hỗ trợ hoàn đổi trước
                      02 giờ tàu khởi hành theo quy định của Sông Xanh Water Express. Sau khi chọn
                      chuyến, quý khách sẽ tiến hành chọn vị trí ghế ngồi trực quan ở Bước 3.
                    </p>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BookingTripSelection;
