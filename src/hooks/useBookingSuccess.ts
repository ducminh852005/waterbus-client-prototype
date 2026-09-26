import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';

export function useBookingSuccess() {
  const navigate = useNavigate();
  const { bookingData, resetBooking } = useBooking();
  const { bookingConfirmation } = bookingData;

  useEffect(() => {
    if (!bookingConfirmation) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookingConfirmation]);

  const bookAgain = () => {
    resetBooking();
    navigate('/');
  };

  return { bookingConfirmation, bookAgain, resetBooking };
}
