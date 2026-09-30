import type { BookingSearchParams, Trip } from '../types';
import { generateTrips, findTripById } from '../mocks';
import { delay } from './delay';

export function searchTrips(params: BookingSearchParams): Promise<Trip[]> {
  const trips = generateTrips(params.from, params.to, params.date);
  return delay(trips, 500);
}

export function getTripById(id: number): Promise<Trip | undefined> {
  return delay(findTripById(id), 200);
}

export interface TripDatePrice {
  date: string;
  minPrice: number;
}

export function getTripDatePrices(
  from: string,
  to: string,
  dateBase: string,
  days: number = 7
): Promise<TripDatePrice[]> {
  const result: TripDatePrice[] = [];
  // Import date utils here or just do simple date math
  const base = new Date(dateBase);
  for (let i = 0; i < days; i++) {
    const date = new Date(base);
    date.setDate(base.getDate() + (i - 3));
    const dStr = date.toISOString().split('T')[0];
    const dayTrips = generateTrips(from as any, to as any, dStr);
    const minPrice = dayTrips.length > 0 ? Math.min(...dayTrips.map((t) => t.price)) : 0;
    result.push({ date: dStr, minPrice });
  }
  return delay(result, 200);
}
