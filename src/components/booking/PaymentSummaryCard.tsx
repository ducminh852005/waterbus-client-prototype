import type { Trip, Seat, ContactInfo, PriceBreakdown } from '../../types';
import { getStationByCode } from '../../mocks';
import { formatVnd } from '../../utils/pricing';

type PaymentSummaryCardProps = {
  trip: Trip;
  returnTrip?: Trip | null;
  seats: Seat[];
  returnSeats?: Seat[];
  contact: ContactInfo;
  priceBreakdown: PriceBreakdown;
  submitting: boolean;
  onSubmit: () => void;
};

export default function PaymentSummaryCard({
  trip,
  returnTrip,
  seats,
  returnSeats,
  contact,
  priceBreakdown,
  submitting,
  onSubmit,
}: PaymentSummaryCardProps) {
  const origin = getStationByCode(trip.from);
  const dest = getStationByCode(trip.to);
  const seatIds = seats.map((s) => s.id).join(', ');

  const returnOrigin = returnTrip ? getStationByCode(returnTrip.from) : null;
  const returnDest = returnTrip ? getStationByCode(returnTrip.to) : null;
  const returnSeatIds = returnSeats ? returnSeats.map((s) => s.id).join(', ') : '';

  const hasVoucher = !!priceBreakdown.voucherCode;
  const totalSeats = seats.length + (returnSeats ? returnSeats.length : 0);

  return (
    <aside className="space-y-space-lg lg:col-span-5">
      <div className="p-space-lg bg-surface-container-lowest space-y-space-md rounded-xl shadow-md">
        <div className="space-y-space-xs">
          <span className="font-label-sm text-label-sm text-secondary font-semibold tracking-wider uppercase">
            Tóm tắt chuyến đi #{trip.code}
          </span>
          <h2 className="font-headline-sm text-headline-sm text-on-surface">
            {origin?.shortName} ➔ {dest?.shortName}
          </h2>
          <div className="gap-space-sm text-on-surface-variant font-body-md text-body-md flex items-center">
            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
            <span className="">
              {trip.departureTime} • Tàu {trip.vessel.name}
            </span>
          </div>
        </div>

        <div className="bg-primary-container relative h-40 w-full overflow-hidden rounded-lg">
          <img
            className="h-full w-full object-cover"
            data-alt="Chuyến tàu cao tốc đường sông Sông Xanh Water Express lướt êm ả trên sông Sài Gòn vào lúc hoàng hôn"
            src="/images/hero-1.webp"
          />
          <div className="from-primary/80 absolute inset-0 bg-gradient-to-t via-transparent to-transparent"></div>
          <div className="text-on-primary font-label-sm text-label-sm absolute right-3 bottom-3 left-3 flex items-center justify-between">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">
                airline_seat_recline_extra
              </span>{' '}
              {trip.vessel.name}
            </span>
            <span className="bg-primary/40 rounded px-2 py-0.5 font-semibold backdrop-blur-sm">
              {seats.length} Hành khách
            </span>
          </div>
        </div>

        <div className="p-space-sm bg-surface-container-low space-y-space-xs rounded-lg">
          <div className="text-body-md font-body-md flex items-center justify-between">
            <span className="text-on-surface-variant">Vị trí ghế đã giữ:</span>
            <span className="font-title-md text-title-md text-secondary tracking-widest">
              {seatIds}
            </span>
          </div>
          <div className="text-label-sm font-label-sm text-outline flex items-center justify-between">
            <span className="">Hành khách đại diện:</span>
            <span className="text-on-surface font-medium">
              {contact.fullName} ({contact.phone})
            </span>
          </div>
        </div>

        <div className="space-y-space-xs pt-space-xs">
          <div className="text-body-md font-body-md text-on-surface-variant flex justify-between">
            <span className="">
              Vé chiều đi ({seats.length} vé • Ghế {seatIds})
            </span>
          </div>
          {returnTrip && (
            <div className="text-body-md font-body-md text-on-surface-variant flex justify-between">
              <span className="">
                Vé chiều về ({returnSeats?.length} vé • Ghế {returnSeatIds})
              </span>
            </div>
          )}
          <div className="text-body-md font-body-md text-on-surface-variant border-outline-variant/30 mt-2 flex justify-between border-t pt-2">
            <span className="">Tổng tiền vé ({totalSeats} vé)</span>
            <span className="text-on-surface font-medium">
              {formatVnd(priceBreakdown.subtotal)}
            </span>
          </div>
          <div className="text-body-md font-body-md text-on-surface-variant border-outline-variant/30 mt-2 flex justify-between border-t pt-2">
            <span className="">Phí tiện ích xuất vé điện tử SMS & Email</span>
            <span className="text-secondary text-label-md font-label-md font-medium uppercase">
              0đ (Miễn phí)
            </span>
          </div>
          <div className="text-body-md font-body-md text-on-surface-variant flex justify-between">
            <span className="">Bảo hiểm trách nhiệm hành khách (Bảo Việt)</span>
            <span className="text-secondary text-label-md font-label-md font-medium uppercase">
              Đã bao gồm
            </span>
          </div>
          {hasVoucher && (
            <div className="text-body-md font-body-md text-on-tertiary-container flex justify-between font-medium">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">loyalty</span> Mã ưu đãi (
                {priceBreakdown.voucherCode})
              </span>
              <span className="">-{formatVnd(priceBreakdown.voucherDiscount)}</span>
            </div>
          )}
        </div>

        <div className="p-space-md bg-surface-container-high flex items-center justify-between rounded-xl">
          <div>
            <span className="font-label-sm text-label-sm text-outline tracking-wider uppercase">
              Tổng cộng thanh toán
            </span>
            <p className="font-label-sm text-label-sm text-on-surface-variant">
              Đã bao gồm thuế GTGT (VAT)
            </p>
          </div>
          <div className="text-right">
            {hasVoucher && (
              <span className="text-outline font-label-sm text-label-sm line-through">
                {formatVnd(priceBreakdown.subtotal)}
              </span>
            )}
            <div className="font-headline-sm text-headline-sm text-on-tertiary-container font-bold tracking-tight">
              {formatVnd(priceBreakdown.total)}
            </div>
          </div>
        </div>

        <button
          className="py-space-md px-space-lg bg-on-tertiary-container hover:bg-secondary text-on-primary font-title-md text-title-md gap-space-sm group flex w-full items-center justify-center rounded-lg tracking-wide uppercase shadow-md transition-all hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
          type="button"
          disabled={submitting}
          onClick={onSubmit}
        >
          <span className="">
            {submitting ? 'Đang xử lý...' : `Thanh toán an toàn ${formatVnd(priceBreakdown.total)}`}
          </span>
          <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
            arrow_forward
          </span>
        </button>

        <p className="font-label-sm text-label-sm text-outline text-center leading-normal">
          Bằng việc nhấn "Thanh toán", quý khách đồng ý với{' '}
          <a className="text-secondary underline" href="#">
            Điều khoản dịch vụ đường sông
          </a>{' '}
          và chính sách quyền riêng tư của Sông Xanh Express.
        </p>
      </div>

      <div className="p-space-md bg-surface-container-low flex items-center justify-between rounded-xl">
        <div className="gap-space-sm flex items-center">
          <div className="bg-surface-container-lowest text-secondary flex h-10 w-10 items-center justify-center rounded-full shadow-sm">
            <span className="material-symbols-outlined text-[22px]">support_agent</span>
          </div>
          <div>
            <span className="font-label-sm text-label-sm text-outline tracking-wider uppercase">
              Cần hỗ trợ thanh toán?
            </span>
            <p className="font-title-md text-body-md text-on-surface">Hotline trực tuyến 24/7</p>
          </div>
        </div>
        <a
          className="font-headline-sm text-headline-sm text-on-tertiary-container font-semibold transition-opacity hover:opacity-90"
          href="tel:19006868"
        >
          1900 6868
        </a>
      </div>
    </aside>
  );
}
