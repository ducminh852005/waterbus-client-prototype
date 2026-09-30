import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual login logic
    navigate('/');
  };

  return (
    <>
      <Header />
      <main className="bg-surface min-h-[calc(100vh-320px)] w-full pt-20">
        <div className="flex w-full flex-col">
          <section className="py-space-lg lg:py-space-xl px-margin-mobile lg:px-margin flex w-full items-center justify-center">
            <div className="bg-surface-container-lowest grid w-full max-w-6xl grid-cols-1 overflow-hidden rounded-xl shadow-xl lg:grid-cols-12">
              <div className="p-space-lg lg:p-space-xl text-on-primary bg-primary-container relative flex min-h-[520px] flex-col justify-between overflow-hidden lg:col-span-5 lg:min-h-[720px]">
                <div className="absolute inset-0 z-0">
                  <img
                    alt="Sông Xanh Water Express"
                    className="h-full w-full scale-105 transform object-cover object-center transition-transform duration-1000 ease-out hover:scale-100"
                    src="https://images.unsplash.com/photo-1542301980-60b64188b7f8?q=80&w=800"
                  />
                  <div className="from-primary-container via-primary-container/70 to-primary-container/30 absolute inset-0 bg-gradient-to-t"></div>
                  <div className="bg-secondary/20 absolute inset-0 mix-blend-multiply"></div>
                </div>

                <div className="relative z-10 flex items-center justify-between">
                  <div className="gap-space-xs px-space-sm bg-surface-container-lowest/20 inline-flex items-center rounded-full py-1 backdrop-blur-md">
                    <span className="bg-secondary-fixed h-2 w-2 animate-pulse rounded-full"></span>
                    <span className="font-label-sm text-label-sm text-surface-bright tracking-widest uppercase">
                      Thành Viên Sông Xanh Club
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm text-surface-dim/80 tracking-widest uppercase">
                    Est. 2024
                  </span>
                </div>

                <div className="py-space-lg relative z-10 my-auto">
                  <span className="material-symbols-outlined text-secondary-fixed mb-space-sm text-4xl opacity-80">
                    format_quote
                  </span>
                  <h2 className="font-headline-md text-headline-md lg:text-headline-lg text-on-primary mb-space-md leading-tight font-normal tracking-tight">
                    Hành trình di chuyển thảnh thơi, kết nối từng bến bờ Sài Gòn.
                  </h2>
                  <p className="font-body-md text-body-md text-surface-container-high/90 max-w-sm">
                    Trải nghiệm ngắm trọn vẹn nhịp sống đô thị hoa lệ bên dòng sông uốn lượn cùng
                    dịch vụ hàng hải tinh tế chuẩn mực.
                  </p>
                </div>

                <div className="pt-space-md bg-primary-container/60 p-space-md relative z-10 rounded-lg backdrop-blur-md">
                  <div className="grid grid-cols-2 gap-x-2 gap-y-3">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                        verified
                      </span>
                      <span className="font-label-sm text-label-sm text-surface-bright leading-tight">
                        Tích dặm thưởng
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                        airplane_ticket
                      </span>
                      <span className="font-label-sm text-label-sm text-surface-bright leading-tight">
                        Tra cứu vé tức thì
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                        update
                      </span>
                      <span className="font-label-sm text-label-sm text-surface-bright leading-tight">
                        Đổi chuyến 60 giây
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                        loyalty
                      </span>
                      <span className="font-label-sm text-label-sm text-surface-bright leading-tight">
                        Ưu đãi hoàng hôn
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-space-lg lg:p-space-xl bg-surface-container-lowest flex flex-col justify-between lg:col-span-7">
                <div className="space-y-space-xs mb-space-md">
                  <div className="flex items-center gap-2">
                    <span className="bg-secondary h-[2px] w-6"></span>
                    <span className="font-label-sm text-label-sm text-secondary font-semibold tracking-widest uppercase">
                      Chào Mừng Trở Lại
                    </span>
                  </div>
                  <h1 className="font-headline-lg text-headline-md lg:text-headline-lg text-primary tracking-tight">
                    Đăng Nhập Tài Khoản
                  </h1>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Tiếp tục hành trình khám phá và quản lý vé tàu đường sông của bạn.
                  </p>
                </div>

                <form className="space-y-space-md" id="loginForm" onSubmit={handleSubmit}>
                  <div className="space-y-1">
                    <label
                      className="font-label-md text-label-md text-on-surface block tracking-wider uppercase"
                      htmlFor="identifier"
                    >
                      Email hoặc Số điện thoại
                    </label>
                    <div className="relative flex items-center">
                      <span className="material-symbols-outlined left-space-md text-outline pointer-events-none absolute text-[20px]">
                        alternate_email
                      </span>
                      <input
                        className="pr-space-md bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline-variant focus:bg-surface-container-lowest w-full rounded-lg py-3 pl-11 transition-all focus:shadow-[0_0_0_2px_#006a65] focus:outline-none"
                        id="identifier"
                        placeholder="nguyenvanan@email.com hoặc 0908 123 456"
                        required
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <label
                        className="font-label-md text-label-md text-on-surface block tracking-wider uppercase"
                        htmlFor="password"
                      >
                        Mật khẩu
                      </label>
                      <a
                        className="font-label-sm text-label-sm text-secondary hover:text-primary font-medium transition-colors"
                        data-path="quen-mat-khau"
                        href="#"
                      >
                        Quên mật khẩu?
                      </a>
                    </div>
                    <div className="relative flex items-center">
                      <span className="material-symbols-outlined left-space-md text-outline pointer-events-none absolute text-[20px]">
                        lock
                      </span>
                      <input
                        className="bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline-variant focus:bg-surface-container-lowest w-full rounded-lg py-3 pr-12 pl-11 transition-all focus:shadow-[0_0_0_2px_#006a65] focus:outline-none"
                        id="password"
                        placeholder="Nhập mật khẩu của bạn"
                        required
                        type="password"
                      />
                      <button
                        aria-label="Ẩn hiện mật khẩu"
                        className="right-space-md text-outline hover:text-on-surface absolute p-1 transition-colors focus:outline-none"
                        id="togglePasswordBtn"
                        onClick={() => {}}
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[20px]" id="pwdEyeIcon">
                          visibility
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <label className="gap-space-xs flex cursor-pointer items-center select-none">
                      <input
                        className="text-secondary accent-secondary h-4 w-4 cursor-pointer rounded focus:ring-0"
                        id="rememberDevice"
                        type="checkbox"
                      />
                      <span className="font-body-md text-body-md text-on-surface-variant">
                        Ghi nhớ đăng nhập trên thiết bị này
                      </span>
                    </label>
                  </div>

                  <button
                    className="py-space-sm px-space-md bg-on-tertiary-container text-on-tertiary font-title-md text-title-md flex w-full transform items-center justify-center gap-2 rounded-lg tracking-wide shadow-md transition-all hover:bg-[#c95a28] hover:shadow-lg active:scale-[0.99]"
                    type="submit"
                  >
                    <span className="">Đăng Nhập Ngay</span>
                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                  </button>
                </form>

                <div className="my-space-md">
                  <div className="relative flex items-center justify-center">
                    <div className="bg-surface-variant h-[1px] w-full"></div>
                    <span className="bg-surface-container-lowest px-space-sm font-label-sm text-label-sm text-outline absolute tracking-wider uppercase">
                      hoặc đăng nhập nhanh với
                    </span>
                  </div>
                  <div className="mt-space-md">
                    <button
                      className="px-space-sm bg-surface-container-low hover:bg-surface-container border-outline-variant/30 hover:border-outline-variant/60 flex w-full items-center justify-center gap-3 rounded-lg border py-3 shadow-sm transition-all"
                      title="Đăng nhập bằng Google"
                      type="button"
                    >
                      <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24">
                        <path
                          d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                          fill="#4285F4"
                        ></path>
                        <path
                          d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                          fill="#34A853"
                        ></path>
                        <path
                          d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                          fill="#FBBC05"
                        ></path>
                        <path
                          d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                          fill="#EA4335"
                        ></path>
                      </svg>
                      <span className="font-label-md text-label-md text-on-surface font-medium">
                        Tiếp tục với Google
                      </span>
                    </button>
                  </div>
                </div>

                <div className="pt-space-md border-surface-variant/40 space-y-space-sm border-t text-center">
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Chưa có tài khoản?
                    <Link
                      className="font-title-md text-body-md text-secondary hover:text-primary font-semibold transition-colors"
                      data-path="dang-ky"
                      to="/register"
                    >
                      Đăng ký thành viên mới
                    </Link>
                  </p>

                  <div className="px-space-md bg-surface-container-low gap-space-sm hover:bg-surface-container flex items-center justify-between rounded-lg py-2.5 text-left transition-colors">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        directions_boat
                      </span>
                      <div>
                        <p className="font-label-md text-label-md text-on-surface font-semibold">
                          Cần mua vé gấp trong hôm nay?
                        </p>
                        <p className="font-label-sm text-label-sm text-outline">
                          Không cần tài khoản thành viên
                        </p>
                      </div>
                    </div>
                    <Link
                      className="px-space-sm bg-surface-container-lowest hover:bg-secondary hover:text-on-secondary text-secondary font-label-md text-label-md rounded py-1 font-semibold shadow-sm transition-all"
                      data-path="dat-ve"
                      to="/search"
                    >
                      Mua vé nhanh →
                    </Link>
                  </div>

                  <div className="text-outline flex items-center justify-center gap-1.5 pt-1">
                    <span className="material-symbols-outlined text-secondary text-[15px]">
                      lock
                    </span>
                    <span className="font-label-sm text-[11px] tracking-wider uppercase">
                      Bảo mật thông tin chuẩn mã hóa SSL 256-bit
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Login;
