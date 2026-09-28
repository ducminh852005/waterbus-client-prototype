import type { PaymentMethod } from '../../types';

type PaymentMethodOptionProps = {
  method: PaymentMethod;
  selected: boolean;
  onSelect: () => void;
};

export default function PaymentMethodOption({
  method,
  selected,
  onSelect,
}: PaymentMethodOptionProps) {
  return (
    <label className="group p-space-md bg-surface-container-lowest has-[:checked]:bg-secondary-fixed/20 relative flex cursor-pointer items-start rounded-xl shadow-sm transition-all hover:shadow-md">
      <input
        checked={selected}
        onChange={onSelect}
        className="mt-1 h-4 w-4 cursor-pointer accent-[#006a65]"
        name="payment_method"
        type="radio"
        value={method.id}
      />
      <div className="ml-space-md flex-1">
        <div className="gap-space-xs flex flex-wrap items-center justify-between">
          <div className="gap-space-xs flex items-center">
            <span className="font-title-md text-title-md text-on-surface group-hover:text-secondary transition-colors">
              {method.name}
            </span>
            {method.badge && (
              <span className="bg-on-tertiary-container text-on-primary font-label-sm text-label-sm px-space-xs rounded-full py-0.5 tracking-wider uppercase">
                {method.badge}
              </span>
            )}
          </div>
          {method.tags && method.tags.length > 0 && (
            <div className="flex items-center gap-1.5">
              {method.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-label-sm text-label-sm text-outline-variant bg-surface-container rounded px-2 py-0.5 font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant mt-1">
          {method.description}
        </p>
      </div>
    </label>
  );
}
