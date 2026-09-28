import type { Seat, Voucher, PriceBreakdown } from '../types';

export function computeSubtotal(seats: Seat[]): number {
  return seats.reduce((sum, seat) => sum + seat.price, 0);
}

export function applyVoucher(subtotal: number, voucher: Voucher | null): PriceBreakdown {
  if (!voucher) {
    return { subtotal, voucherDiscount: 0, total: subtotal };
  }
  const discount = voucher.discountPercent
    ? Math.round((subtotal * voucher.discountPercent) / 100)
    : (voucher.discountAmount ?? 0);
  return {
    subtotal,
    voucherDiscount: discount,
    total: Math.max(subtotal - discount, 0),
    voucherCode: voucher.code,
  };
}

export function formatVnd(amount: number): string {
  return `${amount.toLocaleString('vi-VN')}đ`;
}
