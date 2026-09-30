import type { SeatMap } from '../types';
import { generateSeatMap } from '../mocks';
import { delay } from './delay';

export function getSeatMap(tripId: number): Promise<SeatMap> {
  return delay(generateSeatMap(tripId), 400);
}
