import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import type { Trip } from '../types';
import { searchTrips } from '../services';
import { generateTrips } from '../mocks';
import { addDays, formatShortDate, formatWeekdayLabel } from '../utils/date';

export type TripSortBy = 'earliest' | 'cheapest' | 'most-seats';

export function useTripSearch() {
  const navigate = useNavigate();
  const { bookingData, updateBooking } = useBooking();
  const { searchParams, selectedTrip } = bookingData;

  const isReturn = searchParams?.tripType === 'round-trip' && selectedTrip !== null;

  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState<TripSortBy>('earliest');

  useEffect(() => {
    if (!searchParams) {
      navigate('/search');
      return;
    }
    setLoading(true);
    const params = isReturn
      ? {
          ...searchParams,
          from: searchParams.to,
          to: searchParams.from,
          date: searchParams.returnDate!,
        }
      : searchParams;

    searchTrips(params).then((result) => {
      setTrips(result);
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    searchParams?.from,
    searchParams?.to,
    searchParams?.date,
    searchParams?.returnDate,
    isReturn,
  ]);

  const sortedTrips = useMemo(() => {
    const list = [...trips];
    switch (sortBy) {
      case 'cheapest':
        return list.sort((a, b) => a.price - b.price);
      case 'most-seats':
        return list.sort((a, b) => b.availableSeats - a.availableSeats);
      default:
        return list.sort((a, b) => a.departureTime.localeCompare(b.departureTime));
    }
  }, [trips, sortBy]);

  const selectTrip = (trip: Trip) => {
    if (trip.status === 'soldout') return;
    if (isReturn) {
      updateBooking({ selectedReturnTrip: trip });
      navigate('/seats');
    } else {
      updateBooking({ selectedTrip: trip });
      if (searchParams?.tripType !== 'round-trip') {
        navigate('/seats');
      }
    }
  };

  const weekDates = useMemo(() => {
    if (!searchParams) return [];
    const dateBase = isReturn ? searchParams.returnDate! : searchParams.date;
    const origin = isReturn ? searchParams.to : searchParams.from;
    const dest = isReturn ? searchParams.from : searchParams.to;
    return Array.from({ length: 7 }, (_, i) => {
      const date = addDays(dateBase, i - 3);
      const dayTrips = generateTrips(origin, dest, date);
      const minPrice = Math.min(...dayTrips.map((t) => t.price));
      return {
        date,
        weekday: formatWeekdayLabel(date),
        shortDate: formatShortDate(date),
        minPrice,
      };
    });
  }, [searchParams, isReturn]);

  const changeDate = (date: string) => {
    if (!searchParams) return;
    if (isReturn) {
      updateBooking({ searchParams: { ...searchParams, returnDate: date } });
    } else {
      updateBooking({ searchParams: { ...searchParams, date } });
    }
  };

  return {
    searchParams,
    trips: sortedTrips,
    loading,
    sortBy,
    setSortBy,
    selectTrip,
    weekDates,
    changeDate,
    isReturn,
  };
}
