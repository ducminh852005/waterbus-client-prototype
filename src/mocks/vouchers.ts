import type { Voucher } from '../types';

export const VOUCHERS: Voucher[] = [
  { code: 'GIAM10', description: 'Giảm 10% giá vé đường sông', discountPercent: 10 },
];

export function findVoucher(code: string) {
  return VOUCHERS.find((v) => v.code.toLowerCase() === code.trim().toLowerCase());
}
