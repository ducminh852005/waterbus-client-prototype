import type { StationCode } from './station';
import type { Trip } from './trip';
import type { Seat } from './seat';
import type { PassengerInfo } from './passenger';
import type { PaymentMethodId } from './payment';

export type TripType = 'one-way' | 'round-trip';

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

export interface Ticket {
  ticketId: number;
  seatNumber: string;
  qrTokenHash: string;
  status: 'VALID' | 'USED' | 'CANCELLED';
  tripInstanceId: number;
}

export interface BookingConfirmation {
  bookingId: number;
  bookingCode: string;
  customerPhone: string;
  trip: Trip;
  returnTrip?: Trip;
  seats: Seat[];
  returnSeats?: Seat[];
  passengerInfo: PassengerInfo;
  paymentMethod: PaymentMethodId;
  priceBreakdown: PriceBreakdown;
  finalAmount: number;
  issuedAt: string;
}
