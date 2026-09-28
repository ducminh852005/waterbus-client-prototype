import type { ContactInfo } from '../../types';

type ContactInfoFormProps = {
  value: ContactInfo;
  onChange: (patch: Partial<ContactInfo>) => void;
};

export default function ContactInfoForm({ value, onChange }: ContactInfoFormProps) {
  return (
    <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
      <div className="gap-space-sm mb-space-md flex items-center">
        <span className="bg-primary-fixed text-primary font-title-md text-label-md flex h-8 w-8 items-center justify-center rounded-full">
          1
        </span>
        <div>
          <h2 className="font-title-md text-title-md text-primary tracking-wide uppercase">
            Thông tin người đặt vé
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Dùng để nhận vé điện tử, mã QR soát vé qua Zalo, SMS và hóa đơn điện tử VAT.
          </p>
        </div>
      </div>
      <div className="gap-space-md mb-space-md grid grid-cols-1 md:grid-cols-2">
        <div className="md:col-span-2">
          <label className="font-label-md text-label-md text-on-surface-variant mb-space-xs block tracking-wider uppercase">
            Họ và tên người liên hệ <span className="text-on-tertiary-container">*</span>
          </label>
          <div className="relative">
            <input
              className="bg-surface-container-lowest text-primary font-body-lg text-body-lg px-space-md py-space-sm focus:ring-secondary w-full rounded-lg shadow-sm transition-all focus:ring-2 focus:outline-none"
              placeholder="Ví dụ: Nguyễn Văn An"
              type="text"
              value={value.fullName}
              onChange={(e) => onChange({ fullName: e.target.value })}
            />
            <span className="material-symbols-outlined right-space-sm text-secondary absolute top-1/2 -translate-y-1/2 text-[20px]">
              badge
            </span>
          </div>
        </div>

        <div>
          <label className="font-label-md text-label-md text-on-surface-variant mb-space-xs block tracking-wider uppercase">
            Số điện thoại di động <span className="text-on-tertiary-container">*</span>
          </label>
          <div className="relative">
            <input
              className="bg-surface-container-lowest text-primary font-body-lg text-body-lg px-space-md py-space-sm focus:ring-secondary w-full rounded-lg shadow-sm transition-all focus:ring-2 focus:outline-none"
              placeholder="09xx xxx xxx"
              type="tel"
              value={value.phone}
              onChange={(e) => onChange({ phone: e.target.value })}
            />
            <span className="material-symbols-outlined right-space-sm text-secondary absolute top-1/2 -translate-y-1/2 text-[20px]">
              phone_iphone
            </span>
          </div>
        </div>

        <div>
          <label className="font-label-md text-label-md text-on-surface-variant mb-space-xs block tracking-wider uppercase">
            Địa chỉ Email <span className="text-on-tertiary-container">*</span>
          </label>
          <div className="relative">
            <input
              className="bg-surface-container-lowest text-primary font-body-lg text-body-lg px-space-md py-space-sm focus:ring-secondary w-full rounded-lg shadow-sm transition-all focus:ring-2 focus:outline-none"
              placeholder="an.nguyen@domain.com"
              type="email"
              value={value.email}
              onChange={(e) => onChange({ email: e.target.value })}
            />
            <span className="material-symbols-outlined right-space-sm text-secondary absolute top-1/2 -translate-y-1/2 text-[20px]">
              mail
            </span>
          </div>
        </div>
      </div>

      <label className="gap-space-sm bg-surface-container-low p-space-sm flex cursor-pointer items-start rounded-lg select-none">
        <input
          checked={value.notifyByZaloSms}
          onChange={(e) => onChange({ notifyByZaloSms: e.target.checked })}
          className="text-secondary focus:ring-secondary accent-secondary mt-1 h-4 w-4 rounded"
          type="checkbox"
        />
        <span className="font-body-md text-body-md text-primary">
          Gửi thông tin vé & cập nhật lịch trình thời gian thực qua tin nhắn Zalo / SMS tự động đến
          số điện thoại trên.
        </span>
      </label>
    </div>
  );
}
