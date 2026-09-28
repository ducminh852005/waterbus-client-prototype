export type SeatCategory = 'vip' | 'standard' | 'deck';
export type SeatStatus = 'AVAILABLE' | 'HOLDING' | 'BOOKED';

export interface Seat {
  id: number;
  reservationId?: number;
  seatNumber: string;
  category: SeatCategory;
  deck: string;
  price: number;
  status: SeatStatus;
  holdToken?: string;
}

export interface SeatMapSection {
  id: SeatCategory;
  label: string;
  rows: Seat[][];
}

export interface SeatMap {
  tripId: number;
  sections: SeatMapSection[];
}
