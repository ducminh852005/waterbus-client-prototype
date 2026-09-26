import type { ContactInfo } from '../../types';

type ContactInfoFormProps = {
  value: ContactInfo;
  onChange: (patch: Partial<ContactInfo>) => void;
};

export default function ContactInfoForm({ value, onChange }: ContactInfoFormProps) {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
      <div className="flex items-center gap-space-sm mb-space-md">
        <span className="w-8 h-8 rounded-full bg-primary-fixed text-primary flex items-center justify-center font-title-md text-label-md">1</span>
        <div>
          <h2 className="font-title-md text-title-md text-primary uppercase tracking-wide">Thông tin người đặt vé</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Dùng để nhận vé điện tử, mã QR soát vé qua Zalo, SMS và hóa đơn điện tử VAT.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md mb-space-md">
        <div className="md:col-span-2">
          <label className="block font-label-md text-label-md uppercase tracking-wider text-on-surface-variant mb-space-xs">
            Họ và tên người liên hệ <span className="text-on-tertiary-container">*</span>
          </label>
          <div className="relative">
            <input
              className="w-full bg-surface-container-lowest text-primary font-body-lg text-body-lg px-space-md py-space-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-all shadow-sm"
              placeholder="Ví dụ: Nguyễn Văn An"
              type="text"
              value={value.fullName}
              onChange={(e) => onChange({ fullName: e.target.value })}
            />
            <span className="material-symbols-outlined absolute right-space-sm top-1/2 -translate-y-1/2 text-secondary text-[20px]">badge</span>
          </div>
        </div>

        <div>
          <label className="block font-label-md text-label-md uppercase tracking-wider text-on-surface-variant mb-space-xs">
            Số điện thoại di động <span className="text-on-tertiary-container">*</span>
          </label>
          <div className="relative">
            <input
              className="w-full bg-surface-container-lowest text-primary font-body-lg text-body-lg px-space-md py-space-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-all shadow-sm"
              placeholder="09xx xxx xxx"
              type="tel"
              value={value.phone}
              onChange={(e) => onChange({ phone: e.target.value })}
            />
            <span className="material-symbols-outlined absolute right-space-sm top-1/2 -translate-y-1/2 text-secondary text-[20px]">phone_iphone</span>
          </div>
        </div>

        <div>
          <label className="block font-label-md text-label-md uppercase tracking-wider text-on-surface-variant mb-space-xs">
            Địa chỉ Email <span className="text-on-tertiary-container">*</span>
          </label>
          <div className="relative">
            <input
              className="w-full bg-surface-container-lowest text-primary font-body-lg text-body-lg px-space-md py-space-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-all shadow-sm"
              placeholder="an.nguyen@domain.com"
              type="email"
              value={value.email}
              onChange={(e) => onChange({ email: e.target.value })}
            />
            <span className="material-symbols-outlined absolute right-space-sm top-1/2 -translate-y-1/2 text-secondary text-[20px]">mail</span>
          </div>
        </div>
      </div>

      <label className="flex items-start gap-space-sm cursor-pointer select-none bg-surface-container-low p-space-sm rounded-lg">
        <input
          checked={value.notifyByZaloSms}
          onChange={(e) => onChange({ notifyByZaloSms: e.target.checked })}
          className="mt-1 w-4 h-4 rounded text-secondary focus:ring-secondary accent-secondary"
          type="checkbox"
        />
        <span className="font-body-md text-body-md text-primary">
          Gửi thông tin vé & cập nhật lịch trình thời gian thực qua tin nhắn Zalo / SMS tự động đến số điện thoại trên.
        </span>
      </label>
    </div>
  );
}
