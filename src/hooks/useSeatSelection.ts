import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import type { Seat, SeatMap } from '../types';
import { getSeatMap } from '../services';
import { computeSubtotal } from '../utils/pricing';
import { useCountdown } from './useCountdown';

export function useSeatSelection() {
  const navigate = useNavigate();
  const { bookingData, updateBooking } = useBooking();
  const { selectedTrip, selectedReturnTrip, searchParams } = bookingData;
  const isReturn = searchParams?.tripType === 'round-trip' && selectedReturnTrip !== null && bookingData.selectedSeats.length > 0;
  const currentTrip = isReturn ? selectedReturnTrip : selectedTrip;

  const [seatMap, setSeatMap] = useState<SeatMap | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedSeatIds, setSelectedSeatIds] = useState<string[]>([]);
  const countdown = useCountdown(150);

  const maxSeats = searchParams?.passengers ?? 1;

  useEffect(() => {
    if (!currentTrip) {
      navigate('/trips');
      return;
    }
    setLoading(true);
    getSeatMap(currentTrip.id).then((map) => {
      setSeatMap(map);
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTrip?.id]);

  const allSeats = useMemo<Seat[]>(() => {
    if (!seatMap) return [];
    return seatMap.sections.flatMap((section) => section.rows.flat());
  }, [seatMap]);

  const selectedSeats = useMemo(
    () => allSeats.filter((s) => selectedSeatIds.includes(s.id)),
    [allSeats, selectedSeatIds],
  );

  const toggleSeat = (seat: Seat) => {
    if (seat.status === 'booked') return;
    setSelectedSeatIds((prev) => {
      if (prev.includes(seat.id)) return prev.filter((id) => id !== seat.id);
      if (prev.length >= maxSeats) return prev;
      return [...prev, seat.id];
    });
  };

  const subtotal = computeSubtotal(selectedSeats);

  const canContinue = selectedSeats.length === maxSeats;

  const goToPassengerInfo = () => {
    if (!canContinue) return;
    if (isReturn) {
      updateBooking({ selectedReturnSeats: selectedSeats });
      navigate('/passenger-info');
    } else {
      updateBooking({ selectedSeats });
      if (searchParams?.tripType === 'round-trip') {
        navigate('/trips'); // Go back to select return trip
      } else {
        navigate('/passenger-info');
      }
    }
  };

  return {
    selectedTrip: currentTrip,
    seatMap,
    loading,
    selectedSeatIds,
    selectedSeats,
    toggleSeat,
    maxSeats,
    subtotal,
    canContinue,
    goToPassengerInfo,
    countdown,
    isReturn,
  };
}
