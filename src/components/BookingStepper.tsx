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
    <nav
      aria-label="Quy trình đặt vé"
      className="mb-space-xl bg-surface-container-lowest p-space-md w-full rounded-xl shadow-sm"
    >
      <ol className="gap-space-sm grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {steps.map((step) => {
          const isActive = step.id === currentStep;
          const isPast = step.id < currentStep;

          if (isActive) {
            return (
              <li
                key={step.id}
                className="gap-space-xs bg-on-tertiary-container/10 p-space-xs relative flex items-center rounded"
              >
                <span className="bg-on-tertiary-container text-on-primary font-label-md text-label-md flex h-7 w-7 items-center justify-center rounded-full font-bold">
                  {step.id}
                </span>
                <div className="min-w-0">
                  <span className="font-label-sm text-label-sm text-on-tertiary-container block font-semibold tracking-wider uppercase">
                    {step.label}
                  </span>
                  <span className="font-title-md text-body-md text-primary block truncate font-bold">
                    {step.title}
                  </span>
                </div>
              </li>
            );
          } else if (isPast) {
            return (
              <li
                key={step.id}
                className="gap-space-xs p-space-xs text-secondary group flex items-center"
              >
                <div className="bg-secondary-container text-on-secondary-container font-title-md text-label-md flex h-7 w-7 items-center justify-center rounded-full">
                  <span className="material-symbols-outlined text-[16px]">check</span>
                </div>
                <div className="min-w-0">
                  <span className="font-label-sm text-label-sm text-secondary block font-semibold tracking-wider uppercase">
                    {step.label}
                  </span>
                  <span className="font-body-md text-body-md text-on-surface block truncate">
                    {step.title}
                  </span>
                </div>
              </li>
            );
          } else {
            return (
              <li key={step.id} className="gap-space-xs p-space-xs flex items-center opacity-60">
                <span className="bg-surface-container-highest text-on-surface-variant font-label-md text-label-md flex h-7 w-7 items-center justify-center rounded-full font-medium">
                  {step.id}
                </span>
                <div className="min-w-0">
                  <span className="font-label-sm text-label-sm text-outline block uppercase">
                    {step.label}
                  </span>
                  <span className="font-body-md text-body-md text-on-surface block truncate">
                    {step.title}
                  </span>
                </div>
              </li>
            );
          }
        })}
      </ol>
    </nav>
  );
}
