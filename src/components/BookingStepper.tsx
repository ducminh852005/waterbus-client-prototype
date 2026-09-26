export default function BookingStepper({ currentStep = 1 }: { currentStep?: number }) {
  const steps = [
    { id: 1, label: 'Bước 1', title: 'Tìm chuyến' },
    { id: 2, label: 'Bước 2', title: 'Chọn chuyến' },
    { id: 3, label: 'Bước 3', title: 'Chọn ghế' },
    { id: 4, label: 'Bước 4', title: 'Thông tin khách' },
    { id: 5, label: 'Bước 5', title: 'Thanh toán' },
    { id: 6, label: 'Bước 6', title: 'Hoàn tất' },
  ];

  return (
    <nav aria-label="Quy trình đặt vé" className="w-full mb-space-xl bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
      <ol className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-space-sm">
        {steps.map((step) => {
          const isActive = step.id === currentStep;
          const isPast = step.id < currentStep;

          if (isActive) {
            return (
              <li key={step.id} className="relative flex items-center gap-space-xs bg-on-tertiary-container/10 p-space-xs rounded">
                <span className="w-7 h-7 rounded-full bg-on-tertiary-container text-on-primary font-label-md text-label-md flex items-center justify-center font-bold">
                  {step.id}
                </span>
                <div className="min-w-0">
                  <span className="block font-label-sm text-label-sm uppercase text-on-tertiary-container font-semibold tracking-wider">{step.label}</span>
                  <span className="block font-title-md text-body-md text-primary font-bold truncate">{step.title}</span>
                </div>
              </li>
            );
          } else if (isPast) {
            return (
              <li key={step.id} className="flex items-center gap-space-xs p-space-xs text-secondary group">
                <div className="w-7 h-7 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-title-md text-label-md">
                  <span className="material-symbols-outlined text-[16px]">check</span>
                </div>
                <div className="min-w-0">
                  <span className="block font-label-sm text-label-sm uppercase text-secondary font-semibold tracking-wider">{step.label}</span>
                  <span className="block font-body-md text-body-md text-on-surface truncate">{step.title}</span>
                </div>
              </li>
            );
          } else {
            return (
              <li key={step.id} className="flex items-center gap-space-xs p-space-xs opacity-60">
                <span className="w-7 h-7 rounded-full bg-surface-container-highest text-on-surface-variant font-label-md text-label-md flex items-center justify-center font-medium">
                  {step.id}
                </span>
                <div className="min-w-0">
                  <span className="block font-label-sm text-label-sm uppercase text-outline">{step.label}</span>
                  <span className="block font-body-md text-body-md text-on-surface truncate">{step.title}</span>
                </div>
              </li>
            );
          }
        })}
      </ol>
    </nav>
  );
}
