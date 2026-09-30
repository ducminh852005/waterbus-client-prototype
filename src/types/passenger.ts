export type SpecialRequest = 'wheelchair' | 'elderly' | 'pet';

export interface Passenger {
  seatId?: string | number;
  fullName: string;
}

export interface ContactInfo {
  fullName: string;
  phone: string;
  email: string;
}

export interface PassengerInfo {
  contact: ContactInfo;
  passengers: Passenger[];
  specialRequests: SpecialRequest[];
  agreedToTerms: boolean;
}
