import type { PaymentMethod } from '../types';
import { PAYMENT_METHODS } from '../mocks';
import { delay } from './delay';

export function listPaymentMethods(): Promise<PaymentMethod[]> {
  return delay(PAYMENT_METHODS, 150);
}

export function listPaymentMethodsSync(): PaymentMethod[] {
  return PAYMENT_METHODS;
}
