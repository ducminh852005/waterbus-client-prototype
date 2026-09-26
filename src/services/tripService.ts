import type { BookingSearchParams, Trip } from '../types';
import { generateTrips, findTripById } from '../mocks';
import { delay } from './delay';

export function searchTrips(params: BookingSearchParams): Promise<Trip[]> {
  const trips = generateTrips(params.from, params.to, params.date);
  return delay(trips, 500);
}

export function getTripById(id: string): Promise<Trip | undefined> {
  return delay(findTripById(id), 200);
}
