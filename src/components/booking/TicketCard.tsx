import type { BookingConfirmation } from '../../types';
import { getStationByCode } from '../../mocks';
import { getPaymentMethodById } from '../../mocks';
import { formatVnd } from '../../utils/pricing';
import QrCodeMock from './QrCodeMock';

type TicketCardProps = {
  confirmation: BookingConfirmation;
  isReturn?: boolean;
};

export default function TicketCard({ confirmation, isReturn }: TicketCardProps) {
  const { trip, seats, passengerInfo, priceBreakdown, paymentMethod, bookingCode, issuedAt } = confirmation;
  const origin = getStationByCode(trip.from);
  const dest = getStationByCode(trip.to);
  const method = getPaymentMethodById(paymentMethod);
  const contact = passengerInfo.contact;
  const seatIds = seats.map((s) => s.id).join(', ');
  const issuedDate = new Date(issuedAt);
  const issuedLabel = `${String(issuedDate.getDate()).padStart(2, '0')}/${String(issuedDate.getMonth() + 1).padStart(2, '0')}/${issuedDate.getFullYear()} ${issuedDate.toLocaleTimeString('vi-VN')}`;

  return (
    <div className="w-full bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden mb-space-xl relative">
      <div className="bg-primary-container px-space-lg py-space-md text-on-primary flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
        <div className="flex items-center gap-space-sm">
          <div className="w-9 h-9 rounded bg-primary flex items-center justify-center text-secondary-fixed">
            <span className="material-symbols-outlined text-[22px]">directions_boat</span>
          </div>
          <div>
            <span className="font-headline-sm text-title-md tracking-tight uppercase text-on-primary block">SÔNG XANH EXPRESS</span>
            <span className="font-label-sm text-secondary-fixed-dim uppercase tracking-widest block">Thẻ lên tàu điện tử / Riverine Boarding Pass {isReturn ? '(CHIỀU VỀ)' : ''}</span>
          </div>
        </div>
        <div className="flex items-center gap-space-sm bg-primary/60 px-space-md py-space-xs rounded">
          <span className="font-label-sm text-on-primary-container uppercase tracking-wider">Mã đặt vé</span>
          <span className="font-title-md text-title-md tracking-wider font-bold text-on-tertiary-container">{bookingCode}</span>
        </div>
      </div>

      <div className="p-space-lg grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
        <div className="lg:col-span-7 space-y-space-md">
          <div className="bg-surface-container-low p-space-md rounded-lg flex items-center justify-between">
            <div className="flex flex-col">
              <span className="font-label-sm text-outline uppercase tracking-widest">Bến khởi hành</span>
              <span className="font-headline-sm text-headline-sm text-primary uppercase font-bold">{origin?.shortName}</span>
              <span className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-secondary">location_on</span> {origin?.area}
              </span>
            </div>

            <div className="flex flex-col items-center px-space-sm">
              <span className="font-label-sm text-on-tertiary-container font-semibold uppercase tracking-wider">{trip.durationMinutes} Phút</span>
              <div className="flex items-center gap-1 my-1">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <div className="w-16 sm:w-24 h-[2px] bg-secondary-fixed-dim"></div>
                <span className="material-symbols-outlined text-secondary text-[20px]">sailing</span>
              </div>
              <span className="font-label-sm text-outline">Tốc hành đường sông</span>
            </div>
            <div className="flex flex-col text-right">
              <span className="font-label-sm text-outline uppercase tracking-widest">Bến cập bến</span>
              <span className="font-headline-sm text-headline-sm text-primary uppercase font-bold">{dest?.shortName}</span>
              <span className="font-body-md text-body-md text-on-surface-variant flex items-center justify-end gap-1">
                {dest?.area} <span className="material-symbols-outlined text-[16px] text-secondary">flag</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-space-sm pt-space-xs">
            <div className="bg-surface-container p-space-sm rounded">
              <span className="font-label-sm text-outline uppercase tracking-wider block mb-0.5">Thời gian đi</span>
              <span className="font-title-md text-title-md font-bold text-primary block">{trip.departureTime}</span>
              <span className="font-label-sm text-on-surface-variant">{trip.date}</span>
            </div>
            <div className="bg-surface-container p-space-sm rounded">
              <span className="font-label-sm text-outline uppercase tracking-wider block mb-0.5">Phương tiện</span>
              <span className="font-title-md text-title-md font-bold text-primary block">{trip.code}</span>
              <span className="font-label-sm text-secondary font-medium">{trip.vessel.name}</span>
            </div>
            <div className="bg-surface-container p-space-sm rounded">
              <span className="font-label-sm text-outline uppercase tracking-wider block mb-0.5">Vị trí ghế</span>
              <span className="font-title-md text-title-md font-bold text-on-tertiary-container block">{seatIds}</span>
              <span className="font-label-sm text-outline truncate">{seats.length} ghế</span>
            </div>
          </div>

          <div className="bg-surface p-space-md rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
            <div className="flex items-center gap-space-sm">
              <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[22px]">group</span>
              </div>
              <div>
                <span className="font-label-sm text-outline uppercase tracking-wider block">Hành khách đại diện ({seats.length} Vé)</span>
                <span className="font-body-lg text-body-lg font-semibold text-primary">
                  {contact.fullName}{seats.length > 1 ? ` + ${seats.length - 1} người đi kèm` : ''}
                </span>
              </div>
            </div>
            <div className="text-right sm:border-l border-outline/10 sm:pl-space-md">
              <span className="font-label-sm text-outline uppercase tracking-wider block">Thanh toán</span>
              <span className="font-title-md text-title-md font-bold text-secondary">{formatVnd(priceBreakdown.total)}</span>
              <span className="inline-flex items-center gap-1 font-label-sm text-secondary font-medium">
                <span className="material-symbols-outlined text-[14px]">check_circle</span> {method?.name}
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col items-center justify-center bg-surface-container-low p-space-lg rounded-xl text-center relative">
          <div className="absolute top-space-sm right-space-sm flex items-center gap-1 bg-secondary-container/50 text-on-secondary-container px-space-xs py-0.5 rounded font-label-sm uppercase tracking-wider font-semibold">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span> Hợp lệ
          </div>
          <span className="font-label-sm text-outline uppercase tracking-widest font-semibold mb-space-sm mt-1">Mã QR Soát Vé Trực Tiếp</span>
          <QrCodeMock payload={bookingCode} />
          <p className="font-label-sm text-on-surface-variant max-w-[240px] leading-relaxed">
            Quét trực tiếp tại cổng soát vé thông minh ở bến {origin?.shortName}. <strong className="text-primary font-medium">Không cần in vé giấy.</strong>
          </p>
        </div>
      </div>

      <div className="w-full bg-surface-container-high py-space-xs px-space-lg flex items-center justify-between text-on-surface-variant text-label-sm font-label-sm">
        <span className="">Thời điểm xuất vé: {issuedLabel}</span>
        <span className="">Thao tác bảo lưu: Vé chỉ có hiệu lực cho chuyến tàu đã ghi</span>
      </div>
    </div>
  );
}
