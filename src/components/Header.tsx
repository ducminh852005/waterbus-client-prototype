import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-primary-container/95 border-outline-variant/15 fixed inset-x-0 top-0 z-50 border-b shadow-[0_4px_20px_rgba(0,21,32,0.18)] backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-10">
        <Link className="group flex items-center gap-3 focus:outline-none" to="/">
          <div className="bg-surface-container-lowest/10 flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg p-1 transition-transform duration-200 group-hover:scale-105">
            <img
              alt="Sông Xanh Water Express Logo"
              className="h-8 w-auto object-contain"
              src="/images/asset_a053120a.webp"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-headline-sm text-surface group-hover:text-secondary-fixed text-[19px] leading-tight font-bold tracking-wide transition-colors">
              SÔNG XANH
            </span>
            <span className="font-label-sm text-on-primary-container text-[10px] font-semibold tracking-[0.2em] uppercase">
              Water Express
            </span>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 text-[15px] lg:flex">
          <Link
            className="font-body-md text-surface hover:text-secondary-fixed py-1 font-semibold transition-colors"
            to="/"
          >
            Trang chủ
          </Link>
          <a
            className="font-body-md text-surface-variant hover:text-surface py-1 font-medium transition-colors"
            href="/#lich-trinh"
          >
            Lịch trình
          </a>
          <a
            className="font-body-md text-surface-variant hover:text-surface py-1 font-medium transition-colors"
            href="/#ben-tau"
          >
            Bến tàu
          </a>
          <Link
            className="font-body-md text-secondary-fixed hover:text-secondary flex items-center gap-1 py-1 font-medium transition-colors"
            to="/live"
          >
            <span className="bg-secondary h-1.5 w-1.5 animate-pulse rounded-full"></span>
            Tàu trực tuyến
          </Link>
        </nav>
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            className="text-surface-variant hover:text-surface hidden items-center gap-1 text-sm font-medium transition-colors md:inline-flex"
            href="/search"
          >
            <span className="material-symbols-outlined text-[18px]">search</span>
            Tra cứu vé
          </a>
          <a
            className="bg-on-tertiary-container text-on-tertiary font-label-md inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-xs font-bold tracking-wider uppercase shadow-sm transition-all hover:bg-[#c95a28]"
            href="/search"
          >
            ĐẶT VÉ
          </a>
          <Link
            className="bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 border-outline-variant/20 text-surface flex h-9 w-9 items-center justify-center rounded-full border transition-colors"
            to="/login"
          >
            <span className="material-symbols-outlined text-[20px]">person</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
