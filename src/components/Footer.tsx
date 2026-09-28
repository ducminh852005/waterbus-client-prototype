import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary-container text-surface-variant border-outline-variant/15 w-full border-t pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="border-surface-container-highest/20 grid grid-cols-1 gap-10 border-b pb-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="bg-surface-container-lowest/10 flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg p-1">
                <img
                  alt="Sông Xanh Water Express Logo"
                  className="h-8 w-auto object-contain"
                  src="/images/asset_a053120a.webp"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-surface text-lg leading-tight font-bold">
                  SÔNG XANH
                </span>
                <span className="font-label-sm text-on-primary-container text-[9px] font-semibold tracking-[0.2em] uppercase">
                  Water Express
                </span>
              </div>
            </div>
            <p className="font-body-md text-surface-variant max-w-sm text-xs leading-relaxed sm:text-sm">
              Công ty Cổ phần Vận tải Thủy Sông Xanh. Doanh nghiệp tiên phong phát triển mô hình
              buýt sông du lịch kết hợp giao thông công cộng xanh, bền vững.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="text-surface text-xs font-bold tracking-widest uppercase">
              Liên kết nhanh
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link className="hover:text-surface transition-colors" to="/">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link className="hover:text-surface transition-colors" to="/search">
                  Đặt vé
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-surface text-xs font-bold tracking-widest uppercase">
              Tổng Đài Hỗ Trợ
            </h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <div>
                <span className="text-surface-variant block text-[11px]">
                  Hotline đặt vé & CSKH:
                </span>
                <span className="text-secondary-fixed text-lg font-bold">1900 6868</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-surface-variant/70 flex flex-col items-center justify-between gap-4 pt-8 text-xs sm:flex-row">
          <p>© 2025 Sông Xanh Water Express. Toàn bộ bản quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
