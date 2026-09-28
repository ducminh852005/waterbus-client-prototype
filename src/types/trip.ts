import type { StationCode } from './station';
import type { Vessel } from './vessel';

export type TripStatus = 'available' | 'low' | 'soldout';
export type TripTag = 'recommended' | 'scenic';

export interface Trip {
  id: number;
  code: string;
  routeId?: number;
  from: StationCode;
  to: StationCode;
  date: string;
  departureTime: string;
  arrivalTime: string;
  durationMinutes: number;
  vessel: Vessel;
  price: number;
  availableSeats: number;
  totalSeats: number;
  status: TripStatus;
  tag?: TripTag;
}
