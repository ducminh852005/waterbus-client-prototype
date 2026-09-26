import type { StationCode } from './station';
import type { Trip } from './trip';
import type { Seat } from './seat';
import type { PassengerInfo } from './passenger';
import type { PaymentMethodId } from './payment';

export type TripType = 'one-way' | 'round-trip' | 'charter';

export interface BookingSearchParams {
  from: StationCode;
  to: StationCode;
  date: string;
  returnDate?: string;
  passengers: number;
  tripType: TripType;
}

export interface PriceBreakdown {
  subtotal: number;
  voucherDiscount: number;
  total: number;
  voucherCode?: string;
}

export interface BookingConfirmation {
  bookingCode: string;
  trip: Trip;
  returnTrip?: Trip;
  seats: Seat[];
  returnSeats?: Seat[];
  passengerInfo: PassengerInfo;
  paymentMethod: PaymentMethodId;
  priceBreakdown: PriceBreakdown;
  qrPayload: string;
  issuedAt: string;
}
