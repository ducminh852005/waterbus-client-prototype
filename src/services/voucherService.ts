import type { Voucher } from '../types';
import { findVoucher } from '../mocks';
import { delay } from './delay';

export async function applyVoucher(code: string): Promise<Voucher> {
  const voucher = findVoucher(code);
  if (!voucher) {
    await delay(null, 300);
    throw new Error('Mã giảm giá không hợp lệ hoặc đã hết hạn.');
  }
  return delay(voucher, 300);
}
