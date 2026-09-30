import type {
  Trip,
  Seat,
  PassengerInfo,
  PaymentMethodId,
  PriceBreakdown,
  BookingConfirmation,
} from '../types';
import { delay } from './delay';

export interface CreateBookingPayload {
  trip: Trip;
  returnTrip?: Trip;
  seats: Seat[];
  returnSeats?: Seat[];
  passengerInfo: PassengerInfo;
  paymentMethod: PaymentMethodId;
  priceBreakdown: PriceBreakdown;
}

function generateBookingCode(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  const suffix = Math.floor(Math.random() * 900 + 100);
  return `SX-${y}${m}${d}-${suffix}`;
}

export async function createBooking(payload: CreateBookingPayload): Promise<BookingConfirmation> {
  const issuedAt = new Date();
  const bookingCode = generateBookingCode(issuedAt);
  const confirmation: BookingConfirmation = {
    bookingId: Math.floor(Math.random() * 10000),
    bookingCode,
    customerPhone: payload.passengerInfo.contact.phone,
    trip: payload.trip,
    returnTrip: payload.returnTrip,
    seats: payload.seats,
    returnSeats: payload.returnSeats,
    passengerInfo: payload.passengerInfo,
    paymentMethod: payload.paymentMethod,
    priceBreakdown: payload.priceBreakdown,
    finalAmount: payload.priceBreakdown.total,
    issuedAt: issuedAt.toISOString(),
  };
  return delay(confirmation, 700);
}
