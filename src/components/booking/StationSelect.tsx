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
    <div className="lg:col-span-5 bg-surface-container-low p-space-sm rounded-xl">
      <label className="flex items-center gap-1 font-label-sm text-label-sm uppercase tracking-wider text-outline mb-1" htmlFor={id}>
        <span className={`material-symbols-outlined text-[16px] ${iconColorClass}`}>{icon}</span>
        <span className="">{label}</span>
      </label>
      <div className="relative">
        <select
          className="w-full bg-transparent font-title-md text-title-md text-primary font-medium focus:outline-none cursor-pointer pr-space-md appearance-none"
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
        <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-outline pointer-events-none">expand_more</span>
      </div>
    </div>
  );
}
