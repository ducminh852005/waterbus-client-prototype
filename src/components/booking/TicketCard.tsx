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
  const { trip, seats, passengerInfo, priceBreakdown, paymentMethod, bookingCode, issuedAt } =
    confirmation;
  const origin = getStationByCode(trip.from);
  const dest = getStationByCode(trip.to);
  const method = getPaymentMethodById(paymentMethod);
  const contact = passengerInfo.contact;
  const seatIds = seats.map((s) => s.id).join(', ');
  const issuedDate = new Date(issuedAt);
  const issuedLabel = `${String(issuedDate.getDate()).padStart(2, '0')}/${String(issuedDate.getMonth() + 1).padStart(2, '0')}/${issuedDate.getFullYear()} ${issuedDate.toLocaleTimeString('vi-VN')}`;

  return (
    <div className="bg-surface-container-lowest mb-space-md relative w-full overflow-hidden rounded-xl border border-slate-100 shadow-lg">
      <div className="bg-primary-container text-on-primary flex flex-col justify-between gap-3 px-4 py-3 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <div className="bg-primary text-secondary-fixed flex h-8 w-8 items-center justify-center rounded">
            <span className="material-symbols-outlined text-[18px]">directions_boat</span>
          </div>
          <div>
            <span className="text-on-primary block text-sm font-bold tracking-tight uppercase">
              SÔNG XANH EXPRESS
            </span>
            <span className="text-secondary-fixed-dim block text-[10px] tracking-widest uppercase">
              Thẻ lên tàu điện tử / Riverine Boarding Pass {isReturn ? '(CHIỀU VỀ)' : ''}
            </span>
          </div>
        </div>
        <div className="bg-primary/60 flex items-center gap-2 rounded px-3 py-1">
          <span className="text-on-primary-container text-[10px] tracking-wider uppercase">
            Mã đặt vé
          </span>
          <span className="text-on-tertiary-container text-sm font-bold tracking-wider">
            {bookingCode}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 items-start gap-4 p-4 lg:grid-cols-12">
        <div className="space-y-3 lg:col-span-8">
          <div className="bg-surface-container-low flex items-center justify-between rounded-lg p-3">
            <div className="flex flex-col">
              <span className="text-outline text-[10px] font-semibold tracking-widest uppercase">
                Bến khởi hành
              </span>
              <span className="text-primary text-lg font-bold whitespace-nowrap uppercase">
                {origin?.shortName}
              </span>
              <span className="text-on-surface-variant flex items-center gap-1 text-xs">
                <span className="material-symbols-outlined text-secondary text-[14px]">
                  location_on
                </span>{' '}
                {origin?.area}
              </span>
            </div>

            <div className="flex flex-col items-center px-2">
              <span className="text-on-tertiary-container text-[10px] font-semibold tracking-wider uppercase">
                {trip.durationMinutes} Phút
              </span>
              <div className="my-1 flex items-center gap-1">
                <div className="bg-secondary h-1.5 w-1.5 rounded-full"></div>
                <div className="bg-secondary-fixed-dim h-[2px] w-12 sm:w-20"></div>
                <span className="material-symbols-outlined text-secondary text-[16px]">
                  sailing
                </span>
              </div>
              <span className="text-outline text-[10px]">Tốc hành đường sông</span>
            </div>
            <div className="flex flex-col text-right">
              <span className="text-outline text-[10px] font-semibold tracking-widest uppercase">
                Bến cập bến
              </span>
              <span className="text-primary text-lg font-bold whitespace-nowrap uppercase">
                {dest?.shortName}
              </span>
              <span className="text-on-surface-variant flex items-center justify-end gap-1 text-xs">
                {dest?.area}{' '}
                <span className="material-symbols-outlined text-secondary text-[14px]">flag</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1 sm:grid-cols-3">
            <div className="bg-surface-container rounded p-2">
              <span className="text-outline mb-0.5 block text-[10px] font-semibold tracking-wider uppercase">
                Thời gian đi
              </span>
              <span className="text-primary block text-sm font-bold">{trip.departureTime}</span>
              <span className="text-on-surface-variant text-[10px]">{trip.date}</span>
            </div>
            <div className="bg-surface-container rounded p-2">
              <span className="text-outline mb-0.5 block text-[10px] font-semibold tracking-wider uppercase">
                Phương tiện
              </span>
              <span className="text-primary block text-sm font-bold">{trip.code}</span>
              <span className="text-secondary text-[10px] font-medium">{trip.vessel.name}</span>
            </div>
            <div className="bg-surface-container rounded p-2">
              <span className="text-outline mb-0.5 block text-[10px] font-semibold tracking-wider uppercase">
                Vị trí ghế
              </span>
              <span className="text-on-tertiary-container block text-sm font-bold">{seatIds}</span>
              <span className="text-outline truncate text-[10px]">{seats.length} ghế</span>
            </div>
          </div>

          <div className="bg-surface flex flex-col justify-between gap-3 rounded-lg p-3 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <div className="bg-secondary/15 text-secondary flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                <span className="material-symbols-outlined text-[18px]">group</span>
              </div>
              <div>
                <span className="text-outline block text-[10px] font-semibold tracking-wider uppercase">
                  Hành khách ({seats.length} Vé)
                </span>
                <span className="text-primary text-sm font-semibold">
                  {contact.fullName}
                  {seats.length > 1 ? ` + ${seats.length - 1} khách` : ''}
                </span>
              </div>
            </div>
            <div className="border-outline/10 text-right sm:border-l sm:pl-4">
              <span className="text-outline block text-[10px] font-semibold tracking-wider uppercase">
                Thanh toán
              </span>
              <span className="text-secondary text-sm font-bold">
                {formatVnd(priceBreakdown.total)}
              </span>
              <span className="text-secondary mt-0.5 flex items-center justify-end gap-1 text-[10px] font-medium">
                <span className="material-symbols-outlined text-[12px]">check_circle</span>{' '}
                {method?.name}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-low relative flex h-full flex-col items-center justify-center rounded-xl border border-slate-100/50 p-4 text-center lg:col-span-4">
          <div className="bg-secondary-container/50 text-on-secondary-container absolute top-2 right-2 flex items-center gap-1 rounded px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase">
            <span className="bg-secondary h-1.5 w-1.5 animate-pulse rounded-full"></span> Hợp lệ
          </div>
          <span className="text-outline mt-1 mb-2 text-[10px] font-semibold tracking-widest uppercase">
            Mã QR Soát Vé
          </span>
          <div className="mb-2 origin-center scale-90">
            <QrCodeMock payload={bookingCode} />
          </div>
          <p className="text-on-surface-variant max-w-[180px] text-xs leading-relaxed">
            Quét tại bến {origin?.shortName}.{' '}
            <strong className="text-primary font-medium">Không cần in vé giấy.</strong>
          </p>
        </div>
      </div>

      <div className="bg-surface-container-high text-on-surface-variant flex w-full items-center justify-between px-4 py-1.5 text-[10px]">
        <span className="">Thời điểm xuất vé: {issuedLabel}</span>
        <span className="">Thao tác bảo lưu: Vé chỉ có hiệu lực cho chuyến tàu đã ghi</span>
      </div>
    </div>
  );
}
