import type { Trip, StationCode } from '../types';
import { VESSELS } from './vessels';
import { hashSeed, mulberry32 } from './seed';

const DEFAULT_ROUTE_KEY = 'BD-TD-2025-10-28';

function defaultTrips(): Trip[] {
  const express = VESSELS[0];
  const panorama = VESSELS[1];
  const cruiser = VESSELS[2];
  return [
    {
      id: 'T-SX104', code: 'SX-104', from: 'BD', to: 'TD', date: '2025-10-28',
      departureTime: '08:30', arrivalTime: '08:50', durationMinutes: 20,
      vessel: express, price: 15000, availableSeats: 28, totalSeats: 75, status: 'available',
    },
    {
      id: 'T-SX106', code: 'SX-106', from: 'BD', to: 'TD', date: '2025-10-28',
      departureTime: '09:15', arrivalTime: '09:40', durationMinutes: 25,
      vessel: panorama, price: 25000, availableSeats: 4, totalSeats: 60, status: 'low', tag: 'scenic',
    },
    {
      id: 'T-SX108', code: 'SX-108', from: 'BD', to: 'TD', date: '2025-10-28',
      departureTime: '10:00', arrivalTime: '10:20', durationMinutes: 20,
      vessel: express, price: 15000, availableSeats: 45, totalSeats: 75, status: 'available',
    },
    {
      id: 'T-SX110', code: 'SX-110', from: 'BD', to: 'TD', date: '2025-10-28',
      departureTime: '11:15', arrivalTime: '11:45', durationMinutes: 30,
      vessel: cruiser, price: 20000, availableSeats: 18, totalSeats: 50, status: 'available',
    },
    {
      id: 'T-SX112', code: 'SX-112', from: 'BD', to: 'TD', date: '2025-10-28',
      departureTime: '11:45', arrivalTime: '12:05', durationMinutes: 20,
      vessel: express, price: 15000, availableSeats: 0, totalSeats: 75, status: 'soldout',
    },
  ];
}

function generateTripsFor(from: StationCode, to: StationCode, date: string): Trip[] {
  const rng = mulberry32(hashSeed(`${from}-${to}-${date}`));
  const count = 4 + Math.floor(rng() * 3); // 4-6 trips
  const startHour = 6;
  const spanMinutes = 14 * 60;
  const trips: Trip[] = [];

  for (let i = 0; i < count; i++) {
    const vessel = VESSELS[Math.floor(rng() * VESSELS.length)];
    const offsetMinutes = Math.floor((spanMinutes / count) * i + rng() * 40);
    const depTotalMinutes = startHour * 60 + offsetMinutes;
    const duration = vessel.type === 'cruiser' ? 30 : vessel.type === 'panorama' ? 25 : 20;
    const arrTotalMinutes = depTotalMinutes + duration;
    const price = vessel.type === 'panorama' ? 25000 : vessel.type === 'cruiser' ? 20000 : 15000;
    const totalSeats = vessel.capacity;
    const isSoldOut = i === count - 1;
    const available = isSoldOut ? 0 : Math.floor(rng() * totalSeats * 0.8) + 2;

    trips.push({
      id: `T-${from}${to}-${date}-${i}`,
      code: `SX-${100 + i * 2}`,
      from,
      to,
      date,
      departureTime: formatMinutes(depTotalMinutes),
      arrivalTime: formatMinutes(arrTotalMinutes),
      durationMinutes: duration,
      vessel,
      price,
      availableSeats: available,
      totalSeats,
      status: isSoldOut ? 'soldout' : available < totalSeats * 0.1 ? 'low' : 'available',
      tag: vessel.type === 'panorama' ? 'scenic' : undefined,
    });
  }

  return trips.sort((a, b) => a.departureTime.localeCompare(b.departureTime));
}

function formatMinutes(total: number): string {
  const h = Math.floor(total / 60) % 24;
  const m = total % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

export function generateTrips(from: StationCode, to: StationCode, date: string): Trip[] {
  const key = `${from}-${to}-${date}`;
  if (key === DEFAULT_ROUTE_KEY) return defaultTrips();
  return generateTripsFor(from, to, date);
}

export function findTripById(id: string): Trip | undefined {
  const known = defaultTrips().find((t) => t.id === id);
  if (known) return known;
  const match = /^T-([A-Z]{2})([A-Z]{2})-(\d{4}-\d{2}-\d{2})-\d+$/.exec(id);
  if (!match) return undefined;
  const [, from, to, date] = match;
  return generateTripsFor(from as StationCode, to as StationCode, date).find((t) => t.id === id);
}
