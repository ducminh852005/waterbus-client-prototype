import type { Passenger } from '../../types';

type PassengerFormProps = {
  index: number;
  passenger: Passenger;
  onChange: (patch: Partial<Passenger>) => void;
  onCopyFromContact?: () => void;
};

export default function PassengerForm({ index, passenger, onChange, onCopyFromContact }: PassengerFormProps) {
  return (
    <div className="bg-surface-container-low rounded-xl p-space-md">
      <div className="flex items-center justify-between mb-space-sm pb-space-xs">
        <div className="flex items-center gap-space-xs">
          <span className="px-space-xs py-0.5 rounded bg-primary text-on-primary font-label-md text-label-md uppercase">Ghế {passenger.seatId}</span>
          <span className="font-title-md text-body-lg text-primary font-semibold">Hành khách {index + 1}</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">(Người lớn)</span>
        </div>
        {index === 0 && onCopyFromContact ? (
          <button
            className="text-secondary hover:text-on-secondary-container font-label-sm text-label-sm uppercase tracking-wide flex items-center gap-0.5"
            type="button"
            onClick={onCopyFromContact}
          >
            <span className="material-symbols-outlined text-[14px]">content_copy</span> Dùng thông tin người đặt
          </button>
        ) : (
          <span className="font-label-sm text-label-sm text-outline">Vé đồng hành</span>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md">
        <div className="md:col-span-6">
          <label className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mb-space-xs">
            Họ và tên <span className="text-on-tertiary-container">*</span>
          </label>
          <input
            className="w-full bg-surface-container-lowest text-primary font-body-md text-body-md px-space-md py-space-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary shadow-sm"
            placeholder="NGUYEN VAN AN"
            type="text"
            value={passenger.fullName}
            onChange={(e) => onChange({ fullName: e.target.value })}
          />
        </div>
        <div className="md:col-span-3">
          <label className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mb-space-xs">
            Năm sinh <span className="text-on-tertiary-container">*</span>
          </label>
          <input
            className="w-full bg-surface-container-lowest text-primary font-body-md text-body-md px-space-md py-space-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary shadow-sm"
            placeholder="1990"
            type="number"
            value={passenger.birthYear}
            onChange={(e) => onChange({ birthYear: e.target.value })}
          />
        </div>
        <div className="md:col-span-3">
          <label className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mb-space-xs">
            CCCD / Hộ chiếu (Tùy chọn)
          </label>
          <input
            className="w-full bg-surface-container-lowest text-primary font-body-md text-body-md px-space-md py-space-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary shadow-sm"
            placeholder="Số CCCD"
            type="text"
            value={passenger.idNumber ?? ''}
            onChange={(e) => onChange({ idNumber: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}
