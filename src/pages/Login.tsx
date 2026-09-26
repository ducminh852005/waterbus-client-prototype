import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
const Login = () => {
  return (
    <>
      <Header /><main className="w-full pt-20 bg-surface min-h-[calc(100vh-320px)]"><div className="flex flex-col w-full">
<section className="w-full py-space-lg lg:py-space-xl px-margin-mobile lg:px-margin flex justify-center items-center">
<div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 rounded-xl overflow-hidden shadow-xl bg-surface-container-lowest">

<div className="lg:col-span-5 relative flex flex-col justify-between p-space-lg lg:p-space-xl text-on-primary min-h-[520px] lg:min-h-[720px] bg-primary-container overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Nhóm du khách thư thái ngắm nhìn hoàng hôn rực rỡ trên boong tàu Sông Xanh Water Express, phía sau là đường chân trời sông Sài Gòn" className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out hover:scale-100" src="/images/asset_8b2a22d4.webp" />
<div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/70 to-primary-container/30"></div>
<div className="absolute inset-0 bg-secondary/20 mix-blend-multiply"></div>
</div>

<div className="relative z-10 flex items-center justify-between">
<div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container-lowest/20 backdrop-blur-md">
<span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></span>
<span className="font-label-sm text-label-sm tracking-widest uppercase text-surface-bright">Thành Viên Sông Xanh Club</span>
</div>
<span className="font-label-sm text-label-sm text-surface-dim/80 tracking-widest uppercase">Est. 2024</span>
</div>

<div className="relative z-10 my-auto py-space-lg">
<span className="material-symbols-outlined text-secondary-fixed text-4xl mb-space-sm opacity-80">format_quote</span>
<h2 className="font-headline-md text-headline-md lg:text-headline-lg font-normal leading-tight tracking-tight text-on-primary mb-space-md">
            Hành trình di chuyển thảnh thơi, kết nối từng bến bờ Sài Gòn.
          </h2>
<p className="font-body-md text-body-md text-surface-container-high/90 max-w-sm">
            Trải nghiệm ngắm trọn vẹn nhịp sống đô thị hoa lệ bên dòng sông uốn lượn cùng dịch vụ hàng hải tinh tế chuẩn mực.
          </p>
</div>

<div className="relative z-10 pt-space-md bg-primary-container/60 backdrop-blur-md p-space-md rounded-lg">
<div className="grid grid-cols-2 gap-y-3 gap-x-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-fixed text-[18px]">verified</span>
<span className="font-label-sm text-label-sm text-surface-bright leading-tight">Tích dặm thưởng</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-fixed text-[18px]">airplane_ticket</span>
<span className="font-label-sm text-label-sm text-surface-bright leading-tight">Tra cứu vé tức thì</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-fixed text-[18px]">update</span>
<span className="font-label-sm text-label-sm text-surface-bright leading-tight">Đổi chuyến 60 giây</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-fixed text-[18px]">loyalty</span>
<span className="font-label-sm text-label-sm text-surface-bright leading-tight">Ưu đãi hoàng hôn</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 p-space-lg lg:p-space-xl flex flex-col justify-between bg-surface-container-lowest">

<div className="space-y-space-xs mb-space-md">
<div className="flex items-center gap-2">
<span className="w-6 h-[2px] bg-secondary"></span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">Chào Mừng Trở Lại</span>
</div>
<h1 className="font-headline-lg text-headline-md lg:text-headline-lg text-primary tracking-tight">
            Đăng Nhập Tài Khoản
          </h1>
<p className="font-body-md text-body-md text-on-surface-variant">
            Tiếp tục hành trình khám phá và quản lý vé tàu đường sông của bạn.
          </p>
</div>

<form className="space-y-space-md" id="loginForm" onSubmit={(e) => e.preventDefault()}>

<div className="space-y-1">
<label className="block font-label-md text-label-md text-on-surface uppercase tracking-wider" htmlFor="identifier">
              Email hoặc Số điện thoại
            </label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-space-md text-outline pointer-events-none text-[20px]">
                alternate_email
              </span>
<input className="w-full pl-11 pr-space-md py-3 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline-variant focus:outline-none focus:bg-surface-container-lowest focus:shadow-[0_0_0_2px_#006a65] transition-all" id="identifier" placeholder="nguyenvanan@email.com hoặc 0908 123 456" required type="text" />
</div>
</div>

<div className="space-y-1">
<div className="flex items-center justify-between">
<label className="block font-label-md text-label-md text-on-surface uppercase tracking-wider" htmlFor="password">
                Mật khẩu
              </label>
<a className="font-label-sm text-label-sm text-secondary hover:text-primary transition-colors font-medium" data-path="quen-mat-khau" href="#">
                Quên mật khẩu?
              </a>
</div>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-space-md text-outline pointer-events-none text-[20px]">
                lock
              </span>
<input className="w-full pl-11 pr-12 py-3 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline-variant focus:outline-none focus:bg-surface-container-lowest focus:shadow-[0_0_0_2px_#006a65] transition-all" id="password" placeholder="Nhập mật khẩu của bạn" required type="password" />
<button aria-label="Ẩn hiện mật khẩu" className="absolute right-space-md p-1 text-outline hover:text-on-surface focus:outline-none transition-colors" id="togglePasswordBtn" onClick={() => {}} type="button">
<span className="material-symbols-outlined text-[20px]" id="pwdEyeIcon">visibility</span>
</button>
</div>
</div>

<div className="flex items-center justify-between pt-1">
<label className="flex items-center gap-space-xs cursor-pointer select-none">
<input className="w-4 h-4 rounded text-secondary accent-secondary focus:ring-0 cursor-pointer" id="rememberDevice" type="checkbox" />
<span className="font-body-md text-body-md text-on-surface-variant">Ghi nhớ đăng nhập trên thiết bị này</span>
</label>
</div>

<button className="w-full py-space-sm px-space-md rounded-lg bg-on-tertiary-container hover:bg-[#c95a28] text-on-tertiary font-title-md text-title-md tracking-wide shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all transform active:scale-[0.99]" type="submit">
<span className="">Đăng Nhập Ngay</span>
<span className="material-symbols-outlined text-[20px]">arrow_forward</span>
</button>
</form>

<div className="my-space-md">
<div className="relative flex items-center justify-center">
<div className="w-full h-[1px] bg-surface-variant"></div>
<span className="absolute bg-surface-container-lowest px-space-sm font-label-sm text-label-sm text-outline uppercase tracking-wider">
              hoặc đăng nhập nhanh với
            </span>
</div>
<div className="mt-space-md">
<button className="w-full flex items-center justify-center gap-3 py-3 px-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container border border-outline-variant/30 hover:border-outline-variant/60 transition-all shadow-sm" title="Đăng nhập bằng Google" type="button">
<svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
<path d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" fill="#4285F4"></path>
<path d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z" fill="#34A853"></path>
<path d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z" fill="#FBBC05"></path>
<path d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" fill="#EA4335"></path>
</svg>
<span className="font-label-md text-label-md text-on-surface font-medium">Tiếp tục với Google</span>
</button>
</div>
</div>

<div className="pt-space-md border-t border-surface-variant/40 space-y-space-sm text-center">
<p className="font-body-md text-body-md text-on-surface-variant">
            Chưa có tài khoản? 
            <Link className="font-title-md text-body-md text-secondary hover:text-primary font-semibold transition-colors" data-path="dang-ky" to="/register">
              Đăng ký thành viên mới
            </Link>
</p>

<div className="py-2.5 px-space-md rounded-lg bg-surface-container-low flex items-center justify-between gap-space-sm text-left hover:bg-surface-container transition-colors">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[20px]">directions_boat</span>
<div>
<p className="font-label-md text-label-md text-on-surface font-semibold">Cần mua vé gấp trong hôm nay?</p>
<p className="font-label-sm text-label-sm text-outline">Không cần tài khoản thành viên</p>
</div>
</div>
<Link className="px-space-sm py-1 rounded bg-surface-container-lowest hover:bg-secondary hover:text-on-secondary text-secondary font-label-md text-label-md font-semibold transition-all shadow-sm" data-path="dat-ve" to="/search">
              Mua vé nhanh →
            </Link>
</div>

<div className="pt-1 flex items-center justify-center gap-1.5 text-outline">
<span className="material-symbols-outlined text-[15px] text-secondary">lock</span>
<span className="font-label-sm text-[11px] uppercase tracking-wider">Bảo mật thông tin chuẩn mã hóa SSL 256-bit</span>
</div>
</div>
</div>
</div>
</section>
</div>
</main><Footer />


    </>
  );
};

export default Login;
