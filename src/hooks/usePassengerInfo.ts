import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import type { ContactInfo, Passenger, SpecialRequest } from '../types';

function buildInitialPassengers(seatIds: string[]): Passenger[] {
  return seatIds.map((seatId) => ({
    seatId,
    type: 'adult',
  }));
}

export function usePassengerInfo() {
  const navigate = useNavigate();
  const { bookingData, updateBooking } = useBooking();
  const { selectedTrip, selectedSeats } = bookingData;

  const [contact, setContact] = useState<ContactInfo>({
    fullName: '',
    phone: '',
    email: '',
    notifyByZaloSms: true,
  });
  const [passengers, setPassengers] = useState<Passenger[]>([]);
  const [specialRequests, setSpecialRequests] = useState<SpecialRequest[]>([]);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedTrip || selectedSeats.length === 0) {
      navigate('/trips');
      return;
    }
    setPassengers(buildInitialPassengers(selectedSeats.map((s) => s.id)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTrip, selectedSeats.map((s) => s.id).join(',')]);

  const updatePassenger = (index: number, patch: Partial<Passenger>) => {
    setPassengers((prev) => prev.map((p, i) => (i === index ? { ...p, ...patch } : p)));
  };

  const copyContactToPassenger = (index: number) => {
    // Không còn áp dụng vì form passenger không còn hỏi fullName
  };

  const toggleSpecialRequest = (request: SpecialRequest) => {
    setSpecialRequests((prev) =>
      prev.includes(request) ? prev.filter((r) => r !== request) : [...prev, request]
    );
  };

  const validate = (): boolean => {
    if (!contact.fullName.trim() || !contact.phone.trim() || !contact.email.trim()) {
      setError('Vui lòng nhập đầy đủ thông tin người đặt vé.');
      return false;
    }
    // Bỏ qua validate fullName và birthYear cho từng passenger vì ERD không yêu cầu
    if (!agreedToTerms) {
      setError('Vui lòng đồng ý với điều khoản dịch vụ trước khi tiếp tục.');
      return false;
    }
    setError(null);
    return true;
  };

  const submit = () => {
    if (!validate()) return false;
    updateBooking({
      passengerInfo: { contact, passengers, specialRequests, agreedToTerms },
    });
    navigate('/payment');
    return true;
  };

  return {
    contact,
    setContact,
    passengers,
    updatePassenger,
    copyContactToPassenger,
    specialRequests,
    toggleSpecialRequest,
    agreedToTerms,
    setAgreedToTerms,
    error,
    submit,
  };
}
