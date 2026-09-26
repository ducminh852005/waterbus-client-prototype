import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
const Register = () => {
  return (
    <>
      <Header /><main className="w-full pt-20 bg-surface min-h-[calc(100vh-320px)]"><div className="flex flex-col w-full">
<div className="w-full bg-surface-container-low py-space-lg lg:py-space-xl px-margin-mobile lg:px-margin">
<div className="max-w-7xl mx-auto">

<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
<Link className="hover:text-primary transition-colors" data-path="trang-chu" to="/">Trang chủ</Link>
<span className="text-outline-variant">/</span>
<span className="text-primary font-semibold">Tạo tài khoản Hội viên</span>
</div>
<div className="hidden sm:flex items-center gap-2 text-label-sm font-label-sm text-secondary bg-surface-container px-3 py-1 rounded-full">
<span className="material-symbols-outlined text-[15px]" >verified_user</span>
<span className="">Bảo vệ quyền lợi hành khách trực tuyến</span>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 rounded-xl overflow-hidden shadow-xl bg-surface-container-lowest">

<div className="lg:col-span-5 relative flex flex-col justify-between text-on-primary p-space-lg lg:p-space-xl overflow-hidden min-h-[640px] bg-primary">

<div className="absolute inset-0 bg-cover bg-center z-0 opacity-40 scale-105 transition-transform duration-1000 ease-out hover:scale-100" data-alt="Modern boutique river bus cruise boat gliding on Saigon River at golden hour sunset, Bitexco Financial Tower and sparkling urban skyline reflected across glistening dark emerald and copper ripples. Warm cinematic editorial lighting, deep navy hues and amber glow." ></div>
<div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/60 z-0"></div>

<div className="relative z-10 space-y-space-md">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-lowest/15 backdrop-blur-md">
<span className="w-2 h-2 rounded-full bg-secondary-fixed animate-ping"></span>
<span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-widest font-semibold">Đặc quyền sông nước</span>
</div>
<div className="space-y-space-xs">
<h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-surface-bright leading-tight">
                Trở thành Hội viên<br /><span className="italic font-normal text-secondary-fixed">Sông Xanh Express</span>
</h2>
<p className="font-body-md text-body-md text-on-primary-container max-w-sm">
                Khám phá phong cách thưởng ngoạn Sài Gòn độc bản từ dòng sông hoa lệ với những ưu đãi đặc quyền thiết kế riêng.
              </p>
</div>

<div className="pt-space-md space-y-space-md">
<div className="flex items-start gap-space-sm group">
<div className="w-9 h-9 rounded-lg bg-surface-container-lowest/10 backdrop-blur-md flex items-center justify-center shrink-0 text-secondary-fixed group-hover:bg-secondary group-hover:text-on-secondary transition-all">
<span className="material-symbols-outlined text-[20px]">stars</span>
</div>
<div>
<p className="font-title-md text-body-lg text-on-primary font-semibold">Tặng ngay 50 Điểm Thưởng Sông Xanh</p>
<p className="font-body-md text-label-md text-on-primary-container/85">Cộng trực tiếp vào ví hội viên ngay sau khi kích hoạt thành công.</p>
</div>
</div>
<div className="flex items-start gap-space-sm group">
<div className="w-9 h-9 rounded-lg bg-surface-container-lowest/10 backdrop-blur-md flex items-center justify-center shrink-0 text-secondary-fixed group-hover:bg-secondary group-hover:text-on-secondary transition-all">
<span className="material-symbols-outlined text-[20px]">wb_twilight</span>
</div>
<div>
<p className="font-title-md text-body-lg text-on-primary font-semibold">Giảm 10% cho chuyến tàu hoàng hôn</p>
<p className="font-body-md text-label-md text-on-primary-container/85">Áp dụng cho mọi tuyến ngắm cảnh Bitexco &amp; Landmark 81.</p>
</div>
</div>
<div className="flex items-start gap-space-sm group">
<div className="w-9 h-9 rounded-lg bg-surface-container-lowest/10 backdrop-blur-md flex items-center justify-center shrink-0 text-secondary-fixed group-hover:bg-secondary group-hover:text-on-secondary transition-all">
<span className="material-symbols-outlined text-[20px]">qr_code_2</span>
</div>
<div>
<p className="font-title-md text-body-lg text-on-primary font-semibold">Vé điện tử QR tập trung &amp; liền mạch</p>
<p className="font-body-md text-label-md text-on-primary-container/85">Soát vé không chạm tại cầu cảng, không lo thất lạc vé giấy.</p>
</div>
</div>
<div className="flex items-start gap-space-sm group">
<div className="w-9 h-9 rounded-lg bg-surface-container-lowest/10 backdrop-blur-md flex items-center justify-center shrink-0 text-secondary-fixed group-hover:bg-secondary group-hover:text-on-secondary transition-all">
<span className="material-symbols-outlined text-[20px]">airline_seat_recline_extra</span>
</div>
<div>
<p className="font-title-md text-body-lg text-on-primary font-semibold">Ưu tiên chọn vị trí khoang Panorama</p>
<p className="font-body-md text-label-md text-on-primary-container/85">Giữ chỗ trước khu vực mạn thuyền thoáng đãng và ngắm cảnh trọn vẹn.</p>
</div>
</div>
<div className="flex items-start gap-space-sm group">
<div className="w-9 h-9 rounded-lg bg-surface-container-lowest/10 backdrop-blur-md flex items-center justify-center shrink-0 text-secondary-fixed group-hover:bg-secondary group-hover:text-on-secondary transition-all">
<span className="material-symbols-outlined text-[20px]">update</span>
</div>
<div>
<p className="font-title-md text-body-lg text-on-primary font-semibold">Đổi giờ tàu miễn phí trước 60 phút</p>
<p className="font-body-md text-label-md text-on-primary-container/85">Linh hoạt thích ứng cùng nhịp điệu công việc và sinh hoạt đô thị.</p>
</div>
</div>
</div>
</div>

<div className="relative z-10 pt-space-lg">
<div className="p-space-md rounded-xl bg-surface-container-lowest/10 backdrop-blur-md flex items-center justify-between">
<div>
<p className="font-headline-sm text-title-md text-surface-bright">180,000+</p>
<p className="font-label-sm text-label-sm text-on-primary-container uppercase tracking-wider">Hành khách tin cậy mỗi năm</p>
</div>
<div className="flex items-center gap-1 text-secondary-fixed">
<span className="material-symbols-outlined text-[18px]" >star</span>
<span className="material-symbols-outlined text-[18px]" >star</span>
<span className="material-symbols-outlined text-[18px]" >star</span>
<span className="material-symbols-outlined text-[18px]" >star</span>
<span className="material-symbols-outlined text-[18px]" >star</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 p-space-lg lg:p-space-xl flex flex-col justify-between bg-surface-container-lowest">
<div>

<div className="mb-space-lg">
<span className="font-label-sm text-label-sm tracking-widest uppercase font-semibold text-secondary block mb-1">Thành viên mới</span>
<h1 className="font-headline-lg text-headline-md lg:text-headline-lg text-primary tracking-tight mb-2">Tạo Tài Khoản Mới</h1>
<p className="font-body-md text-body-md text-on-surface-variant">Chỉ mất 30 giây để bắt đầu trải nghiệm dịch vụ vận tải đường sông cao cấp và tiện ích vé thông minh.</p>
</div>

<form className="space-y-space-md" id="registrationForm" onSubmit={(e) => e.preventDefault()}>

<div>
<label className="block font-label-md text-label-md uppercase tracking-wider text-on-surface mb-1" htmlFor="fullName">Họ và tên đầy đủ <span className="text-error">*</span></label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant text-[20px]">person</span>
<input className="w-full pl-10 pr-4 py-3 bg-surface rounded-lg text-body-md text-on-surface placeholder:text-outline/50 focus:bg-surface-container-lowest focus:outline-none transition-colors" id="fullName" name="fullName" placeholder="Nguyễn Văn An" required type="text" />
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div>
<label className="block font-label-md text-label-md uppercase tracking-wider text-on-surface mb-1" htmlFor="phone">Số điện thoại di động <span className="text-error">*</span></label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant text-[20px]">call</span>
<input className="w-full pl-10 pr-4 py-3 bg-surface rounded-lg text-body-md text-on-surface placeholder:text-outline/50 focus:bg-surface-container-lowest focus:outline-none transition-colors" id="phone" name="phone" placeholder="0908 123 456" required type="tel" />
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant/70 mt-1 block">Nhận mã OTP &amp; thông báo chuyến khẩn cấp</span>
</div>
<div>
<label className="block font-label-md text-label-md uppercase tracking-wider text-on-surface mb-1" htmlFor="email">Địa chỉ Email <span className="text-error">*</span></label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant text-[20px]">mail</span>
<input className="w-full pl-10 pr-4 py-3 bg-surface rounded-lg text-body-md text-on-surface placeholder:text-outline/50 focus:bg-surface-container-lowest focus:outline-none transition-colors" id="email" name="email" placeholder="nguyenvanan@email.com" required type="email" />
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant/70 mt-1 block">Nhận hóa đơn điện tử &amp; tệp vé PDF</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div>
<div className="flex items-center justify-between mb-1">
<label className="font-label-md text-label-md uppercase tracking-wider text-on-surface" htmlFor="password">Mật khẩu <span className="text-error">*</span></label>
</div>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant text-[20px]">lock</span>
<input className="w-full pl-10 pr-10 py-3 bg-surface rounded-lg text-body-md text-on-surface placeholder:text-outline/50 focus:bg-surface-container-lowest focus:outline-none transition-colors" id="password" name="password" onInput={() => {}} placeholder="Tối thiểu 8 ký tự" required type="password" />
<button className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors" onClick={() => {}} type="button">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
</div>

<div className="mt-2 space-y-1">
<div className="grid grid-cols-4 gap-1 h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
<div className="h-full bg-surface-container-highest transition-colors" id="bar1"></div>
<div className="h-full bg-surface-container-highest transition-colors" id="bar2"></div>
<div className="h-full bg-surface-container-highest transition-colors" id="bar3"></div>
<div className="h-full bg-surface-container-highest transition-colors" id="bar4"></div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant/80 block" id="strengthText">Độ mạnh: Tối thiểu 8 ký tự, gồm chữ và số</span>
</div>
</div>
<div>
<label className="block font-label-md text-label-md uppercase tracking-wider text-on-surface mb-1" htmlFor="confirmPassword">Xác nhận mật khẩu <span className="text-error">*</span></label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant text-[20px]">lock_reset</span>
<input className="w-full pl-10 pr-10 py-3 bg-surface rounded-lg text-body-md text-on-surface placeholder:text-outline/50 focus:bg-surface-container-lowest focus:outline-none transition-colors" id="confirmPassword" name="confirmPassword" onInput={() => {}} placeholder="Nhập lại mật khẩu" required type="password" />
<button className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors" onClick={() => {}} type="button">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant/70 mt-1 block" id="matchFeedback">Khớp đúng với mật khẩu đã nhập</span>
</div>
</div>

<div className="space-y- space-xs pt-2">
<label className="flex items-start gap-3 cursor-pointer group">
<input checked className="mt-1 w-4 h-4 rounded text-secondary accent-secondary focus:ring-0 cursor-pointer" id="termConsent" required type="checkbox" />
<span className="font-body-md text-body-md text-on-surface">
                    Tôi đồng ý với <a className="text-secondary font-semibold hover:underline" data-path="dieu-khoan-su-dung" href="#">Điều khoản dịch vụ</a> và <a className="text-secondary font-semibold hover:underline" data-path="chinh-sach-bao-mat" href="#">Chính sách bảo mật</a> của Sông Xanh Water Express.
                  </span>
</label>
<label className="flex items-start gap-3 cursor-pointer group">
<input checked className="mt-1 w-4 h-4 rounded text-secondary accent-secondary focus:ring-0 cursor-pointer" id="promoConsent" type="checkbox" />
<span className="font-body-md text-body-md text-on-surface-variant">
                    Nhận thông báo lịch trình sớm, khuyến mãi vé tàu hoàng hôn và cẩm nang sông nước qua Email &amp; Zalo.
                  </span>
</label>
</div>

<div className="pt-2">
<button className="w-full py-3.5 px-space-md rounded-lg bg-on-tertiary-container hover:bg-tertiary-container text-on-tertiary font-label-md text-title-md uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg active:scale-[0.99]" type="submit">
<span className="">ĐĂNG KÝ TÀI KHOẢN</span>
<span className="material-symbols-outlined text-[20px]">arrow_forward</span>
</button>
</div>
</form>

<div className="relative my-space-lg text-center">
<div className="absolute inset-0 flex items-center">
<div className="w-full bg-surface-container-high h-[1px]"></div>
</div>
<div className="relative inline-block px-4 bg-surface-container-lowest font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                hoặc đăng ký nhanh bằng
              </div>
</div>

<div className="grid grid-cols-3 gap-space-sm">
<button className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-surface hover:bg-surface-container transition-colors text-on-surface font-label-md text-label-md" type="button">
<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
<path d="M12.24 10.285V13.4h6.887C18.2 16.543 15.645 18.8 12.24 18.8c-3.755 0-6.8-3.045-6.8-6.8s3.045-6.8 6.8-6.8c1.7 0 3.24.63 4.43 1.675l2.42-2.42C17.59 2.925 15.08 2 12.24 2 6.7 2 2.2 6.5 2.2 12.04s4.5 10.04 10.04 10.04c5.78 0 9.6-4.06 9.6-9.77 0-.66-.07-1.3-.2-1.925H12.24z"></path>
</svg>
<span className="">Google</span>
</button>
<button className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-surface hover:bg-surface-container transition-colors text-on-surface font-label-md text-label-md" type="button">
<span className="font-headline-sm text-title-md leading-none text-secondary">Z</span>
<span className="">Zalo</span>
</button>
<button className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-surface hover:bg-surface-container transition-colors text-on-surface font-label-md text-label-md" type="button">
<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
<path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.84c.62-.75 1.04-1.79.93-2.84-.9.04-2 .6-2.65 1.36-.58.67-.99 1.74-.85 2.77 1 .08 1.95-.54 2.57-1.29z"></path>
</svg>
<span className="">Apple</span>
</button>
</div>
</div>

<div className="mt-space-lg pt-space-md space-y-space-sm">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
<p className="font-body-md text-body-md text-on-surface-variant">
                Đã có tài khoản Hội viên? 
                <Link className="text-secondary font-semibold hover:underline" data-path="16_login---dang-nhap-tai-khoan" to="/login">Đăng nhập ngay</Link>
</p>
<a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1" data-path="cau-hoi-thuong-gap" href="#">
<span className="material-symbols-outlined text-[16px]">help</span>
<span className="">Cần trợ giúp đăng ký?</span>
</a>
</div>
<div className="p-2.5 rounded bg-surface-container flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant/80">
<span className="material-symbols-outlined text-secondary text-[16px]">security</span>
<span className="">Cam kết bảo mật dữ liệu hành khách theo chuẩn Nghị định 13/2023/NĐ-CP của Chính phủ.</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md mt-space-lg">
<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-secondary-fixed/50 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[20px]">directions_boat</span>
</div>
<div>
<p className="font-title-md text-label-md uppercase tracking-wider text-primary font-semibold">Tàu chuẩn Châu Âu</p>
<p className="font-body-md text-label-sm text-on-surface-variant">Điều hòa, phao cứu sinh tự động, ngắm cảnh 360°</p>
</div>
</div>
<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-secondary-fixed/50 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[20px]">schedule</span>
</div>
<div>
<p className="font-title-md text-label-md uppercase tracking-wider text-primary font-semibold">Khởi hành đúng giờ</p>
<p className="font-body-md text-label-sm text-on-surface-variant">Hơn 48 chuyến mỗi ngày giữa Bạch Đằng &amp; Thủ Đức</p>
</div>
</div>
<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-secondary-fixed/50 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[20px]">confirmation_number</span>
</div>
<div>
<p className="font-title-md text-label-md uppercase tracking-wider text-primary font-semibold">Hoàn hủy minh bạch</p>
<p className="font-body-md text-label-sm text-on-surface-variant">Thao tác tự động ngay trong ứng dụng hội viên</p>
</div>
</div>
</div>
</div>
</div>
</div>
</main><Footer />


    </>
  );
};

export default Register;
