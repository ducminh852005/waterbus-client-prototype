import type { Seat } from '../../types';

type SeatButtonProps = {
  seat: Seat;
  selected: boolean;
  onToggle: () => void;
};

export default function SeatButton({ seat, selected, onToggle }: SeatButtonProps) {
  const isBooked = seat.status === 'booked';

  if (selected) {
    return (
      <button
        className="h-11 rounded-lg bg-on-tertiary-container text-on-primary flex flex-col items-center justify-center font-label-md text-label-md font-bold shadow-md ring-2 ring-on-tertiary-container ring-offset-2"
        type="button"
        onClick={onToggle}
      >
        <span className="">{seat.id}</span>
        <span className="text-[9px] tracking-tight font-normal">Đang chọn</span>
      </button>
    );
  }

  if (isBooked) {
    if (seat.category === 'standard') {
      return (
        <button className="h-10 rounded-lg bg-surface-variant text-outline flex items-center justify-center cursor-not-allowed font-label-md text-label-md opacity-60" type="button" disabled>
          {seat.id}
        </button>
      );
    }
    return (
      <button className="h-11 rounded-lg bg-surface-variant text-outline flex flex-col items-center justify-center cursor-not-allowed text-label-sm opacity-60" type="button" disabled>
        <span className="">{seat.id}</span>
        <span className="text-[9px] uppercase">Đã bán</span>
      </button>
    );
  }

  if (seat.status === 'priority') {
    return (
      <button
        className="h-10 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center gap-1 font-label-md text-label-md font-bold shadow-sm hover:brightness-95 transition-all"
        type="button"
        onClick={onToggle}
      >
        <span className="material-symbols-outlined text-[15px]">accessible_forward</span> {seat.id}
      </button>
    );
  }

  if (seat.category === 'vip') {
    return (
      <button
        className="seat-btn h-11 rounded-lg bg-surface-container-low hover:bg-secondary-fixed/40 transition-all text-primary flex flex-col items-center justify-center text-label-sm font-semibold shadow-sm"
        type="button"
        onClick={onToggle}
      >
        <span className="">{seat.id}</span>
        <span className="text-[9px] text-secondary">{Math.round(seat.price / 1000)}k</span>
      </button>
    );
  }

  if (seat.category === 'deck') {
    return (
      <button
        className="seat-btn h-11 rounded-lg bg-surface-container-high hover:bg-secondary-container transition-all text-primary flex flex-col items-center justify-center font-label-md text-label-md shadow-sm"
        type="button"
        onClick={onToggle}
      >
        <span className="">{seat.id}</span>
        <span className="text-[9px] text-on-surface-variant font-normal">Boong ngắm</span>
      </button>
    );
  }

  return (
    <button
      className="seat-btn h-10 rounded-lg bg-surface-container-low hover:bg-secondary-fixed/40 transition-all text-primary flex items-center justify-center font-label-md text-label-md shadow-sm"
      type="button"
      onClick={onToggle}
    >
      {seat.id}
    </button>
  );
}
