import type { Station } from '../types';
import { STATIONS } from '../mocks';
import { delay } from './delay';

export function listStations(): Promise<Station[]> {
  return delay(STATIONS, 150);
}
