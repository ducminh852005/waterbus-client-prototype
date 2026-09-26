import React, { createContext, useContext, useState } from 'react';
import type {
  BookingSearchParams,
  Trip,
  Seat,
  PassengerInfo,
  PaymentMethodId,
  Voucher,
  BookingConfirmation,
} from '../types';

export type BookingState = {
  searchParams: BookingSearchParams | null;
  selectedTrip: Trip | null;
  selectedReturnTrip: Trip | null;
  selectedSeats: Seat[];
  selectedReturnSeats: Seat[];
  passengerInfo: PassengerInfo | null;
  paymentMethod: PaymentMethodId | null;
  voucher: Voucher | null;
  bookingConfirmation: BookingConfirmation | null;
};

const initialState: BookingState = {
  searchParams: null,
  selectedTrip: null,
  selectedReturnTrip: null,
  selectedSeats: [],
  selectedReturnSeats: [],
  passengerInfo: null,
  paymentMethod: null,
  voucher: null,
  bookingConfirmation: null,
};

type BookingContextValue = {
  bookingData: BookingState;
  updateBooking: (data: Partial<BookingState>) => void;
  resetBooking: () => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export const BookingProvider = ({ children }: { children: React.ReactNode }) => {
  const [bookingData, setBookingData] = useState<BookingState>(initialState);

  const updateBooking = (data: Partial<BookingState>) => {
    setBookingData((prev) => ({ ...prev, ...data }));
  };

  const resetBooking = () => {
    setBookingData(initialState);
  };

  return (
    <BookingContext.Provider value={{ bookingData, updateBooking, resetBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = (): BookingContextValue => {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error('useBooking must be used within BookingProvider');
  return ctx;
};
