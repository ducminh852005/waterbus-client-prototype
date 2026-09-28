import type { Trip } from '../../types';

type TripCardProps = {
  trip: Trip;
  originLabel: string;
  destLabel: string;
  onSelect: () => void;
};

export default function TripCard({ trip, originLabel, destLabel, onSelect }: TripCardProps) {
  const isSoldOut = trip.status === 'soldout';
  const isScenic = trip.tag === 'scenic';

  return (
    <article
      className={
        isSoldOut
          ? 'bg-surface-container-low p-space-md md:p-space-lg relative w-full overflow-hidden rounded-xl opacity-65 shadow-none'
          : 'bg-surface-container-lowest p-space-md md:p-space-lg relative w-full overflow-hidden rounded-xl shadow-sm transition-shadow hover:shadow-md'
      }
    >
      {isScenic && !isSoldOut && (
        <div className="bg-secondary-container text-on-secondary-container font-label-sm absolute top-0 right-0 rounded-bl-lg px-3 py-1 text-[10px] font-bold tracking-widest uppercase">
          Trải nghiệm Ngắm Cảnh
        </div>
      )}
      <div className="gap-space-md flex flex-col justify-between md:flex-row md:items-center">
        <div className="space-y-space-sm flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={
                isSoldOut
                  ? 'bg-outline text-on-primary font-label-sm text-label-sm rounded px-2.5 py-0.5 font-semibold tracking-wider uppercase'
                  : 'bg-primary text-on-primary font-label-sm text-label-sm rounded px-2.5 py-0.5 font-semibold tracking-wider uppercase'
              }
            >
              {trip.code}
            </span>
            <span
              className={
                isSoldOut
                  ? 'bg-surface-variant font-label-sm text-label-sm text-on-surface-variant rounded px-2 py-0.5'
                  : 'bg-surface-container font-label-sm text-label-sm text-on-surface-variant rounded px-2 py-0.5'
              }
            >
              {trip.vessel.name}
            </span>
            {isSoldOut ? (
              <span className="bg-surface-dim text-on-surface-variant font-label-sm text-label-sm rounded px-2 py-0.5 font-semibold">
                Đã hết vé (Sold out)
              </span>
            ) : trip.status === 'low' ? (
              <span className="font-label-sm text-label-sm flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 font-semibold text-amber-900">
                <span className="material-symbols-outlined text-[14px]">local_fire_department</span>
                Chỉ còn {trip.availableSeats} ghế trống
              </span>
            ) : (
              <span className="font-label-sm text-label-sm text-secondary flex items-center gap-1 font-medium">
                <span className="bg-secondary inline-block h-2 w-2 rounded-full"></span>
                Còn {trip.availableSeats} chỗ trống
              </span>
            )}
          </div>

          <div className="gap-space-md sm:gap-space-lg flex items-center pt-1">
            <div>
              <p
                className={
                  isSoldOut
                    ? 'font-headline-md text-headline-md text-on-surface-variant leading-none font-semibold'
                    : 'font-headline-md text-headline-md text-primary leading-none font-semibold'
                }
              >
                {trip.departureTime}
              </p>
              <p
                className={
                  isSoldOut
                    ? 'font-body-md text-body-md text-outline mt-1'
                    : 'font-body-md text-body-md text-on-surface-variant mt-1'
                }
              >
                {originLabel}
              </p>
            </div>
            <div className="px-space-xs flex max-w-[140px] flex-1 flex-col items-center">
              <span
                className={
                  isSoldOut
                    ? 'font-label-sm text-label-sm text-outline font-medium'
                    : 'font-label-sm text-label-sm text-on-surface-variant font-medium'
                }
              >
                {trip.durationMinutes} phút
              </span>
              <div className="my-1 flex w-full items-center gap-1">
                <span
                  className={
                    isSoldOut
                      ? 'bg-outline h-1.5 w-1.5 rounded-full'
                      : 'bg-secondary h-1.5 w-1.5 rounded-full'
                  }
                ></span>
                <div className="bg-surface-variant relative h-0.5 flex-1">
                  {!isSoldOut && (
                    <div className="bg-secondary absolute inset-y-0 left-0 w-2/3"></div>
                  )}
                </div>
                <span
                  className={
                    isSoldOut
                      ? 'material-symbols-outlined text-outline text-[14px]'
                      : 'material-symbols-outlined text-secondary text-[14px]'
                  }
                >
                  arrow_forward
                </span>
              </div>
              <span
                className={
                  isSoldOut
                    ? 'font-label-sm text-outline text-[10px] tracking-wider uppercase'
                    : 'font-label-sm text-outline text-[10px] tracking-wider uppercase'
                }
              >
                {isSoldOut ? 'Hết chỗ' : 'Chạy thẳng'}
              </span>
            </div>
            <div>
              <p
                className={
                  isSoldOut
                    ? 'font-headline-md text-headline-md text-on-surface-variant leading-none font-semibold'
                    : 'font-headline-md text-headline-md text-primary leading-none font-semibold'
                }
              >
                {trip.arrivalTime}
              </p>
              <p
                className={
                  isSoldOut
                    ? 'font-body-md text-body-md text-outline mt-1'
                    : 'font-body-md text-body-md text-on-surface-variant mt-1'
                }
              >
                {destLabel}
              </p>
            </div>
          </div>
        </div>

        <div className="pt-space-sm gap-space-xs md:pl-space-md flex items-end justify-between md:flex-col md:justify-center md:pt-0">
          <div className="text-left md:text-right">
            <span className="font-label-sm text-label-sm text-outline block">Giá vé từ</span>
            <div className="flex items-baseline gap-1 md:justify-end">
              <span
                className={
                  isSoldOut
                    ? 'font-headline-sm text-headline-sm text-outline font-bold'
                    : isScenic
                      ? 'font-headline-sm text-headline-sm text-on-tertiary-container font-bold'
                      : 'font-headline-sm text-headline-sm text-primary font-bold'
                }
              >
                {trip.price.toLocaleString('vi-VN')}
              </span>
              <span
                className={
                  isSoldOut
                    ? 'font-label-md text-label-md text-outline font-medium'
                    : 'font-label-md text-label-md text-on-surface font-medium'
                }
              >
                đ/khách
              </span>
            </div>
            <span
              className={
                isSoldOut
                  ? 'font-label-sm text-outline text-[10px]'
                  : 'font-label-sm text-on-surface-variant text-[10px]'
              }
            >
              {isSoldOut ? 'Đã kín chỗ' : 'Đã bao gồm VAT & BH'}
            </span>
          </div>
          {isSoldOut ? (
            <button
              className="px-space-md bg-surface-variant text-outline font-title-md text-body-md inline-flex cursor-not-allowed items-center justify-center gap-1.5 rounded py-2.5 tracking-wide shadow-none"
              disabled
              type="button"
            >
              <span className="">Hết vé</span>
              <span className="material-symbols-outlined text-[18px]">block</span>
            </button>
          ) : (
            <button
              className="px-space-md bg-on-tertiary-container hover:bg-secondary text-on-primary font-title-md text-body-md inline-flex items-center justify-center gap-1.5 rounded py-2.5 tracking-wide shadow-sm transition-colors"
              onClick={onSelect}
              type="button"
            >
              <span className="">Chọn chuyến</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
