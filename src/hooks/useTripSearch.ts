import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import type { Trip } from '../types';
import { searchTrips, getTripDatePrices } from '../services/tripService';
import { formatShortDate, formatWeekdayLabel } from '../utils/date';

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

  const [weekDates, setWeekDates] = useState<
    { date: string; weekday: string; shortDate: string; minPrice: number }[]
  >([]);

  useEffect(() => {
    if (!searchParams) return;
    const dateBase = isReturn ? searchParams.returnDate! : searchParams.date;
    const origin = isReturn ? searchParams.to : searchParams.from;
    const dest = isReturn ? searchParams.from : searchParams.to;

    getTripDatePrices(origin, dest, dateBase, 7).then((prices) => {
      const formatted = prices.map((p) => ({
        date: p.date,
        weekday: formatWeekdayLabel(p.date),
        shortDate: formatShortDate(p.date),
        minPrice: p.minPrice,
      }));
      setWeekDates(formatted);
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
