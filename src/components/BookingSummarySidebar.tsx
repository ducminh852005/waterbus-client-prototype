import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { getStationByCode } from '../mocks';
import { computeSubtotal, formatVnd } from '../utils/pricing';
import { formatFullDate } from '../utils/date';
import type { Trip, Seat } from '../types';

type BookingSummarySidebarProps = {
  buttonText: string;
  nextRoute?: string;
  onNext?: () => void;
  disabled?: boolean;
  showSeatChips?: boolean;
  onRemoveSeat?: (seatId: string) => void;
  /** Override the trip shown (used before it has been committed to context, e.g. during seat selection). */
  trip?: Trip | null;
  /** Override the seats shown (used before they have been committed to context, e.g. during seat selection). */
  seats?: Seat[];
};

export default function BookingSummarySidebar({
  buttonText,
  nextRoute,
  onNext,
  disabled = false,
  showSeatChips = false,
  onRemoveSeat,
  trip,
  seats,
}: BookingSummarySidebarProps) {
  const navigate = useNavigate();
  const { bookingData } = useBooking();
  const { searchParams } = bookingData;
  const selectedTrip = trip !== undefined ? trip : bookingData.selectedTrip;
  const selectedSeats = seats !== undefined ? seats : bookingData.selectedSeats;

  const handleNext = () => {
    if (disabled) return;
    if (onNext) onNext();
    else if (nextRoute) navigate(nextRoute);
  };

  const originStation = selectedTrip ? getStationByCode(selectedTrip.from) : undefined;
  const destStation = selectedTrip ? getStationByCode(selectedTrip.to) : undefined;
  const subtotal = computeSubtotal(selectedSeats);

  return (
    <div className="sticky top-28 flex flex-col gap-space-md">
      <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md">
        <div className="flex items-center justify-between pb-space-sm mb-space-sm">
          <span className="font-label-md text-label-md uppercase tracking-widest text-on-secondary-container bg-secondary-container px-space-xs py-0.5 rounded">
            Tuyến Đường Sông Boutique
          </span>
          <span className="font-label-sm text-label-sm text-outline">{selectedTrip?.code ?? '—'}</span>
        </div>

        <div className="flex items-start justify-between relative mb-space-md">
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-primary">{selectedTrip?.departureTime ?? '--:--'}</span>
            <span className="font-title-md text-title-md text-primary font-semibold">{originStation?.shortName ?? '—'}</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">{originStation?.area ?? ''}</span>
          </div>

          <div className="flex flex-col items-center justify-center pt-2 px-space-xs">
            <span className="font-label-sm text-label-sm text-secondary font-semibold">
              {selectedTrip ? `${selectedTrip.durationMinutes} phút` : '—'}
            </span>
            <div className="w-16 h-0.5 bg-secondary my-1 relative">
              <span className="material-symbols-outlined absolute -right-2 -top-2 text-secondary text-[16px]">navigation</span>
            </div>
            <span className="font-label-sm text-label-sm text-outline">Tàu Cao Tốc</span>
          </div>
          <div className="flex flex-col items-end text-right">
            <span className="font-headline-sm text-headline-sm text-primary">{selectedTrip?.arrivalTime ?? '--:--'}</span>
            <span className="font-title-md text-title-md text-primary font-semibold">{destStation?.shortName ?? '—'}</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">{destStation?.area ?? ''}</span>
          </div>
        </div>

        <div className="bg-surface-container-low rounded-lg p-space-sm mb-space-md grid grid-cols-2 gap-space-xs text-left">
          <div>
            <span className="block font-label-sm text-label-sm text-on-surface-variant uppercase">Ngày khởi hành</span>
            <span className="font-body-md text-body-md text-primary font-medium">
              {searchParams?.date ? formatFullDate(searchParams.date) : '—'}
            </span>
          </div>
          <div>
            <span className="block font-label-sm text-label-sm text-on-surface-variant uppercase">Vị trí ghế ngồi</span>
            <span className="font-body-md text-body-md text-primary font-bold">
              {selectedSeats.length ? selectedSeats.map((s) => s.id).join(', ') : 'Chưa chọn'}
            </span>
          </div>
        </div>

        {showSeatChips && selectedSeats.length > 0 && (
          <div className="flex flex-col gap-space-xs mb-space-md">
            <span className="font-label-md text-label-md uppercase text-outline tracking-wider font-semibold">
              Ghế đã chọn ({selectedSeats.length} ghế)
            </span>
            <div className="flex items-center gap-space-xs flex-wrap">
              {selectedSeats.map((seat) => (
                <div key={seat.id} className="bg-on-tertiary-container text-on-primary px-space-sm py-space-xs rounded-lg flex items-center gap-space-xs shadow-sm">
                  <span className="font-title-md text-body-md font-bold">Ghế {seat.id}</span>
                  {onRemoveSeat && (
                    <span
                      className="material-symbols-outlined text-[16px] cursor-pointer hover:opacity-80"
                      onClick={() => onRemoveSeat(seat.id)}
                    >
                      cancel
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="relative h-28 w-full rounded-lg overflow-hidden mb-space-md shadow-sm">
          <img
            className="w-full h-full object-cover"
            alt="Ho Chi Minh City river skyline"
            src="/images/hero-1.webp"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-space-xs">
            <span className="text-on-primary font-label-md text-label-md flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">water</span> Sông Sài Gòn • Buổi sáng êm ả
            </span>
          </div>
        </div>

        <div className="space-y-space-xs py-space-sm mb-space-md">
          <div className="flex items-center justify-between font-body-md text-body-md">
            <span className="text-on-surface-variant">Vé (x{selectedSeats.length} hành khách)</span>
            <span className="text-primary font-semibold">{formatVnd(subtotal)}</span>
          </div>
          <div className="flex items-center justify-between font-body-md text-body-md">
            <span className="text-on-surface-variant">Thuế GTGT (VAT 8%)</span>
            <span className="text-secondary font-medium">Đã bao gồm</span>
          </div>
          <div className="flex items-center justify-between font-body-md text-body-md">
            <span className="text-on-surface-variant">Bảo hiểm hành hải quốc nội</span>
            <span className="text-secondary font-medium">Đã bao gồm</span>
          </div>
        </div>

        <div className="flex items-baseline justify-between mb-space-md pt-space-xs">
          <div>
            <span className="font-title-md text-body-lg text-primary block font-semibold">Tổng thanh toán</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">({selectedSeats.length} vé một chiều)</span>
          </div>
          <div className="text-right">
            <span className="font-headline-sm text-headline-sm text-on-tertiary-container font-bold">{formatVnd(subtotal)}</span>
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={disabled}
          className="w-full py-space-sm px-space-md bg-on-tertiary-container hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed text-on-primary font-title-md text-body-lg rounded-lg shadow-md transition-all flex items-center justify-center gap-space-xs uppercase tracking-wider cursor-pointer"
          type="button"
        >
          <span className="">{buttonText}</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>

        <div className="text-center mt-space-sm">
          <button type="button" onClick={() => navigate(-1)} className="inline-flex items-center gap-1 font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            <span className="">Quay lại</span>
          </button>
        </div>
      </div>

      <div className="bg-surface-container-low rounded-xl p-space-md flex items-center gap-space-sm">
        <span className="material-symbols-outlined text-secondary text-[24px]">support_agent</span>
        <div>
          <span className="font-title-md text-body-md text-primary block font-semibold">Cần trợ giúp đổi chuyến?</span>
          <span className="font-body-md text-body-md text-on-surface-variant">Hotline 24/7: <strong className="text-primary">1900 6868</strong></span>
        </div>
      </div>
    </div>
  );
}
