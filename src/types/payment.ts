export type PaymentMethodId = 'vnpay' | 'momo' | 'zalopay' | 'napas' | 'credit';

export interface PaymentMethod {
  id: PaymentMethodId;
  name: string;
  description: string;
  badge?: string;
  tags?: string[];
}
