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
        <div className="pb-space-xs mb-space-sm flex items-center justify-between">
          <div className="gap-space-xs flex items-center">
            <span className="bg-on-tertiary-container h-2 w-2 rounded-full"></span>
            <span className="font-title-md text-body-md text-primary font-bold tracking-wider uppercase">
              {section.label}
            </span>
          </div>
          <span className="font-label-sm text-label-sm text-outline tracking-wider uppercase">
            Cửa sổ vòm ngắm sông
          </span>
        </div>
        <div className="space-y-space-xs mx-auto max-w-md">
          {section.rows.map((row, i) => (
            <div key={i} className="gap-space-xs grid grid-cols-5 items-center">
              <SeatButton
                seat={row[0]}
                selected={selectedIds.includes(row[0].id)}
                onToggle={() => onToggle(row[0].id)}
              />
              <SeatButton
                seat={row[1]}
                selected={selectedIds.includes(row[1].id)}
                onToggle={() => onToggle(row[1].id)}
              />
              <div className="text-outline-variant font-label-sm text-label-sm flex items-center justify-center">
                <span className="text-outline rotate-90 text-[10px] tracking-widest uppercase">
                  Lối đi
                </span>
              </div>
              <SeatButton
                seat={row[2]}
                selected={selectedIds.includes(row[2].id)}
                onToggle={() => onToggle(row[2].id)}
              />
              <SeatButton
                seat={row[3]}
                selected={selectedIds.includes(row[3].id)}
                onToggle={() => onToggle(row[3].id)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (section.id === 'standard') {
    return (
      <div className="mb-space-lg">
        <div className="pb-space-xs mb-space-sm flex items-center justify-between">
          <div className="gap-space-xs flex items-center">
            <span className="bg-secondary h-2 w-2 rounded-full"></span>
            <span className="font-title-md text-body-md text-primary font-bold tracking-wider uppercase">
              {section.label}
            </span>
          </div>
          <span className="font-label-sm text-label-sm text-secondary font-medium">
            Nhiệt độ phòng 23°C
          </span>
        </div>
        <div className="space-y-space-xs mx-auto max-w-xl">
          <div className="font-label-sm text-label-sm text-outline py-space-xs grid grid-cols-5 text-center font-bold tracking-widest uppercase">
            <div className="">Dãy Cửa Sổ (A)</div>
            <div className="">Dãy Trong (B)</div>
            <div className="text-secondary">Hành Lang</div>
            <div className="">Dãy Trong (C)</div>
            <div className="">Dãy Cửa Sổ (D)</div>
          </div>
          {section.rows.map((row, i) => (
            <div key={i} className="gap-space-xs grid grid-cols-5 items-center">
              <SeatButton
                seat={row[0]}
                selected={selectedIds.includes(row[0].id)}
                onToggle={() => onToggle(row[0].id)}
              />
              <SeatButton
                seat={row[1]}
                selected={selectedIds.includes(row[1].id)}
                onToggle={() => onToggle(row[1].id)}
              />
              <div className="font-label-sm text-outline text-center text-[11px]">
                {String(i + 1).padStart(2, '0')}
              </div>
              <SeatButton
                seat={row[2]}
                selected={selectedIds.includes(row[2].id)}
                onToggle={() => onToggle(row[2].id)}
              />
              <SeatButton
                seat={row[3]}
                selected={selectedIds.includes(row[3].id)}
                onToggle={() => onToggle(row[3].id)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="pt-space-md mt-space-md">
      <div className="pb-space-xs mb-space-sm flex items-center justify-between">
        <div className="gap-space-xs flex items-center">
          <span className="bg-secondary-fixed-dim h-2 w-2 rounded-full"></span>
          <span className="font-title-md text-body-md text-primary font-bold tracking-wider uppercase">
            {section.label}
          </span>
        </div>
        <span className="font-label-sm text-label-sm text-outline">
          Gió tự nhiên & Check-in Landmark
        </span>
      </div>
      <div className="gap-space-sm mx-auto grid max-w-md grid-cols-4">
        {section.rows[0].map((seat) => (
          <SeatButton
            key={seat.id}
            seat={seat}
            selected={selectedIds.includes(seat.id)}
            onToggle={() => onToggle(seat.id)}
          />
        ))}
      </div>
      <div className="mt-space-md flex flex-col items-center">
        <div className="bg-surface-container flex h-8 w-48 items-center justify-center rounded-b-xl">
          <span className="font-label-sm text-label-sm text-outline tracking-widest uppercase">
            ĐUÔI TÀU (STERN)
          </span>
        </div>
      </div>
    </div>
  );
}
