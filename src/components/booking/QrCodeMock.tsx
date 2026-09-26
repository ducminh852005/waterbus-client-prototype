type QrCodeMockProps = {
  payload: string;
};

export default function QrCodeMock({ payload }: QrCodeMockProps) {
  return (
    <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-md mb-space-sm flex flex-col items-center justify-center">
      <svg className="w-48 h-48 text-primary" fill="currentColor" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect fill="none" height="24" rx="2" stroke="currentColor" strokeWidth="4" width="24" x="10" y="10"></rect>
        <rect fill="currentColor" height="10" width="10" x="17" y="17"></rect>
        <rect fill="none" height="24" rx="2" stroke="currentColor" strokeWidth="4" width="24" x="66" y="10"></rect>
        <rect fill="currentColor" height="10" width="10" x="73" y="17"></rect>
        <rect fill="none" height="24" rx="2" stroke="currentColor" strokeWidth="4" width="24" x="10" y="66"></rect>
        <rect fill="currentColor" height="10" width="10" x="17" y="73"></rect>
        <rect height="5" width="5" x="38" y="12"></rect>
        <rect height="5" width="5" x="47" y="12"></rect>
        <rect height="5" width="5" x="56" y="12"></rect>
        <rect height="5" width="5" x="38" y="21"></rect>
        <rect height="5" width="8" x="47" y="27"></rect>
        <rect height="12" width="5" x="38" y="32"></rect>
        <rect height="5" width="8" x="12" y="38"></rect>
        <rect height="6" width="6" x="24" y="42"></rect>
        <rect height="8" width="5" x="12" y="48"></rect>
        <rect height="5" width="8" x="22" y="52"></rect>
        <circle cx="50" cy="50" fill="#E26D38" r="4"></circle>
        <rect height="4" width="12" x="44" y="40"></rect>
        <rect height="8" width="6" x="40" y="60"></rect>
        <rect height="6" width="8" x="52" y="62"></rect>
        <rect height="5" width="10" x="66" y="38"></rect>
        <rect height="6" width="8" x="80" y="42"></rect>
        <rect height="6" width="6" x="70" y="48"></rect>
        <rect height="8" width="6" x="82" y="52"></rect>
        <rect height="5" width="8" x="40" y="72"></rect>
        <rect height="8" width="6" x="52" y="76"></rect>
        <rect height="5" width="10" x="66" y="68"></rect>
        <rect height="6" width="8" x="80" y="72"></rect>
        <rect height="8" width="6" x="68" y="80"></rect>
        <rect height="6" width="10" x="78" y="82"></rect>
      </svg>
      <span className="font-label-sm text-outline tracking-wider mt-2 font-mono">{payload}</span>
    </div>
  );
}
