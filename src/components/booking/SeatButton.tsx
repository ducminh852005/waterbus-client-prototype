import type { Seat } from '../../types';

type SeatButtonProps = {
  seat: Seat;
  selected: boolean;
  onToggle: () => void;
};

export default function SeatButton({ seat, selected, onToggle }: SeatButtonProps) {
  const isBooked = seat.status === 'BOOKED';

  if (selected) {
    return (
      <button
        className="bg-on-tertiary-container text-on-primary font-label-md text-label-md ring-on-tertiary-container flex h-11 flex-col items-center justify-center rounded-lg font-bold shadow-md ring-2 ring-offset-2 transition-transform duration-200 hover:scale-105"
        type="button"
        onClick={onToggle}
      >
        <span className="">{seat.id}</span>
        <span className="text-[9px] font-normal tracking-tight">Đang chọn</span>
      </button>
    );
  }

  if (isBooked) {
    if (seat.category === 'standard') {
      return (
        <button
          className="bg-surface-variant text-outline font-label-md text-label-md flex h-10 cursor-not-allowed items-center justify-center rounded-lg opacity-60"
          type="button"
          disabled
        >
          {seat.id}
        </button>
      );
    }
    return (
      <button
        className="bg-surface-variant text-outline text-label-sm flex h-11 cursor-not-allowed flex-col items-center justify-center rounded-lg opacity-60"
        type="button"
        disabled
      >
        <span className="">{seat.id}</span>
        <span className="text-[9px] uppercase">Đã bán</span>
      </button>
    );
  }

  if (seat.category === 'vip') {
    return (
      <button
        className="seat-btn bg-surface-container-low hover:bg-secondary-fixed/40 text-primary text-label-sm flex h-11 flex-col items-center justify-center rounded-lg font-semibold shadow-sm transition-all duration-200 hover:scale-105"
        type="button"
        onClick={onToggle}
      >
        <span className="">{seat.id}</span>
        <span className="text-secondary text-[9px]">{Math.round(seat.price / 1000)}k</span>
      </button>
    );
  }

  if (seat.category === 'deck') {
    return (
      <button
        className="seat-btn bg-surface-container-high hover:bg-secondary-container text-primary font-label-md text-label-md flex h-11 flex-col items-center justify-center rounded-lg shadow-sm transition-all duration-200 hover:scale-105"
        type="button"
        onClick={onToggle}
      >
        <span className="">{seat.id}</span>
        <span className="text-on-surface-variant text-[9px] font-normal">Boong ngắm</span>
      </button>
    );
  }

  return (
    <button
      className="seat-btn bg-surface-container-low hover:bg-secondary-fixed/40 text-primary font-label-md text-label-md flex h-10 items-center justify-center rounded-lg shadow-sm transition-all duration-200 hover:scale-105"
      type="button"
      onClick={onToggle}
    >
      {seat.id}
    </button>
  );
}
