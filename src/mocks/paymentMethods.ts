import type { PaymentMethod } from '../types';

export const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: 'vnpay',
    name: 'VNPAY-QR',
    description:
      'Quét mã VNPAY-QR trực tiếp qua hơn 40 ứng dụng ngân hàng và ví số liên kết không phí trung gian.',
    badge: 'Khuyên dùng',
    tags: ['Vietcombank', 'BIDV', '+38 App'],
  },
  {
    id: 'momo',
    name: 'Ví MoMo',
    description:
      'Thanh toán siêu tốc trên ứng dụng MoMo, tự động áp mã hoàn tiền & điểm thưởng thành viên.',
    badge: 'Một chạm',
    tags: ['Xử lý ngay'],
  },
  {
    id: 'zalopay',
    name: 'Ví ZaloPay',
    description:
      'Thanh toán nhanh trong 10 giây qua mã QR hoặc trực tiếp từ hệ sinh thái Zalo Chat.',
    tags: ['Liên kết tài khoản Zalo'],
  },
  {
    id: 'napas',
    name: 'Thẻ ATM nội địa / Internet Banking',
    description:
      'Sử dụng tài khoản thẻ ATM hoặc ngân hàng số có hỗ trợ Internet Banking và xác thực OTP.',
    tags: ['Napas'],
  },
  {
    id: 'credit',
    name: 'Thẻ quốc tế (Visa, MasterCard, JCB, Amex)',
    description:
      'Chấp nhận mọi loại thẻ tín dụng & ghi nợ quốc tế phát hành bởi các tổ chức tài chính toàn cầu.',
    tags: ['VISA', 'MC', 'JCB'],
  },
];

export function getPaymentMethodById(id: string) {
  return PAYMENT_METHODS.find((m) => m.id === id);
}
