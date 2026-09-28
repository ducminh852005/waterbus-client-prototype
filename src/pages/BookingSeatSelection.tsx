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
      <main className="bg-surface min-h-screen w-full pt-20">
        <div className="flex w-full flex-col">
          <section className="bg-surface-container-lowest py-space-md w-full shadow-sm">
            <div className="px-gutter mx-auto max-w-7xl">
              <div className="pb-space-md gap-space-xs flex flex-col justify-between md:flex-row md:items-center">
                <div>
                  <span className="font-label-sm text-label-sm text-outline tracking-widest uppercase">
                    12_Booking_Seat_Selection
                  </span>
                  <h1 className="font-headline-sm text-headline-sm text-primary tracking-tight">
                    Lựa Chọn Chỗ Ngồi Trực Quan
                  </h1>
                </div>
                <div className="gap-space-xs text-on-surface-variant font-label-md text-label-md bg-surface-container px-space-sm py-space-xs flex items-center self-start rounded-full md:self-auto">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    timer
                  </span>
                  <span className="">
                    Thời gian giữ ghế tạm:{' '}
                    <strong
                      className={
                        countdown.expired ? 'text-error font-bold' : 'text-primary font-bold'
                      }
                    >
                      {countdown.formatted}
                    </strong>
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className="px-gutter py-space-xl mx-auto w-full max-w-7xl">
            <div className="gap-space-lg grid grid-cols-1 items-start lg:grid-cols-12">
              <div className="gap-space-md flex flex-col lg:col-span-8">
                <div className="bg-surface-container-lowest p-space-md gap-space-md flex flex-col justify-between rounded-xl shadow-sm md:flex-row md:items-center">
                  <div className="gap-space-md flex items-center">
                    <div className="bg-primary text-secondary-fixed flex h-12 w-12 items-center justify-center rounded-xl shadow-sm">
                      <span className="material-symbols-outlined text-[28px]">directions_boat</span>
                    </div>
                    <div>
                      <div className="gap-space-xs flex items-center">
                        <span className="font-title-md text-title-md text-primary font-bold">
                          Tàu {selectedTrip.vessel.name} {selectedTrip.code}
                        </span>
                      </div>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        {selectedTrip.vessel.description}
                      </p>
                    </div>
                  </div>
                  <div className="gap-space-sm text-on-surface-variant font-label-sm text-label-sm flex items-center self-end md:self-auto">
                    {selectedTrip.vessel.amenities.map((a) => (
                      <span key={a} className="flex items-center gap-1">
                        <span className="bg-secondary h-2 w-2 rounded-full"></span> {a}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
                  <div className="gap-space-md grid grid-cols-2 sm:grid-cols-4">
                    <div className="gap-space-xs flex items-center">
                      <div className="bg-surface-container-low flex h-7 w-7 items-center justify-center rounded-lg shadow-sm">
                        <span className="material-symbols-outlined text-outline text-[16px]">
                          airline_seat_recline_extra
                        </span>
                      </div>
                      <span className="font-body-md text-body-md text-on-surface">Ghế trống</span>
                    </div>

                    <div className="gap-space-xs flex items-center">
                      <div className="bg-on-tertiary-container text-on-primary text-label-sm flex h-7 w-7 items-center justify-center rounded-lg font-bold shadow-sm">
                        <span className="material-symbols-outlined text-[16px]">check</span>
                      </div>
                      <span className="font-body-md text-body-md text-primary font-semibold">
                        Đang chọn
                      </span>
                    </div>

                    <div className="gap-space-xs flex items-center">
                      <div className="bg-surface-variant text-outline flex h-7 w-7 items-center justify-center rounded-lg opacity-60">
                        <span className="material-symbols-outlined text-[16px]">close</span>
                      </div>
                      <span className="font-body-md text-body-md text-outline">Đã kín chỗ</span>
                    </div>

                    <div className="gap-space-xs flex items-center">
                      <div className="bg-secondary-container text-on-secondary-container flex h-7 w-7 items-center justify-center rounded-lg shadow-sm">
                        <span className="material-symbols-outlined text-[16px]">
                          accessible_forward
                        </span>
                      </div>
                      <span className="font-body-md text-body-md text-secondary font-medium">
                        Ghế ưu tiên
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-surface-container-lowest p-space-lg relative overflow-hidden rounded-2xl shadow-sm">
                  <div className="mb-space-lg relative flex flex-col items-center">
                    <div className="bg-surface-container-high text-primary-container flex h-14 w-32 items-center justify-center rounded-t-full shadow-inner">
                      <div className="flex flex-col items-center">
                        <span className="material-symbols-outlined text-secondary text-[22px]">
                          navigation
                        </span>
                        <span className="font-label-sm text-label-sm text-primary font-bold tracking-widest uppercase">
                          MŨI TÀU (BOW)
                        </span>
                      </div>
                    </div>
                    <div className="bg-surface-variant mt-space-xs h-1 w-full max-w-sm rounded-full"></div>
                    <div className="mt-space-xs gap-space-xs text-outline font-label-sm text-label-sm flex items-center">
                      <span className="material-symbols-outlined text-[16px]">
                        sports_motorsports
                      </span>
                      <span className="">
                        Buồng Lái Thuyền Trưởng &amp; Lối Thoát Hiểm Khẩn Cấp Số 1
                      </span>
                    </div>
                  </div>

                  {loading && (
                    <div className="p-space-lg text-on-surface-variant font-body-md text-body-md text-center">
                      Đang tải sơ đồ ghế...
                    </div>
                  )}

                  {!loading &&
                    seatMap &&
                    seatMap.sections.map((section) => (
                      <SeatMapSection
                        key={section.id}
                        section={section}
                        selectedIds={selectedSeatIds}
                        onToggle={(seatId) => {
                          const seat = section.rows.flat().find((s) => s.id === seatId);
                          if (seat) toggleSeat(seat);
                        }}
                      />
                    ))}
                </div>

                <div className="gap-space-md grid grid-cols-1 sm:grid-cols-2">
                  <div className="bg-surface-container-lowest p-space-md gap-space-sm flex items-start rounded-xl shadow-sm">
                    <span className="material-symbols-outlined text-secondary text-[24px]">
                      wb_sunny
                    </span>
                    <div>
                      <h4 className="font-title-md text-body-md text-primary font-bold">
                        Hướng nắng buổi sáng
                      </h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Dãy A &amp; B nằm phía đón bình minh sông Sài Gòn, rất lý tưởng để chụp ảnh
                        tòa nhà Bitexco &amp; Ba Son.
                      </p>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest p-space-md gap-space-sm flex items-start rounded-xl shadow-sm">
                    <span className="material-symbols-outlined text-on-tertiary-container text-[24px]">
                      verified_user
                    </span>
                    <div>
                      <h4 className="font-title-md text-body-md text-primary font-bold">
                        An toàn hàng hải 100%
                      </h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Toàn bộ chỗ ngồi đều trang bị áo phao đạt kiểm định của Cục Đăng kiểm Đường
                        thủy Việt Nam.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-space-md bg-surface-container-low text-on-surface-variant font-body-md text-body-md rounded-xl text-center">
                  Đã chọn {selectedSeatIds.length}/{maxSeats} ghế theo số hành khách đã khai báo.
                </div>
              </div>

              <div className="sticky top-24 lg:col-span-4">
                <BookingSummarySidebar
                  buttonText={
                    !isReturn && bookingData.searchParams?.tripType === 'round-trip'
                      ? 'Tiếp tục: Chọn chuyến về'
                      : 'Tiếp tục: Nhập thông tin khách'
                  }
                  onNext={goToPassengerInfo}
                  disabled={!canContinue}
                  trip={selectedTrip}
                  seats={selectedSeats}
                  showSeatChips
                  onRemoveSeat={(seatId) => {
                    const seat = seatMap?.sections
                      .flatMap((s) => s.rows.flat())
                      .find((s) => s.id === seatId);
                    if (seat) toggleSeat(seat);
                  }}
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default BookingSeatSelection;
