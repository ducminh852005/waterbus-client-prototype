import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-primary-container/95 backdrop-blur-md border-b border-outline-variant/15 shadow-[0_4px_20px_rgba(0,21,32,0.18)]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 h-20 flex items-center justify-between">
        <Link className="flex items-center gap-3 group focus:outline-none" to="/">
          <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-surface-container-lowest/10 p-1 group-hover:scale-105 transition-transform duration-200">
            <img alt="Sông Xanh Water Express Logo" className="h-8 w-auto object-contain" src="/images/asset_a053120a.webp" />
          </div>
          <div className="flex flex-col">
            <span className="font-headline-sm text-[19px] tracking-wide text-surface font-bold leading-tight group-hover:text-secondary-fixed transition-colors">SÔNG XANH</span>
            <span className="font-label-sm text-[10px] tracking-[0.2em] text-on-primary-container font-semibold uppercase">Water Express</span>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-8 text-[15px]">
          <Link className="font-body-md font-semibold text-surface hover:text-secondary-fixed transition-colors py-1" to="/">Trang chủ</Link>
          <a className="font-body-md font-medium text-surface-variant hover:text-surface transition-colors py-1" href="/#lich-trinh">Lịch trình</a>
          <a className="font-body-md font-medium text-surface-variant hover:text-surface transition-colors py-1" href="/#ben-tau">Bến tàu</a>
          <Link className="font-body-md font-medium text-secondary-fixed hover:text-secondary transition-colors py-1 flex items-center gap-1" to="/live">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
            Tàu trực tuyến
          </Link>
        </nav>
        <div className="flex items-center gap-4 sm:gap-6">
          <a className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-surface-variant hover:text-surface transition-colors" href="/search">
            <span className="material-symbols-outlined text-[18px]">search</span>
            Tra cứu vé
          </a>
          <a className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-on-tertiary-container hover:bg-[#c95a28] text-on-tertiary font-label-md text-xs font-bold uppercase tracking-wider shadow-sm transition-all" href="/search">
            ĐẶT VÉ
          </a>
          <Link className="w-9 h-9 rounded-full bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 border border-outline-variant/20 flex items-center justify-center text-surface transition-colors" to="/login">
            <span className="material-symbols-outlined text-[20px]">person</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
