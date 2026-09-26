import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import type { PaymentMethodId, Voucher } from '../types';
import { applyVoucher, createBooking } from '../services';
import { computeSubtotal, applyVoucher as applyVoucherToSubtotal } from '../utils/pricing';
import { useCountdown } from './useCountdown';

export function usePayment() {
  const navigate = useNavigate();
  const { bookingData, updateBooking } = useBooking();
  const { selectedTrip, selectedReturnTrip, selectedSeats, selectedReturnSeats, passengerInfo } = bookingData;

  const [method, setMethod] = useState<PaymentMethodId>('vnpay');
  const [voucherCode, setVoucherCode] = useState('');
  const [appliedVoucher, setAppliedVoucher] = useState<Voucher | null>(null);
  const [voucherError, setVoucherError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const countdown = useCountdown(150);

  useEffect(() => {
    if (!selectedTrip || selectedSeats.length === 0 || !passengerInfo) {
      navigate('/trips');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTrip, selectedSeats.length, passengerInfo]);

  const subtotal = useMemo(() => computeSubtotal([...selectedSeats, ...(selectedReturnSeats || [])]), [selectedSeats, selectedReturnSeats]);
  const priceBreakdown = useMemo(
    () => applyVoucherToSubtotal(subtotal, appliedVoucher),
    [subtotal, appliedVoucher],
  );

  const applyVoucherCode = async () => {
    if (!voucherCode.trim()) return;
    try {
      const voucher = await applyVoucher(voucherCode);
      setAppliedVoucher(voucher);
      setVoucherError(null);
    } catch (err) {
      setAppliedVoucher(null);
      setVoucherError(err instanceof Error ? err.message : 'Không thể áp dụng mã.');
    }
  };

  const removeVoucher = () => {
    setAppliedVoucher(null);
    setVoucherCode('');
    setVoucherError(null);
  };

  const submit = async () => {
    if (!selectedTrip || !passengerInfo || submitting) return;
    setSubmitting(true);
    try {
      const confirmation = await createBooking({
        trip: selectedTrip,
        returnTrip: selectedReturnTrip || undefined,
        seats: selectedSeats,
        returnSeats: selectedReturnSeats.length > 0 ? selectedReturnSeats : undefined,
        passengerInfo,
        paymentMethod: method,
        priceBreakdown,
      });
      updateBooking({ bookingConfirmation: confirmation, paymentMethod: method, voucher: appliedVoucher });
      navigate('/success');
    } finally {
      setSubmitting(false);
    }
  };

  return {
    selectedTrip,
    selectedReturnTrip,
    selectedSeats,
    selectedReturnSeats,
    method,
    setMethod,
    voucherCode,
    setVoucherCode,
    appliedVoucher,
    voucherError,
    applyVoucherCode,
    removeVoucher,
    priceBreakdown,
    submitting,
    submit,
    countdown,
  };
}
