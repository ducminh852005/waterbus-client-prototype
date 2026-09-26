import type { PaymentMethod } from '../../types';

type PaymentMethodOptionProps = {
  method: PaymentMethod;
  selected: boolean;
  onSelect: () => void;
};

export default function PaymentMethodOption({ method, selected, onSelect }: PaymentMethodOptionProps) {
  return (
    <label className="group relative flex items-start p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all cursor-pointer has-[:checked]:bg-secondary-fixed/20">
      <input
        checked={selected}
        onChange={onSelect}
        className="mt-1 w-4 h-4 accent-[#006a65] cursor-pointer"
        name="payment_method"
        type="radio"
        value={method.id}
      />
      <div className="ml-space-md flex-1">
        <div className="flex items-center justify-between gap-space-xs flex-wrap">
          <div className="flex items-center gap-space-xs">
            <span className="font-title-md text-title-md text-on-surface group-hover:text-secondary transition-colors">{method.name}</span>
            {method.badge && (
              <span className="bg-on-tertiary-container text-on-primary font-label-sm text-label-sm px-space-xs py-0.5 rounded-full uppercase tracking-wider">
                {method.badge}
              </span>
            )}
          </div>
          {method.tags && method.tags.length > 0 && (
            <div className="flex items-center gap-1.5">
              {method.tags.map((tag) => (
                <span key={tag} className="font-label-sm text-label-sm text-outline-variant bg-surface-container px-2 py-0.5 rounded font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant mt-1">{method.description}</p>
      </div>
    </label>
  );
}
