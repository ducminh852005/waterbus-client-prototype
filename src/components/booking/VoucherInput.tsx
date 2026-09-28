import type { Voucher } from '../../types';

type VoucherInputProps = {
  code: string;
  onCodeChange: (code: string) => void;
  applied: Voucher | null;
  error?: string | null;
  onApply: () => void;
  onRemove: () => void;
};

export default function VoucherInput({
  code,
  onCodeChange,
  applied,
  error,
  onApply,
  onRemove,
}: VoucherInputProps) {
  return (
    <div className="p-space-lg bg-surface-container-lowest space-y-space-sm rounded-xl shadow-sm">
      <div className="flex items-center justify-between">
        <label
          className="font-title-md text-title-md text-on-surface gap-space-xs flex items-center"
          htmlFor="voucher-input"
        >
          <span className="material-symbols-outlined text-on-tertiary-container text-[20px]">
            loyalty
          </span>
          Mã giảm giá & Khuyến mại
        </label>
        {applied && (
          <span className="font-label-sm text-label-sm text-secondary font-medium uppercase">
            1 mã đang áp dụng
          </span>
        )}
      </div>
      <div className="gap-space-sm flex">
        <div className="relative flex-1">
          <input
            className="bg-surface-container-low px-space-md text-body-md font-body-md text-on-surface focus:bg-surface-container w-full rounded py-2.5 tracking-wider uppercase focus:outline-none"
            id="voucher-input"
            placeholder="NHẬP MÃ GIẢM GIÁ"
            type="text"
            value={code}
            onChange={(e) => onCodeChange(e.target.value)}
          />
          {applied && (
            <span className="material-symbols-outlined text-secondary absolute top-2.5 right-3 text-[20px]">
              check_circle
            </span>
          )}
        </div>
        <button
          className="px-space-md bg-primary hover:bg-secondary text-on-primary font-title-md text-body-md rounded py-2.5 tracking-wider uppercase shadow-sm transition-colors"
          type="button"
          onClick={onApply}
        >
          Áp dụng
        </button>
      </div>

      {applied && (
        <div className="bg-secondary-fixed/40 px-space-md flex items-center justify-between rounded py-2">
          <div className="gap-space-xs flex items-center">
            <span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
            <span className="font-label-md text-label-md text-on-secondary-fixed-variant font-semibold">
              Ưu đãi {applied.code}: {applied.description}
            </span>
          </div>
          <button
            aria-label="Gỡ bỏ mã"
            className="text-outline hover:text-error flex items-center transition-colors"
            type="button"
            onClick={onRemove}
          >
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </div>
      )}

      {error && <p className="font-label-sm text-label-sm text-error">{error}</p>}
    </div>
  );
}
