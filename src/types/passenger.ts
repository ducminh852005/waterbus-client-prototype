export type PassengerType = 'adult' | 'child' | 'senior';
export type SpecialRequest = 'wheelchair' | 'elderly' | 'pet';

export interface Passenger {
  seatId: string;
  fullName: string;
  birthYear: string;
  idNumber?: string;
  type: PassengerType;
}

export interface ContactInfo {
  fullName: string;
  phone: string;
  email: string;
  notifyByZaloSms: boolean;
}

export interface PassengerInfo {
  contact: ContactInfo;
  passengers: Passenger[];
  specialRequests: SpecialRequest[];
  agreedToTerms: boolean;
}
