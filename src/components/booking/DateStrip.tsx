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
    <div className="bg-surface py-space-sm w-full">
      <div className="px-gutter mx-auto max-w-7xl">
        <div className="gap-space-xs no-scrollbar flex items-center justify-between overflow-x-auto pt-3 pb-1">
          {dates.map((item) => {
            const isSelected = item.date === selectedDate;
            return (
              <button
                key={item.date}
                type="button"
                onClick={() => onSelect(item.date)}
                className={
                  isSelected
                    ? 'bg-primary text-on-primary relative min-w-[115px] flex-1 cursor-pointer rounded-lg p-2.5 text-center shadow-md'
                    : 'bg-surface-container-lowest hover:bg-surface-container min-w-[105px] flex-1 cursor-pointer rounded-lg p-2.5 text-center shadow-sm transition-colors'
                }
              >
                {isSelected && (
                  <div className="py-0.2 bg-on-tertiary-container text-on-tertiary font-label-sm absolute -top-2 left-1/2 -translate-x-1/2 rounded-full px-2 text-[9px] tracking-wider uppercase">
                    Đang chọn
                  </div>
                )}
                <p
                  className={
                    isSelected
                      ? 'font-label-sm text-label-sm text-secondary-fixed font-medium uppercase'
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
                      ? 'font-label-sm text-label-sm text-secondary-container mt-0.5 font-semibold'
                      : 'font-label-sm text-label-sm text-secondary mt-0.5 font-medium'
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
