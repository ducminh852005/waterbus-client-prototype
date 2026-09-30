import type { Passenger } from '../../types';

type PassengerFormProps = {
  index: number;
  passenger: Passenger;
  onChange: (patch: Partial<Passenger>) => void;
  onCopyFromContact?: () => void;
};

export default function PassengerForm({
  index,
  passenger,
  onChange,
  onCopyFromContact,
}: PassengerFormProps) {
  return (
    <div className="bg-surface-container-low p-space-md rounded-xl">
      <div className="mb-space-sm pb-space-xs flex items-center justify-between border-b border-slate-200">
        <div className="gap-space-xs flex items-center">
          <span className="px-space-xs bg-primary text-on-primary font-label-md text-label-md rounded py-0.5 uppercase">
            Ghế {passenger.seatId}
          </span>
          <span className="font-title-md text-body-lg text-primary font-semibold">
            Hành khách {index + 1}
          </span>
        </div>
        {onCopyFromContact && (
          <button
            type="button"
            className="text-secondary text-label-sm font-medium hover:underline"
            onClick={onCopyFromContact}
          >
            Sao chép từ người đặt vé
          </button>
        )}
      </div>
      <div className="pt-2">
        <label className="font-label-sm text-label-sm text-on-surface-variant mb-space-xs block tracking-wider uppercase">
          Họ và tên hành khách <span className="text-on-tertiary-container">*</span>
        </label>
        <input
          type="text"
          placeholder="Nhập tên hành khách"
          className="bg-surface-container-lowest text-primary font-body-md text-body-md px-space-md py-space-sm focus:ring-secondary w-full rounded-lg shadow-sm focus:ring-2 focus:outline-none md:w-1/2"
          value={passenger.fullName}
          onChange={(e) => onChange({ fullName: e.target.value })}
        />
      </div>
    </div>
  );
}
