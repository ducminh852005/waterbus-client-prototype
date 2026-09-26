import { formatVnd } from '../../utils/pricing';

type DateStripItem = {
  date: string;
  weekday: string;
  shortDate: string;
  minPrice: number;
};

type DateStripProps = {
  dates: DateStripItem[];
  selectedDate: string;
  onSelect: (date: string) => void;
};

export default function DateStrip({ dates, selectedDate, onSelect }: DateStripProps) {
  return (
    <div className="w-full bg-surface py-space-sm">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="flex items-center justify-between gap-space-xs overflow-x-auto pt-3 pb-1 no-scrollbar">
          {dates.map((item) => {
            const isSelected = item.date === selectedDate;
            return (
              <button
                key={item.date}
                type="button"
                onClick={() => onSelect(item.date)}
                className={
                  isSelected
                    ? 'flex-1 min-w-[115px] p-2.5 rounded-lg bg-primary text-on-primary text-center cursor-pointer shadow-md relative'
                    : 'flex-1 min-w-[105px] p-2.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-center cursor-pointer transition-colors shadow-sm'
                }
              >
                {isSelected && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.2 bg-on-tertiary-container text-on-tertiary rounded-full font-label-sm text-[9px] tracking-wider uppercase">
                    Đang chọn
                  </div>
                )}
                <p
                  className={
                    isSelected
                      ? 'font-label-sm text-label-sm text-secondary-fixed uppercase font-medium'
                      : 'font-label-sm text-label-sm text-on-surface-variant uppercase'
                  }
                >
                  {item.weekday}
                </p>
                <p
                  className={
                    isSelected
                      ? 'font-headline-sm text-headline-sm text-on-primary font-bold'
                      : 'font-headline-sm text-body-lg text-primary font-semibold'
                  }
                >
                  {item.shortDate}
                </p>
                <p
                  className={
                    isSelected
                      ? 'font-label-sm text-label-sm text-secondary-container font-semibold mt-0.5'
                      : 'font-label-sm text-label-sm text-secondary font-medium mt-0.5'
                  }
                >
                  từ {formatVnd(item.minPrice)}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
