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
          ? 'w-full bg-surface-container-low rounded-xl p-space-md md:p-space-lg shadow-none opacity-65 relative overflow-hidden'
          : 'w-full bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-sm hover:shadow-md transition-shadow relative overflow-hidden'
      }
    >
      {isScenic && !isSoldOut && (
        <div className="absolute top-0 right-0 px-3 py-1 bg-secondary-container text-on-secondary-container font-label-sm text-[10px] tracking-widest uppercase font-bold rounded-bl-lg">
          Trải nghiệm Ngắm Cảnh
        </div>
      )}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
        <div className="flex-1 space-y-space-sm">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={
                isSoldOut
                  ? 'px-2.5 py-0.5 rounded bg-outline text-on-primary font-label-sm text-label-sm font-semibold tracking-wider uppercase'
                  : 'px-2.5 py-0.5 rounded bg-primary text-on-primary font-label-sm text-label-sm font-semibold tracking-wider uppercase'
              }
            >
              {trip.code}
            </span>
            <span
              className={
                isSoldOut
                  ? 'px-2 py-0.5 rounded bg-surface-variant font-label-sm text-label-sm text-on-surface-variant'
                  : 'px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant'
              }
            >
              {trip.vessel.name}
            </span>
            {isSoldOut ? (
              <span className="px-2 py-0.5 rounded bg-surface-dim text-on-surface-variant font-label-sm text-label-sm font-semibold">
                Đã hết vé (Sold out)
              </span>
            ) : trip.status === 'low' ? (
              <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 font-label-sm text-label-sm font-semibold">
                <span className="material-symbols-outlined text-[14px]">local_fire_department</span>
                Chỉ còn {trip.availableSeats} ghế trống
              </span>
            ) : (
              <span className="flex items-center gap-1 font-label-sm text-label-sm text-secondary font-medium">
                <span className="w-2 h-2 rounded-full bg-secondary inline-block"></span>
                Còn {trip.availableSeats} chỗ trống
              </span>
            )}
          </div>

          <div className="flex items-center gap-space-md sm:gap-space-lg pt-1">
            <div>
              <p className={isSoldOut ? 'font-headline-md text-headline-md text-on-surface-variant font-semibold leading-none' : 'font-headline-md text-headline-md text-primary font-semibold leading-none'}>
                {trip.departureTime}
              </p>
              <p className={isSoldOut ? 'font-body-md text-body-md text-outline mt-1' : 'font-body-md text-body-md text-on-surface-variant mt-1'}>{originLabel}</p>
            </div>
            <div className="flex flex-col items-center px-space-xs flex-1 max-w-[140px]">
              <span className={isSoldOut ? 'font-label-sm text-label-sm text-outline font-medium' : 'font-label-sm text-label-sm text-on-surface-variant font-medium'}>
                {trip.durationMinutes} phút
              </span>
              <div className="w-full flex items-center gap-1 my-1">
                <span className={isSoldOut ? 'w-1.5 h-1.5 rounded-full bg-outline' : 'w-1.5 h-1.5 rounded-full bg-secondary'}></span>
                <div className="h-0.5 flex-1 bg-surface-variant relative">
                  {!isSoldOut && <div className="absolute inset-y-0 left-0 w-2/3 bg-secondary"></div>}
                </div>
                <span className={isSoldOut ? 'material-symbols-outlined text-[14px] text-outline' : 'material-symbols-outlined text-[14px] text-secondary'}>arrow_forward</span>
              </div>
              <span className={isSoldOut ? 'font-label-sm text-[10px] text-outline uppercase tracking-wider' : 'font-label-sm text-[10px] text-outline uppercase tracking-wider'}>
                {isSoldOut ? 'Hết chỗ' : 'Chạy thẳng'}
              </span>
            </div>
            <div>
              <p className={isSoldOut ? 'font-headline-md text-headline-md text-on-surface-variant font-semibold leading-none' : 'font-headline-md text-headline-md text-primary font-semibold leading-none'}>
                {trip.arrivalTime}
              </p>
              <p className={isSoldOut ? 'font-body-md text-body-md text-outline mt-1' : 'font-body-md text-body-md text-on-surface-variant mt-1'}>{destLabel}</p>
            </div>
          </div>
        </div>

        <div className="flex md:flex-col items-end justify-between md:justify-center pt-space-sm md:pt-0 gap-space-xs md:pl-space-md">
          <div className="text-left md:text-right">
            <span className="font-label-sm text-label-sm text-outline block">Giá vé từ</span>
            <div className="flex items-baseline md:justify-end gap-1">
              <span className={isSoldOut ? 'font-headline-sm text-headline-sm text-outline font-bold' : isScenic ? 'font-headline-sm text-headline-sm text-on-tertiary-container font-bold' : 'font-headline-sm text-headline-sm text-primary font-bold'}>
                {trip.price.toLocaleString('vi-VN')}
              </span>
              <span className={isSoldOut ? 'font-label-md text-label-md text-outline font-medium' : 'font-label-md text-label-md text-on-surface font-medium'}>đ/khách</span>
            </div>
            <span className={isSoldOut ? 'font-label-sm text-[10px] text-outline' : 'font-label-sm text-[10px] text-on-surface-variant'}>
              {isSoldOut ? 'Đã kín chỗ' : 'Đã bao gồm VAT & BH'}
            </span>
          </div>
          {isSoldOut ? (
            <button
              className="inline-flex items-center justify-center gap-1.5 px-space-md py-2.5 rounded bg-surface-variant text-outline cursor-not-allowed font-title-md text-body-md shadow-none tracking-wide"
              disabled
              type="button"
            >
              <span className="">Hết vé</span>
              <span className="material-symbols-outlined text-[18px]">block</span>
            </button>
          ) : (
            <button
              className="inline-flex items-center justify-center gap-1.5 px-space-md py-2.5 rounded bg-on-tertiary-container hover:bg-secondary text-on-primary font-title-md text-body-md transition-colors shadow-sm tracking-wide"
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
