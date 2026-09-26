import type { Voucher } from '../../types';

type VoucherInputProps = {
  code: string;
  onCodeChange: (code: string) => void;
  applied: Voucher | null;
  error?: string | null;
  onApply: () => void;
  onRemove: () => void;
};

export default function VoucherInput({ code, onCodeChange, applied, error, onApply, onRemove }: VoucherInputProps) {
  return (
    <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm space-y-space-sm">
      <div className="flex items-center justify-between">
        <label className="font-title-md text-title-md text-on-surface flex items-center gap-space-xs" htmlFor="voucher-input">
          <span className="material-symbols-outlined text-on-tertiary-container text-[20px]">loyalty</span>
          Mã giảm giá & Khuyến mại
        </label>
        {applied && <span className="font-label-sm text-label-sm text-secondary uppercase font-medium">1 mã đang áp dụng</span>}
      </div>
      <div className="flex gap-space-sm">
        <div className="relative flex-1">
          <input
            className="w-full bg-surface-container-low px-space-md py-2.5 rounded text-body-md font-body-md text-on-surface uppercase tracking-wider focus:outline-none focus:bg-surface-container"
            id="voucher-input"
            placeholder="NHẬP MÃ GIẢM GIÁ"
            type="text"
            value={code}
            onChange={(e) => onCodeChange(e.target.value)}
          />
          {applied && (
            <span className="absolute right-3 top-2.5 material-symbols-outlined text-secondary text-[20px]">check_circle</span>
          )}
        </div>
        <button
          className="px-space-md py-2.5 bg-primary hover:bg-secondary text-on-primary font-title-md text-body-md rounded transition-colors shadow-sm uppercase tracking-wider"
          type="button"
          onClick={onApply}
        >
          Áp dụng
        </button>
      </div>

      {applied && (
        <div className="flex items-center justify-between bg-secondary-fixed/40 px-space-md py-2 rounded">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
            <span className="font-label-md text-label-md text-on-secondary-fixed-variant font-semibold">
              Ưu đãi {applied.code}: {applied.description}
            </span>
          </div>
          <button aria-label="Gỡ bỏ mã" className="text-outline hover:text-error transition-colors flex items-center" type="button" onClick={onRemove}>
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </div>
      )}

      {error && <p className="font-label-sm text-label-sm text-error">{error}</p>}
    </div>
  );
}
