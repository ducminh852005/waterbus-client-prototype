import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-primary-container text-surface-variant pt-16 pb-12 border-t border-outline-variant/15">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-surface-container-highest/20">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg overflow-hidden bg-surface-container-lowest/10 p-1 flex items-center justify-center">
                <img alt="Sông Xanh Water Express Logo" className="h-8 w-auto object-contain" src="/images/asset_a053120a.webp" />
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-lg text-surface font-bold leading-tight">SÔNG XANH</span>
                <span className="font-label-sm text-[9px] tracking-[0.2em] text-on-primary-container uppercase font-semibold">Water Express</span>
              </div>
            </div>
            <p className="font-body-md text-xs sm:text-sm text-surface-variant leading-relaxed max-w-sm">
              Công ty Cổ phần Vận tải Thủy Sông Xanh. Doanh nghiệp tiên phong phát triển mô hình buýt sông du lịch kết hợp giao thông công cộng xanh, bền vững.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-surface font-bold">Liên kết nhanh</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><Link className="hover:text-surface transition-colors" to="/">Trang chủ</Link></li>
              <li><Link className="hover:text-surface transition-colors" to="/search">Đặt vé</Link></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-surface font-bold">Tổng Đài Hỗ Trợ</h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <div>
                <span className="block text-surface-variant text-[11px]">Hotline đặt vé & CSKH:</span>
                <span className="text-secondary-fixed text-lg font-bold">1900 6868</span>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-surface-variant/70">
          <p>© 2025 Sông Xanh Water Express. Toàn bộ bản quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
