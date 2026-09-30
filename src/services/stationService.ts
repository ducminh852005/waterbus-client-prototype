import type { Station } from '../types';
import { STATIONS, getStationByCode as mockGetStation } from '../mocks';
import { delay } from './delay';

export function listStations(): Promise<Station[]> {
  return delay(STATIONS, 150);
}

export function getStationByCode(code: string): Promise<Station | undefined> {
  return delay(mockGetStation(code as any), 100);
}

export function getStationByCodeSync(code: string): Station | undefined {
  return mockGetStation(code as any);
}
