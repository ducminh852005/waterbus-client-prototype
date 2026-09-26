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

export default function PaymentSummaryCard({ trip, returnTrip, seats, returnSeats, contact, priceBreakdown, submitting, onSubmit }: PaymentSummaryCardProps) {
  const origin = getStationByCode(trip.from);
  const dest = getStationByCode(trip.to);
  const seatIds = seats.map((s) => s.id).join(', ');
  
  const returnOrigin = returnTrip ? getStationByCode(returnTrip.from) : null;
  const returnDest = returnTrip ? getStationByCode(returnTrip.to) : null;
  const returnSeatIds = returnSeats ? returnSeats.map((s) => s.id).join(', ') : '';

  const hasVoucher = !!priceBreakdown.voucherCode;
  const totalSeats = seats.length + (returnSeats ? returnSeats.length : 0);

  return (
    <aside className="lg:col-span-5 space-y-space-lg">
      <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-md space-y-space-md">
        <div className="space-y-space-xs">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">Tóm tắt chuyến đi #{trip.code}</span>
          <h2 className="font-headline-sm text-headline-sm text-on-surface">{origin?.shortName} ➔ {dest?.shortName}</h2>
          <div className="flex items-center gap-space-sm text-on-surface-variant font-body-md text-body-md">
            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
            <span className="">{trip.departureTime} • Tàu {trip.vessel.name}</span>
          </div>
        </div>

        <div className="relative w-full h-40 rounded-lg overflow-hidden bg-primary-container">
          <img
            className="w-full h-full object-cover"
            data-alt="Chuyến tàu cao tốc đường sông Sông Xanh Water Express lướt êm ả trên sông Sài Gòn vào lúc hoàng hôn"
            src="/images/hero-1.webp"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-on-primary font-label-sm text-label-sm">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">airline_seat_recline_extra</span> {trip.vessel.name}
            </span>
            <span className="font-semibold bg-primary/40 px-2 py-0.5 rounded backdrop-blur-sm">{seats.length} Hành khách</span>
          </div>
        </div>

        <div className="p-space-sm rounded-lg bg-surface-container-low space-y-space-xs">
          <div className="flex justify-between items-center text-body-md font-body-md">
            <span className="text-on-surface-variant">Vị trí ghế đã giữ:</span>
            <span className="font-title-md text-title-md text-secondary tracking-widest">{seatIds}</span>
          </div>
          <div className="flex justify-between items-center text-label-sm font-label-sm text-outline">
            <span className="">Hành khách đại diện:</span>
            <span className="text-on-surface font-medium">{contact.fullName} ({contact.phone})</span>
          </div>
        </div>

        <div className="space-y-space-xs pt-space-xs">
          <div className="flex justify-between text-body-md font-body-md text-on-surface-variant">
            <span className="">Vé chiều đi ({seats.length} vé • Ghế {seatIds})</span>
          </div>
          {returnTrip && (
            <div className="flex justify-between text-body-md font-body-md text-on-surface-variant">
              <span className="">Vé chiều về ({returnSeats?.length} vé • Ghế {returnSeatIds})</span>
            </div>
          )}
          <div className="flex justify-between text-body-md font-body-md text-on-surface-variant border-t border-outline-variant/30 pt-2 mt-2">
            <span className="">Tổng tiền vé ({totalSeats} vé)</span>
            <span className="text-on-surface font-medium">{formatVnd(priceBreakdown.subtotal)}</span>
          </div>
          <div className="flex justify-between text-body-md font-body-md text-on-surface-variant border-t border-outline-variant/30 pt-2 mt-2">
            <span className="">Phí tiện ích xuất vé điện tử SMS & Email</span>
            <span className="text-secondary font-medium uppercase text-label-md font-label-md">0đ (Miễn phí)</span>
          </div>
          <div className="flex justify-between text-body-md font-body-md text-on-surface-variant">
            <span className="">Bảo hiểm trách nhiệm hành khách (Bảo Việt)</span>
            <span className="text-secondary font-medium uppercase text-label-md font-label-md">Đã bao gồm</span>
          </div>
          {hasVoucher && (
            <div className="flex justify-between text-body-md font-body-md text-on-tertiary-container font-medium">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">loyalty</span> Mã ưu đãi ({priceBreakdown.voucherCode})
              </span>
              <span className="">-{formatVnd(priceBreakdown.voucherDiscount)}</span>
            </div>
          )}
        </div>

        <div className="p-space-md rounded-xl bg-surface-container-high flex items-center justify-between">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Tổng cộng thanh toán</span>
            <p className="font-label-sm text-label-sm text-on-surface-variant">Đã bao gồm thuế GTGT (VAT)</p>
          </div>
          <div className="text-right">
            {hasVoucher && <span className="line-through text-outline font-label-sm text-label-sm">{formatVnd(priceBreakdown.subtotal)}</span>}
            <div className="font-headline-sm text-headline-sm text-on-tertiary-container font-bold tracking-tight">
              {formatVnd(priceBreakdown.total)}
            </div>
          </div>
        </div>

        <button
          className="w-full py-space-md px-space-lg bg-on-tertiary-container hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed text-on-primary font-title-md text-title-md rounded-lg flex items-center justify-center gap-space-sm shadow-md hover:shadow-lg transition-all uppercase tracking-wide group"
          type="button"
          disabled={submitting}
          onClick={onSubmit}
        >
          <span className="">{submitting ? 'Đang xử lý...' : `Thanh toán an toàn ${formatVnd(priceBreakdown.total)}`}</span>
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>

        <p className="font-label-sm text-label-sm text-outline text-center leading-normal">
          Bằng việc nhấn "Thanh toán", quý khách đồng ý với <a className="text-secondary underline" href="#">Điều khoản dịch vụ đường sông</a> và chính sách quyền riêng tư của Sông Xanh Express.
        </p>
      </div>

      <div className="p-space-md rounded-xl bg-surface-container-low flex items-center justify-between">
        <div className="flex items-center gap-space-sm">
          <div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-secondary shadow-sm">
            <span className="material-symbols-outlined text-[22px]">support_agent</span>
          </div>
          <div>
            <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Cần hỗ trợ thanh toán?</span>
            <p className="font-title-md text-body-md text-on-surface">Hotline trực tuyến 24/7</p>
          </div>
        </div>
        <a className="font-headline-sm text-headline-sm text-on-tertiary-container font-semibold hover:opacity-90 transition-opacity" href="tel:19006868">
          1900 6868
        </a>
      </div>
    </aside>
  );
}
