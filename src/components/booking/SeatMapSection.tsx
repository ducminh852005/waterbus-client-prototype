import type { SeatMapSection as SeatMapSectionType } from '../../types';
import SeatButton from './SeatButton';

type SeatMapSectionProps = {
  section: SeatMapSectionType;
  selectedIds: string[];
  onToggle: (seatId: string) => void;
};

export default function SeatMapSection({ section, selectedIds, onToggle }: SeatMapSectionProps) {
  if (section.id === 'vip') {
    return (
      <div className="mb-space-lg">
        <div className="flex items-center justify-between pb-space-xs mb-space-sm">
          <div className="flex items-center gap-space-xs">
            <span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
            <span className="font-title-md text-body-md uppercase tracking-wider text-primary font-bold">{section.label}</span>
          </div>
          <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Cửa sổ vòm ngắm sông</span>
        </div>
        <div className="space-y-space-xs max-w-md mx-auto">
          {section.rows.map((row, i) => (
            <div key={i} className="grid grid-cols-5 gap-space-xs items-center">
              <SeatButton seat={row[0]} selected={selectedIds.includes(row[0].id)} onToggle={() => onToggle(row[0].id)} />
              <SeatButton seat={row[1]} selected={selectedIds.includes(row[1].id)} onToggle={() => onToggle(row[1].id)} />
              <div className="flex items-center justify-center text-outline-variant font-label-sm text-label-sm">
                <span className="text-[10px] tracking-widest uppercase rotate-90 text-outline">Lối đi</span>
              </div>
              <SeatButton seat={row[2]} selected={selectedIds.includes(row[2].id)} onToggle={() => onToggle(row[2].id)} />
              <SeatButton seat={row[3]} selected={selectedIds.includes(row[3].id)} onToggle={() => onToggle(row[3].id)} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (section.id === 'standard') {
    return (
      <div className="mb-space-lg">
        <div className="flex items-center justify-between pb-space-xs mb-space-sm">
          <div className="flex items-center gap-space-xs">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span className="font-title-md text-body-md uppercase tracking-wider text-primary font-bold">{section.label}</span>
          </div>
          <span className="font-label-sm text-label-sm text-secondary font-medium">Nhiệt độ phòng 23°C</span>
        </div>
        <div className="space-y-space-xs max-w-xl mx-auto">
          <div className="grid grid-cols-5 text-center font-label-sm text-label-sm text-outline py-space-xs uppercase tracking-widest font-bold">
            <div className="">Dãy Cửa Sổ (A)</div>
            <div className="">Dãy Trong (B)</div>
            <div className="text-secondary">Hành Lang</div>
            <div className="">Dãy Trong (C)</div>
            <div className="">Dãy Cửa Sổ (D)</div>
          </div>
          {section.rows.map((row, i) => (
            <div key={i} className="grid grid-cols-5 gap-space-xs items-center">
              <SeatButton seat={row[0]} selected={selectedIds.includes(row[0].id)} onToggle={() => onToggle(row[0].id)} />
              <SeatButton seat={row[1]} selected={selectedIds.includes(row[1].id)} onToggle={() => onToggle(row[1].id)} />
              <div className="text-center font-label-sm text-[11px] text-outline">{String(i + 1).padStart(2, '0')}</div>
              <SeatButton seat={row[2]} selected={selectedIds.includes(row[2].id)} onToggle={() => onToggle(row[2].id)} />
              <SeatButton seat={row[3]} selected={selectedIds.includes(row[3].id)} onToggle={() => onToggle(row[3].id)} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="pt-space-md mt-space-md">
      <div className="flex items-center justify-between pb-space-xs mb-space-sm">
        <div className="flex items-center gap-space-xs">
          <span className="w-2 h-2 rounded-full bg-secondary-fixed-dim"></span>
          <span className="font-title-md text-body-md uppercase tracking-wider text-primary font-bold">{section.label}</span>
        </div>
        <span className="font-label-sm text-label-sm text-outline">Gió tự nhiên & Check-in Landmark</span>
      </div>
      <div className="grid grid-cols-4 gap-space-sm max-w-md mx-auto">
        {section.rows[0].map((seat) => (
          <SeatButton key={seat.id} seat={seat} selected={selectedIds.includes(seat.id)} onToggle={() => onToggle(seat.id)} />
        ))}
      </div>
      <div className="mt-space-md flex flex-col items-center">
        <div className="w-48 h-8 bg-surface-container rounded-b-xl flex items-center justify-center">
          <span className="font-label-sm text-label-sm text-outline tracking-widest uppercase">ĐUÔI TÀU (STERN)</span>
        </div>
      </div>
    </div>
  );
}
