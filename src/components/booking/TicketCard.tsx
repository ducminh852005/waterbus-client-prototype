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
    <div className="bg-surface-container-lowest mb-space-xl relative w-full overflow-hidden rounded-xl shadow-xl">
      <div className="bg-primary-container px-space-lg py-space-md text-on-primary gap-space-sm flex flex-col justify-between md:flex-row md:items-center">
        <div className="gap-space-sm flex items-center">
          <div className="bg-primary text-secondary-fixed flex h-9 w-9 items-center justify-center rounded">
            <span className="material-symbols-outlined text-[22px]">directions_boat</span>
          </div>
          <div>
            <span className="font-headline-sm text-title-md text-on-primary block tracking-tight uppercase">
              SÔNG XANH EXPRESS
            </span>
            <span className="font-label-sm text-secondary-fixed-dim block tracking-widest uppercase">
              Thẻ lên tàu điện tử / Riverine Boarding Pass {isReturn ? '(CHIỀU VỀ)' : ''}
            </span>
          </div>
        </div>
        <div className="gap-space-sm bg-primary/60 px-space-md py-space-xs flex items-center rounded">
          <span className="font-label-sm text-on-primary-container tracking-wider uppercase">
            Mã đặt vé
          </span>
          <span className="font-title-md text-title-md text-on-tertiary-container font-bold tracking-wider">
            {bookingCode}
          </span>
        </div>
      </div>

      <div className="p-space-lg gap-space-lg grid grid-cols-1 items-center lg:grid-cols-12">
        <div className="space-y-space-md lg:col-span-7">
          <div className="bg-surface-container-low p-space-md flex items-center justify-between rounded-lg">
            <div className="flex flex-col">
              <span className="font-label-sm text-outline tracking-widest uppercase">
                Bến khởi hành
              </span>
              <span className="font-headline-sm text-headline-sm text-primary font-bold uppercase">
                {origin?.shortName}
              </span>
              <span className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1">
                <span className="material-symbols-outlined text-secondary text-[16px]">
                  location_on
                </span>{' '}
                {origin?.area}
              </span>
            </div>

            <div className="px-space-sm flex flex-col items-center">
              <span className="font-label-sm text-on-tertiary-container font-semibold tracking-wider uppercase">
                {trip.durationMinutes} Phút
              </span>
              <div className="my-1 flex items-center gap-1">
                <div className="bg-secondary h-2 w-2 rounded-full"></div>
                <div className="bg-secondary-fixed-dim h-[2px] w-16 sm:w-24"></div>
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  sailing
                </span>
              </div>
              <span className="font-label-sm text-outline">Tốc hành đường sông</span>
            </div>
            <div className="flex flex-col text-right">
              <span className="font-label-sm text-outline tracking-widest uppercase">
                Bến cập bến
              </span>
              <span className="font-headline-sm text-headline-sm text-primary font-bold uppercase">
                {dest?.shortName}
              </span>
              <span className="font-body-md text-body-md text-on-surface-variant flex items-center justify-end gap-1">
                {dest?.area}{' '}
                <span className="material-symbols-outlined text-secondary text-[16px]">flag</span>
              </span>
            </div>
          </div>

          <div className="gap-space-sm pt-space-xs grid grid-cols-2 sm:grid-cols-3">
            <div className="bg-surface-container p-space-sm rounded">
              <span className="font-label-sm text-outline mb-0.5 block tracking-wider uppercase">
                Thời gian đi
              </span>
              <span className="font-title-md text-title-md text-primary block font-bold">
                {trip.departureTime}
              </span>
              <span className="font-label-sm text-on-surface-variant">{trip.date}</span>
            </div>
            <div className="bg-surface-container p-space-sm rounded">
              <span className="font-label-sm text-outline mb-0.5 block tracking-wider uppercase">
                Phương tiện
              </span>
              <span className="font-title-md text-title-md text-primary block font-bold">
                {trip.code}
              </span>
              <span className="font-label-sm text-secondary font-medium">{trip.vessel.name}</span>
            </div>
            <div className="bg-surface-container p-space-sm rounded">
              <span className="font-label-sm text-outline mb-0.5 block tracking-wider uppercase">
                Vị trí ghế
              </span>
              <span className="font-title-md text-title-md text-on-tertiary-container block font-bold">
                {seatIds}
              </span>
              <span className="font-label-sm text-outline truncate">{seats.length} ghế</span>
            </div>
          </div>

          <div className="bg-surface p-space-md gap-space-sm flex flex-col justify-between rounded-lg sm:flex-row sm:items-center">
            <div className="gap-space-sm flex items-center">
              <div className="bg-secondary/15 text-secondary flex h-10 w-10 items-center justify-center rounded-full">
                <span className="material-symbols-outlined text-[22px]">group</span>
              </div>
              <div>
                <span className="font-label-sm text-outline block tracking-wider uppercase">
                  Hành khách đại diện ({seats.length} Vé)
                </span>
                <span className="font-body-lg text-body-lg text-primary font-semibold">
                  {contact.fullName}
                  {seats.length > 1 ? ` + ${seats.length - 1} người đi kèm` : ''}
                </span>
              </div>
            </div>
            <div className="border-outline/10 sm:pl-space-md text-right sm:border-l">
              <span className="font-label-sm text-outline block tracking-wider uppercase">
                Thanh toán
              </span>
              <span className="font-title-md text-title-md text-secondary font-bold">
                {formatVnd(priceBreakdown.total)}
              </span>
              <span className="font-label-sm text-secondary inline-flex items-center gap-1 font-medium">
                <span className="material-symbols-outlined text-[14px]">check_circle</span>{' '}
                {method?.name}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-low p-space-lg relative flex flex-col items-center justify-center rounded-xl text-center lg:col-span-5">
          <div className="top-space-sm right-space-sm bg-secondary-container/50 text-on-secondary-container px-space-xs font-label-sm absolute flex items-center gap-1 rounded py-0.5 font-semibold tracking-wider uppercase">
            <span className="bg-secondary h-2 w-2 animate-pulse rounded-full"></span> Hợp lệ
          </div>
          <span className="font-label-sm text-outline mb-space-sm mt-1 font-semibold tracking-widest uppercase">
            Mã QR Soát Vé Trực Tiếp
          </span>
          <QrCodeMock payload={bookingCode} />
          <p className="font-label-sm text-on-surface-variant max-w-[240px] leading-relaxed">
            Quét trực tiếp tại cổng soát vé thông minh ở bến {origin?.shortName}.{' '}
            <strong className="text-primary font-medium">Không cần in vé giấy.</strong>
          </p>
        </div>
      </div>

      <div className="bg-surface-container-high py-space-xs px-space-lg text-on-surface-variant text-label-sm font-label-sm flex w-full items-center justify-between">
        <span className="">Thời điểm xuất vé: {issuedLabel}</span>
        <span className="">Thao tác bảo lưu: Vé chỉ có hiệu lực cho chuyến tàu đã ghi</span>
      </div>
    </div>
  );
}
