import type { Station, StationCode } from '../../types';

type StationSelectProps = {
  id: string;
  label: string;
  icon: string;
  iconColorClass?: string;
  value: StationCode;
  onChange: (value: StationCode) => void;
  options: Station[];
};

export default function StationSelect({
  id,
  label,
  icon,
  iconColorClass = 'text-secondary',
  value,
  onChange,
  options,
}: StationSelectProps) {
  return (
    <div className="bg-surface-container-low p-space-sm rounded-xl lg:col-span-5">
      <label
        className="font-label-sm text-label-sm text-outline mb-1 flex items-center gap-1 tracking-wider uppercase"
        htmlFor={id}
      >
        <span className={`material-symbols-outlined text-[16px] ${iconColorClass}`}>{icon}</span>
        <span className="">{label}</span>
      </label>
      <div className="relative">
        <select
          className="font-title-md text-title-md text-primary pr-space-md w-full cursor-pointer appearance-none bg-transparent font-medium focus:outline-none"
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value as StationCode)}
        >
          {options.map((station) => (
            <option key={station.code} value={station.code}>
              {station.name} — {station.area}
            </option>
          ))}
        </select>
        <span className="material-symbols-outlined text-outline pointer-events-none absolute top-1/2 right-0 -translate-y-1/2">
          expand_more
        </span>
      </div>
    </div>
  );
}
