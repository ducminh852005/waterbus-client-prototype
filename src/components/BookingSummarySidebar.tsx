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
    <div className="gap-space-md sticky top-28 flex flex-col">
      <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-md">
        <div className="pb-space-sm mb-space-sm flex items-center justify-between">
          <span className="font-label-md text-label-md text-on-secondary-container bg-secondary-container px-space-xs rounded py-0.5 tracking-widest uppercase">
            Tuyến Đường Sông Boutique
          </span>
          <span className="font-label-sm text-label-sm text-outline">
            {selectedTrip?.code ?? '—'}
          </span>
        </div>

        <div className="mb-space-md relative flex items-start justify-between">
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-primary">
              {selectedTrip?.departureTime ?? '--:--'}
            </span>
            <span className="font-title-md text-title-md text-primary font-semibold">
              {originStation?.shortName ?? '—'}
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              {originStation?.area ?? ''}
            </span>
          </div>

          <div className="px-space-xs flex flex-col items-center justify-center pt-2">
            <span className="font-label-sm text-label-sm text-secondary font-semibold">
              {selectedTrip ? `${selectedTrip.durationMinutes} phút` : '—'}
            </span>
            <div className="bg-secondary relative my-1 h-0.5 w-16">
              <span className="material-symbols-outlined text-secondary absolute -top-2 -right-2 text-[16px]">
                navigation
              </span>
            </div>
            <span className="font-label-sm text-label-sm text-outline">Tàu Cao Tốc</span>
          </div>
          <div className="flex flex-col items-end text-right">
            <span className="font-headline-sm text-headline-sm text-primary">
              {selectedTrip?.arrivalTime ?? '--:--'}
            </span>
            <span className="font-title-md text-title-md text-primary font-semibold">
              {destStation?.shortName ?? '—'}
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              {destStation?.area ?? ''}
            </span>
          </div>
        </div>

        <div className="bg-surface-container-low p-space-sm mb-space-md gap-space-xs grid grid-cols-2 rounded-lg text-left">
          <div>
            <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase">
              Ngày khởi hành
            </span>
            <span className="font-body-md text-body-md text-primary font-medium">
              {searchParams?.date ? formatFullDate(searchParams.date) : '—'}
            </span>
          </div>
          <div>
            <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase">
              Vị trí ghế ngồi
            </span>
            <span className="font-body-md text-body-md text-primary font-bold">
              {selectedSeats.length ? selectedSeats.map((s) => s.id).join(', ') : 'Chưa chọn'}
            </span>
          </div>
        </div>

        {showSeatChips && selectedSeats.length > 0 && (
          <div className="gap-space-xs mb-space-md flex flex-col">
            <span className="font-label-md text-label-md text-outline font-semibold tracking-wider uppercase">
              Ghế đã chọn ({selectedSeats.length} ghế)
            </span>
            <div className="gap-space-xs flex flex-wrap items-center">
              {selectedSeats.map((seat) => (
                <div
                  key={seat.id}
                  className="bg-on-tertiary-container text-on-primary px-space-sm py-space-xs gap-space-xs flex items-center rounded-lg shadow-sm"
                >
                  <span className="font-title-md text-body-md font-bold">Ghế {seat.id}</span>
                  {onRemoveSeat && (
                    <span
                      className="material-symbols-outlined cursor-pointer text-[16px] hover:opacity-80"
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

        <div className="mb-space-md relative h-28 w-full overflow-hidden rounded-lg shadow-sm">
          <img
            className="h-full w-full object-cover"
            alt="Ho Chi Minh City river skyline"
            src="/images/hero-1.webp"
          />
          <div className="from-primary/80 p-space-xs absolute inset-0 flex items-end bg-gradient-to-t via-transparent to-transparent">
            <span className="text-on-primary font-label-md text-label-md flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">water</span> Sông Sài Gòn •
              Buổi sáng êm ả
            </span>
          </div>
        </div>

        <div className="space-y-space-xs py-space-sm mb-space-md">
          <div className="font-body-md text-body-md flex items-center justify-between">
            <span className="text-on-surface-variant">Vé (x{selectedSeats.length} hành khách)</span>
            <span className="text-primary font-semibold">{formatVnd(subtotal)}</span>
          </div>
          <div className="font-body-md text-body-md flex items-center justify-between">
            <span className="text-on-surface-variant">Thuế GTGT (VAT 8%)</span>
            <span className="text-secondary font-medium">Đã bao gồm</span>
          </div>
          <div className="font-body-md text-body-md flex items-center justify-between">
            <span className="text-on-surface-variant">Bảo hiểm hành hải quốc nội</span>
            <span className="text-secondary font-medium">Đã bao gồm</span>
          </div>
        </div>

        <div className="mb-space-md pt-space-xs flex items-baseline justify-between">
          <div>
            <span className="font-title-md text-body-lg text-primary block font-semibold">
              Tổng thanh toán
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              ({selectedSeats.length} vé một chiều)
            </span>
          </div>
          <div className="text-right">
            <span className="font-headline-sm text-headline-sm text-on-tertiary-container font-bold">
              {formatVnd(subtotal)}
            </span>
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={disabled}
          className="py-space-sm px-space-md bg-on-tertiary-container hover:bg-secondary text-on-primary font-title-md text-body-lg gap-space-xs flex w-full cursor-pointer items-center justify-center rounded-lg tracking-wider uppercase shadow-md transition-all disabled:cursor-not-allowed disabled:opacity-50"
          type="button"
        >
          <span className="">{buttonText}</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>

        <div className="mt-space-sm text-center">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary inline-flex items-center gap-1 transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            <span className="">Quay lại</span>
          </button>
        </div>
      </div>

      <div className="bg-surface-container-low p-space-md gap-space-sm flex items-center rounded-xl">
        <span className="material-symbols-outlined text-secondary text-[24px]">support_agent</span>
        <div>
          <span className="font-title-md text-body-md text-primary block font-semibold">
            Cần trợ giúp đổi chuyến?
          </span>
          <span className="font-body-md text-body-md text-on-surface-variant">
            Hotline 24/7: <strong className="text-primary">1900 6868</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
