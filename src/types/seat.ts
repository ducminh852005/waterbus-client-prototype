export type SeatCategory = 'vip' | 'standard' | 'deck';
export type SeatStatus = 'available' | 'booked' | 'priority';

export interface Seat {
  id: string;
  category: SeatCategory;
  price: number;
  status: SeatStatus;
}

export interface SeatMapSection {
  id: SeatCategory;
  label: string;
  rows: Seat[][];
}

export interface SeatMap {
  tripId: string;
  sections: SeatMapSection[];
}
