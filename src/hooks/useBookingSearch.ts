import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import type { Station, StationCode, TripType } from '../types';
import { listStations } from '../services';

export function useBookingSearch() {
  const navigate = useNavigate();
  const { updateBooking } = useBooking();

  const [stations, setStations] = useState<Station[]>([]);
  const [from, setFrom] = useState<StationCode>('BD');
  const [to, setTo] = useState<StationCode>('TD');
  const [date, setDate] = useState('2025-10-28');
  const [returnDate, setReturnDate] = useState('2025-10-29');
  const [passengers, setPassengers] = useState(1);
  const [tripType, setTripType] = useState<TripType>('one-way');

  useEffect(() => {
    listStations().then(setStations);
  }, []);

  const swapStations = () => {
    setFrom(to);
    setTo(from);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    updateBooking({
      searchParams: { from, to, date, returnDate: tripType === 'round-trip' ? returnDate : undefined, passengers, tripType },
    });
    navigate('/trips');
  };

  return {
    stations,
    from, setFrom,
    to, setTo,
    date, setDate,
    returnDate, setReturnDate,
    passengers, setPassengers,
    tripType, setTripType,
    swapStations,
    handleSearch,
  };
}
