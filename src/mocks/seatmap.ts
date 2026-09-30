import type { Seat, SeatMap, SeatMapSection, SeatCategory } from '../types';
import { hashSeed, mulberry32 } from './seed';

const PRICE_BY_CATEGORY: Record<SeatCategory, number> = {
  vip: 25000,
  standard: 15000,
  deck: 15000,
};

function makeSeat(
  id: string,
  category: SeatCategory,
  rng: () => number,
  forcedStatus?: Seat['status']
): Seat {
  let status: Seat['status'] = forcedStatus ?? 'AVAILABLE';
  if (!forcedStatus) {
    const roll = rng();
    if (roll < 0.15) status = 'BOOKED';
  }
  return { id, seatNumber: id, deck: 'Main', category, price: PRICE_BY_CATEGORY[category], status };
}

function buildVipSection(rng: () => number): SeatMapSection {
  const rows: Seat[][] = [];
  for (let r = 1; r <= 2; r++) {
    const row: Seat[] = [];
    for (let c = 1; c <= 4; c++) {
      const seatNumber = `V${String((r - 1) * 4 + c).padStart(2, '0')}`;
      row.push(makeSeat(seatNumber, 'vip', rng));
    }
    rows.push(row);
  }
  return { id: 'vip', label: 'Khoang VIP Toàn Cảnh Phía Trước', rows };
}

function buildStandardSection(rng: () => number): SeatMapSection {
  const columns = ['A', 'B', 'C', 'D'];
  const rows: Seat[][] = [];
  for (let r = 1; r <= 7; r++) {
    const row: Seat[] = columns.map((col) => {
      const seatNumber = `${col}${String(r).padStart(2, '0')}`;
      return makeSeat(seatNumber, 'standard', rng, undefined);
    });
    rows.push(row);
  }
  return { id: 'standard', label: 'Khoang Tiêu Chuẩn Máy Lạnh (Dãy A - B - C - D)', rows };
}

function buildDeckSection(rng: () => number): SeatMapSection {
  const row: Seat[] = [];
  for (let i = 1; i <= 8; i++) {
    row.push(makeSeat(`E${String(i).padStart(2, '0')}`, 'deck', rng));
  }
  return { id: 'deck', label: 'Khu Vực Boong Hở Phía Sau Ngắm Cảnh', rows: [row] };
}

export function generateSeatMap(tripId: number): SeatMap {
  const rng = mulberry32(hashSeed(tripId.toString()));
  return {
    tripId,
    sections: [buildVipSection(rng), buildStandardSection(rng), buildDeckSection(rng)],
  };
}

export function findSeatInMap(seatMap: SeatMap, seatId: string): Seat | undefined {
  for (const section of seatMap.sections) {
    for (const row of section.rows) {
      const found = row.find((s) => s.id === seatId);
      if (found) return found;
    }
  }
  return undefined;
}
