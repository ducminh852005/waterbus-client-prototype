import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { useBookingSearch } from '../hooks/useBookingSearch';
import type { StationCode } from '../types';
const Home = () => {
  const navigate = useNavigate();
  const { from, setFrom, to, setTo, date, setDate, handleSearch, stations, tripType, setTripType } = useBookingSearch();

  return (
    <>
      

<Header />

<main className="w-full pt-20">

<section className="relative w-full min-h-[700px] lg:h-[860px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Tàu catamaran cao cấp Sông Xanh lướt trên sông Sài Gòn lúc hoàng hôn vàng rực rỡ" className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out" src="/images/asset_f96cbb30.webp" />
<div className="absolute inset-0 bg-gradient-to-r from-primary-container/95 via-primary-container/65 to-primary-container/20"></div>
<div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-primary/40"></div>
</div>

<div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10 w-full py-16 lg:py-24">
<div className="max-w-2xl text-left space-y-6">
<div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-surface-container-lowest/15 backdrop-blur-md border border-white/20">
<span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></span>
<span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary-fixed">Hành trình du ngoạn chuẩn Boutique</span>
</div>
<h1 className="font-display-lg text-4xl sm:text-5xl lg:text-6xl text-surface leading-[1.12] tracking-tight">
            Thưởng Ngoạn Sài Gòn <br />
<span className="italic font-normal text-tertiary-fixed">Trên Dòng Sông Hoa Lệ</span>
</h1>
<p className="font-body-lg text-base sm:text-lg text-surface-container-high/90 max-w-xl font-light leading-relaxed">
            Kết nối nhịp sống hiện đại giữa các bến cảng lịch sử, chiêm ngưỡng bức tranh skyline tráng lệ và thư thái cảm nhận làn gió mát lành dọc dòng sông Sài Gòn.
          </p>
<div className="pt-3 flex flex-wrap items-center gap-4 sm:gap-6">
<a className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-on-tertiary-container hover:bg-[#c95a28] text-on-tertiary font-label-md text-sm font-semibold uppercase tracking-wider shadow-[0_8px_24px_rgba(226,109,56,0.35)] transition-all transform hover:-translate-y-0.5" href="#dat-ve">
              Khám Phá Hành Trình
            </a>
<a className="inline-flex items-center gap-2 font-body-md text-sm text-surface hover:text-secondary-fixed transition-colors font-medium" href="#lich-trinh">
<span className="">Xem lịch trình tàu</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
</div>
</div>
</section>

<div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 -mt-16 lg:-mt-24 mb-16" id="dat-ve">
<div className="bg-surface-container-lowest rounded-2xl shadow-[0_20px_50px_rgba(8,43,58,0.12)] border border-outline-variant/20 p-6 lg:p-8 backdrop-blur-md">

<div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-surface-container-highest">
<div className="inline-flex p-1 bg-surface-container-low rounded-xl">
<button type="button" onClick={() => setTripType('one-way')} className={`px-5 py-2 rounded-lg text-xs sm:text-sm transition-all ${tripType === 'one-way' ? 'bg-surface-container-lowest text-primary font-semibold shadow-sm' : 'text-on-surface-variant hover:text-on-surface font-medium'}`}>Một chiều</button>
<button type="button" onClick={() => setTripType('round-trip')} className={`px-5 py-2 rounded-lg text-xs sm:text-sm transition-all ${tripType === 'round-trip' ? 'bg-surface-container-lowest text-primary font-semibold shadow-sm' : 'text-on-surface-variant hover:text-on-surface font-medium'}`}>Khứ hồi</button>
<button type="button" onClick={() => setTripType('charter')} className={`px-5 py-2 rounded-lg text-xs sm:text-sm transition-all ${tripType === 'charter' ? 'bg-surface-container-lowest text-primary font-semibold shadow-sm' : 'text-on-surface-variant hover:text-on-surface font-medium'}`}>Thuê nguyên tàu (Charter)</button>
</div>
<div className="flex items-center gap-2 text-secondary text-xs sm:text-sm font-medium">
<span className="material-symbols-outlined text-[18px] text-secondary">verified_user</span>
<span className="">Đặt chỗ trực tuyến &amp; Nhận vé điện tử tức thì</span>
</div>
</div>

{tripType === 'charter' ? (
  <form className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5 pt-6 items-end" onSubmit={(e) => { e.preventDefault(); alert('Yêu cầu thuê tàu của bạn đã được tiếp nhận. Đội ngũ Sông Xanh sẽ liên hệ với bạn trong 30 phút!'); }}>
    <div className="col-span-1">
      <label className="block text-xs uppercase tracking-wider text-outline font-semibold mb-1.5">Tên liên hệ</label>
      <input className="w-full bg-surface-container-low rounded-xl px-4 h-[46px] border border-outline-variant/30 text-sm focus:outline-none focus:border-secondary" placeholder="Vd: Nguyễn Văn A" required type="text" />
    </div>
    <div className="col-span-1">
      <label className="block text-xs uppercase tracking-wider text-outline font-semibold mb-1.5">Số điện thoại</label>
      <input className="w-full bg-surface-container-low rounded-xl px-4 h-[46px] border border-outline-variant/30 text-sm focus:outline-none focus:border-secondary" placeholder="0901 234 567" required type="tel" />
    </div>
    <div className="col-span-1">
      <label className="block text-xs uppercase tracking-wider text-outline font-semibold mb-1.5">Quy mô (Số khách)</label>
      <select className="w-full bg-surface-container-low rounded-xl px-4 h-[46px] border border-outline-variant/30 text-sm focus:outline-none focus:border-secondary text-on-surface cursor-pointer">
        <option>Dưới 20 khách (Cano)</option>
        <option>20 - 50 khách (Du thuyền nhỏ)</option>
        <option>Trên 50 khách (Catamaran lớn)</option>
      </select>
    </div>
    <div className="sm:col-span-3">
      <button className="w-full h-[46px] inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-secondary text-on-primary font-semibold text-sm uppercase tracking-wider shadow-md transition-all" type="submit">
        <span className="material-symbols-outlined text-[20px]">send</span>
        <span className="">Nhận Báo Giá & Tư Vấn Ngay</span>
      </button>
    </div>
  </form>
) : (
<form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5 pt-6 items-end" onSubmit={handleSearch}>

<div className="lg:col-span-3">
<label className="block text-xs uppercase tracking-wider text-outline font-semibold mb-1.5">Bến xuất phát</label>
<div className="relative flex items-center bg-surface-container-low rounded-xl px-3.5 py-3 border border-outline-variant/30 hover:border-secondary transition-colors cursor-pointer">
<span className="material-symbols-outlined text-secondary text-[20px] mr-2.5">trip_origin</span>
<select 
  className="w-full bg-transparent text-sm font-semibold text-on-surface focus:outline-none cursor-pointer"
  value={from}
  onChange={(e) => setFrom(e.target.value as StationCode)}
>
  {stations.map(station => (
    <option key={`from-${station.code}`} value={station.code}>{station.name}</option>
  ))}
</select>
</div>
</div>

<div className="lg:col-span-3">
<label className="block text-xs uppercase tracking-wider text-outline font-semibold mb-1.5">Bến đến</label>
<div className="relative flex items-center bg-surface-container-low rounded-xl px-3.5 py-3 border border-outline-variant/30 hover:border-secondary transition-colors cursor-pointer">
<span className="material-symbols-outlined text-on-tertiary-container text-[20px] mr-2.5">location_on</span>
<select 
  className="w-full bg-transparent text-sm font-semibold text-on-surface focus:outline-none cursor-pointer"
  value={to}
  onChange={(e) => setTo(e.target.value as StationCode)}
>
  {stations.map(station => (
    <option key={`to-${station.code}`} value={station.code}>{station.name}</option>
  ))}
</select>
</div>
</div>

<div className="lg:col-span-3">
<label className="block text-xs uppercase tracking-wider text-outline font-semibold mb-1.5">Ngày khởi hành</label>
<div className="relative flex items-center bg-surface-container-low rounded-xl px-3.5 py-3 border border-outline-variant/30 hover:border-secondary transition-colors">
<span className="material-symbols-outlined text-outline text-[20px] mr-2.5">calendar_month</span>
<input 
  className="w-full bg-transparent text-sm font-semibold text-on-surface focus:outline-none cursor-pointer" 
  type="date" 
  value={date}
  onChange={(e) => setDate(e.target.value)}
/>
</div>
</div>

<div className="lg:col-span-3">
<button className="w-full h-[46px] inline-flex items-center justify-center gap-2 rounded-xl bg-on-tertiary-container hover:bg-[#c95a28] text-on-tertiary font-semibold text-sm uppercase tracking-wider shadow-[0_4px_16px_rgba(226,109,56,0.3)] transition-all" type="submit">
<span className="material-symbols-outlined text-[20px]">search</span>
<span className="">Tìm Chuyến Tàu</span>
</button>
</div>
</form>
)}

<div className="mt-4 pt-4 border-t border-surface-container-highest/60 flex flex-wrap items-center gap-2 text-xs text-outline">
<span className="font-medium text-on-surface-variant">Tuyến gợi ý hôm nay:</span>
<button type="button" onClick={() => { setFrom('BD'); setTo('TD'); }} className="px-2.5 py-1 rounded-full bg-surface-container text-secondary hover:bg-secondary-container transition-colors">Bạch Đằng ⇄ Thảo Điền (15.000đ)</button>
<button type="button" onClick={() => { setFrom('BD'); setTo('BA'); }} className="px-2.5 py-1 rounded-full bg-surface-container text-secondary hover:bg-secondary-container transition-colors">Bạch Đằng ⇄ Bình An (15.000đ)</button>
<button type="button" onClick={() => { setFrom('BD'); setTo('BA'); }} className="px-2.5 py-1 rounded-full bg-surface-container text-secondary hover:bg-secondary-container transition-colors">Chuyến Ngắm Hoàng Hôn Sunset Express (17:30)</button>
</div>
</div>
</div>

<section className="w-full py-20 bg-surface" id="trai-nghiem">
<div className="max-w-7xl mx-auto px-5 lg:px-10">
<div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
<span className="text-xs uppercase tracking-[0.25em] font-semibold text-secondary">Phong Cách Di Chuyển Mới</span>
<h2 className="font-headline-lg text-3xl sm:text-4xl text-primary font-normal">
            Triết Lý Di Chuyển Thảnh Thơi
          </h2>
<p className="font-body-md text-on-surface-variant leading-relaxed text-sm sm:text-base">
            Mỗi chuyến tàu Sông Xanh không chỉ là phương tiện di chuyển, mà là một khoảng lặng cân bằng cảm xúc giữa nhịp chảy hối hả của đại đô thị Sài Gòn.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/20 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
<div className="w-14 h-14 rounded-xl bg-secondary-fixed/50 text-secondary flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-[30px]">commute</span>
</div>
<h3 className="font-headline-sm text-xl text-primary font-semibold mb-3">Thoát Khỏi Kẹt Xe Đô Thị</h3>
<p className="font-body-md text-sm text-on-surface-variant leading-relaxed mb-4">
              Không còi xe inh ỏi, không khói bụi ùn tắc giờ cao điểm. Lộ trình trên mặt nước thông suốt, đúng giờ tuyệt đối và êm dịu từng hải lý.
            </p>
<div className="text-xs font-semibold text-secondary flex items-center gap-1">
<span className="">Đúng giờ chuẩn xác 99.8%</span>
<span className="material-symbols-outlined text-[16px]">check_circle</span>
</div>
</div>

<div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/20 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
<div className="w-14 h-14 rounded-xl bg-tertiary-fixed text-on-tertiary-container flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-[30px]">panorama</span>
</div>
<h3 className="font-headline-sm text-xl text-primary font-semibold mb-3">Tầm Nhìn Sông Nước 360°</h3>
<p className="font-body-md text-sm text-on-surface-variant leading-relaxed mb-4">
              Thiết kế cửa kính panorama kịch trần cùng boong tàu mở khoáng đạt, mở ra toàn cảnh công viên bờ sông, cầu Ba Son và tòa tháp Landmark 81 vươn mây.
            </p>
<div className="text-xs font-semibold text-on-tertiary-container flex items-center gap-1">
<span className="">Boong ngắm cảnh mở đón gió mát tự nhiên</span>
<span className="material-symbols-outlined text-[16px]">sparkles</span>
</div>
</div>

<div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/20 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
<div className="w-14 h-14 rounded-xl bg-primary-fixed text-primary flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-[30px]">shield_with_heart</span>
</div>
<h3 className="font-headline-sm text-xl text-primary font-semibold mb-3">Chuẩn Mực An Toàn Châu Âu</h3>
<p className="font-body-md text-sm text-on-surface-variant leading-relaxed mb-4">
              Hệ thân tàu hai thân catamaran giảm rung lắc sóng sông tối đa, trang bị đầy đủ áo phao thông minh, hệ thống định vị GPS và đội ngũ thủy thủ giàu kinh nghiệm.
            </p>
<div className="text-xs font-semibold text-primary flex items-center gap-1">
<span className="">Đạt tiêu chuẩn an toàn hàng hải quốc gia</span>
<span className="material-symbols-outlined text-[16px]">verified</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-20 bg-surface-container-low" id="lich-trinh">
<div className="max-w-7xl mx-auto px-5 lg:px-10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<span className="text-xs uppercase tracking-[0.25em] font-semibold text-secondary block mb-2">Hành Trình Được Tuyển Chọn</span>
<h2 className="font-headline-lg text-3xl sm:text-4xl text-primary">Các Tuyến Đường Sông Nổi Bật</h2>
</div>
<p className="font-body-md text-sm text-on-surface-variant max-w-md">
            Giá vé minh bạch, tần suất đều đặn từ 07:00 sáng đến 20:30 tối hàng ngày. Kết nối những điểm đến đáng sống nhất thành phố.
          </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group border border-outline-variant/20">
<div className="relative h-60 overflow-hidden">
<img alt="Toàn cảnh sông Sài Gòn và bán đảo Thảo Điền rợp bóng mát ven sông" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/images/asset_e38850f3.webp" />
<div className="absolute top-4 left-4 bg-primary-container/85 backdrop-blur-md px-3 py-1 rounded-md text-surface text-xs font-semibold uppercase">
                Tuyến Văn Hóa Sáng Tạo
              </div>
<div className="absolute bottom-3 right-3 bg-surface-container-lowest/90 backdrop-blur-sm px-2.5 py-1 rounded text-primary text-xs font-bold">
                20 phút di chuyển
              </div>
</div>
<div className="p-6 flex-1 flex flex-col justify-between space-y-4">
<div>
<div className="flex items-center justify-between mb-2">
<h3 className="font-title-md text-lg font-bold text-primary">Bạch Đằng → Thảo Điền</h3>
<span className="text-lg font-bold text-secondary">15.000đ</span>
</div>
<p className="font-body-md text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Lộ trình di chuyển lý tưởng đến khu phố nghệ thuật Thảo Điền, quy tụ nhiều tiệm bánh thủ công, cà phê ngắm hoàng hôn và phòng trưng bày nghệ thuật độc đáo.
                </p>
</div>
<div className="pt-2 border-t border-surface-container-highest flex items-center justify-between text-xs">
<span className="text-outline">Tần suất: 30 phút / chuyến</span>
<button type="button" onClick={() => { setFrom('BD'); setTo('TD'); window.location.hash = 'dat-ve'; }} className="font-semibold text-secondary hover:text-primary inline-flex items-center gap-1 cursor-pointer">
                  Đặt vé ngay <span className="material-symbols-outlined text-[16px]">east</span>
</button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0_16px_36px_rgba(8,43,58,0.1)] transition-all duration-300 flex flex-col group border-2 border-secondary/40 relative">
<div className="absolute top-3 right-3 z-10 bg-on-tertiary-container text-on-tertiary text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
              Yêu thích nhất
            </div>
<div className="relative h-60 overflow-hidden">
<img alt="Góc nhìn tòa tháp Landmark 81 từ bến tàu Bình An" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/images/asset_f96cbb30.webp" />
<div className="absolute top-4 left-4 bg-primary-container/85 backdrop-blur-md px-3 py-1 rounded-md text-surface text-xs font-semibold uppercase">
                Góc Ngắm Skyline Đẹp Nhất
              </div>
<div className="absolute bottom-3 right-3 bg-surface-container-lowest/90 backdrop-blur-sm px-2.5 py-1 rounded text-primary text-xs font-bold">
                15 phút hành trình
              </div>
</div>
<div className="p-6 flex-1 flex flex-col justify-between space-y-4">
<div>
<div className="flex items-center justify-between mb-2">
<h3 className="font-title-md text-lg font-bold text-primary">Bạch Đằng → Bình An</h3>
<span className="text-lg font-bold text-on-tertiary-container">15.000đ</span>
</div>
<p className="font-body-md text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Ngắm nhìn toàn cảnh công viên Central Park và tòa tháp Landmark 81 sừng sững bên sông. Bến tàu Bình An có quán cà phê ven sông lộng gió nổi tiếng.
                </p>
</div>
<div className="pt-2 border-t border-surface-container-highest flex items-center justify-between text-xs">
<span className="text-outline">Tần suất: 20 phút / chuyến</span>
<button type="button" onClick={() => { setFrom('BD'); setTo('BA'); window.location.hash = 'dat-ve'; }} className="font-bold text-on-tertiary-container hover:text-tertiary inline-flex items-center gap-1 cursor-pointer">
                  Đặt vé ngay <span className="material-symbols-outlined text-[16px]">east</span>
</button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group border border-outline-variant/20">
<div className="relative h-60 overflow-hidden">
<img alt="Khung cảnh đêm lấp lánh trên hành trình đường sông Sài Gòn" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/images/night-view.webp" />
<div className="absolute top-4 left-4 bg-primary-container/85 backdrop-blur-md px-3 py-1 rounded-md text-surface text-xs font-semibold uppercase">
                Toàn Tuyến Khám Phá
              </div>
<div className="absolute bottom-3 right-3 bg-surface-container-lowest/90 backdrop-blur-sm px-2.5 py-1 rounded text-primary text-xs font-bold">
                52 phút trải nghiệm
              </div>
</div>
<div className="p-6 flex-1 flex flex-col justify-between space-y-4">
<div>
<div className="flex items-center justify-between mb-2">
<h3 className="font-title-md text-lg font-bold text-primary">Bạch Đằng → Linh Đông</h3>
<span className="text-lg font-bold text-secondary">15.000đ</span>
</div>
<p className="font-body-md text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Hành trình 10.8 km xuyên qua 7 bến đón, chuyển đổi từ trung tâm cao ốc sang vùng bán đảo Thanh Đa xanh tươi thanh bình rợp bóng cây ăn quả.
                </p>
</div>
<div className="pt-2 border-t border-surface-container-highest flex items-center justify-between text-xs">
<span className="text-outline">Tần suất: 45 phút / chuyến</span>
<button type="button" onClick={() => { setFrom('BD'); setTo('LD'); window.location.hash = 'dat-ve'; }} className="font-semibold text-secondary hover:text-primary inline-flex items-center gap-1 cursor-pointer">
                  Đặt vé ngay <span className="material-symbols-outlined text-[16px]">east</span>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-20 bg-surface" id="ben-tau">
<div className="max-w-7xl mx-auto px-5 lg:px-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-7 space-y-4">
<div className="relative rounded-2xl overflow-hidden shadow-[0_20px_45px_rgba(8,43,58,0.12)] border border-outline-variant/30">
<img alt="Ga tàu thủy Bạch Đằng Waterbus Station với sàn gỗ rộng mở nhìn ra bến cảng trung tâm Sài Gòn" className="w-full h-[420px] sm:h-[480px] object-cover" src="/images/asset_7fa6197d.webp" />
<div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent p-6 text-surface">
<span className="text-xs uppercase tracking-widest text-secondary-fixed font-semibold block mb-1">Ga Trung Tâm • Quận 1</span>
<h4 className="font-headline-sm text-xl sm:text-2xl text-surface">Bến Tàu Thủy Bạch Đằng</h4>
<p className="text-xs sm:text-sm text-surface-container-high/90 mt-1">Sàn gỗ ngắm cảnh ngoài trời, phòng vé số hóa, cafe specialty và lối tản bộ kết nối trực tiếp Phố đi bộ Nguyễn Huệ.</p>
</div>
</div>

<div className="grid grid-cols-3 gap-4 pt-2">
<div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/20 text-center">
<span className="font-headline-sm text-xl font-bold text-primary block">07</span>
<span className="text-xs text-outline font-medium">Bến đang hoạt động</span>
</div>
<div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/20 text-center">
<span className="font-headline-sm text-xl font-bold text-secondary block">100%</span>
<span className="text-xs text-outline font-medium">Tiện ích không rào cản</span>
</div>
<div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/20 text-center">
<span className="font-headline-sm text-xl font-bold text-on-tertiary-container block">Wi-Fi &amp; Cafe</span>
<span className="text-xs text-outline font-medium">Phục vụ tại mỗi bến</span>
</div>
</div>
</div>

<div className="lg:col-span-5 space-y-6">
<div>
<span className="text-xs uppercase tracking-[0.25em] font-semibold text-secondary block mb-2">Mạng Lưới Bến Đón Khách</span>
<h2 className="font-headline-lg text-3xl text-primary font-normal leading-snug">
                Hệ Thống Bến Tàu <br />Di Sản &amp; Hiện Đại
              </h2>
<p className="font-body-md text-sm text-on-surface-variant mt-3 leading-relaxed">
                Mỗi bến tàu của Sông Xanh được quy hoạch như một công viên bỏ túi bên sông, nơi bạn có thể nhâm nhi ly cà phê sáng hoặc đón gió chiều trước giờ tàu cập bến.
              </p>
</div>

<div className="space-y-3">

<div className="p-4 rounded-xl bg-surface-container-lowest border-l-4 border-secondary shadow-sm flex items-center justify-between">
<div>
<h4 className="font-title-md text-sm font-bold text-primary">1. Bến Ga Bạch Đằng</h4>
<p className="text-xs text-outline">Số 10B Tôn Đức Thắng, P. Bến Nghé, Quận 1</p>
</div>
<span className="px-2.5 py-1 rounded bg-secondary-container text-on-secondary-container text-[11px] font-semibold">Ga Trung Tâm</span>
</div>

<div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/20 hover:border-secondary/40 transition-colors flex items-center justify-between">
<div>
<h4 className="font-title-md text-sm font-semibold text-primary">2. Bến Cầu Ba Son</h4>
<p className="text-xs text-outline">Khu phức hợp Ba Son, Tôn Đức Thắng, Quận 1</p>
</div>
<span className="text-xs text-outline">Kết nối Metro số 1</span>
</div>

<div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/20 hover:border-secondary/40 transition-colors flex items-center justify-between">
<div>
<h4 className="font-title-md text-sm font-semibold text-primary">3. Bến Bình An</h4>
<p className="text-xs text-outline">Đường số 21, Phường Bình An, TP. Thủ Đức</p>
</div>
<span className="text-xs text-outline">View Landmark 81</span>
</div>

<div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/20 hover:border-secondary/40 transition-colors flex items-center justify-between">
<div>
<h4 className="font-title-md text-sm font-semibold text-primary">4. Bến Thảo Điền</h4>
<p className="text-xs text-outline">Đường Nguyễn Văn Hưởng, P. Thảo Điền, TP. Thủ Đức</p>
</div>
<span className="text-xs text-outline">Khu nghệ thuật ẩm thực</span>
</div>
</div>
<div>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-primary transition-colors" href="#so-do-ben">
<span className="">Xem bản đồ chi tiết và hướng dẫn di chuyển</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-20 bg-primary-container text-surface" id="cam-nang">
<div className="max-w-7xl mx-auto px-5 lg:px-10">
<div className="relative rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.35)]">

<div className="relative h-[480px] lg:h-[540px] w-full">
<img alt="Đêm Sài Gòn rực rỡ ánh đèn từ sông nước với du thuyền sang trọng" className="w-full h-full object-cover" src="/images/night-view.webp" />
<div className="absolute inset-0 bg-gradient-to-r from-primary-container/95 via-primary-container/70 to-primary-container/30"></div>
<div className="absolute inset-0 bg-gradient-to-t from-primary-container via-transparent to-transparent"></div>
</div>

<div className="absolute inset-0 flex items-center">
<div className="p-8 sm:p-12 lg:p-16 max-w-2xl space-y-6">
<span className="text-xs uppercase tracking-[0.25em] font-semibold text-secondary-fixed block">Cẩm Nang Tuyển Chọn</span>
<h2 className="font-display-lg text-3xl sm:text-4xl lg:text-5xl text-surface leading-tight font-normal">
                Khám Phá Sài Gòn <br />
<span className="italic text-tertiary-fixed font-light">Khi Thành Phố Lên Đèn</span>
</h2>
<p className="font-body-md text-sm sm:text-base text-surface-container-high/90 leading-relaxed font-light">
                Khi ánh hoàng hôn tắt dần, đường chân trời Sài Gòn bừng sáng với hàng vạn ánh đèn lấp lánh phản chiếu xuống mặt nước. Tận hưởng không khí mát lành cùng âm nhạc acoustic dịu nhẹ trên chuyến tàu Sunset Cruise lúc 17:30.
              </p>
<div className="pt-2 flex flex-wrap items-center gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-on-tertiary-container hover:bg-[#c95a28] text-on-tertiary font-label-md text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg transition-all" href="#dat-ve">
                  Đặt Chuyến Hoàng Hôn
                </a>
<a className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-surface hover:text-secondary-fixed transition-colors" href="#bai-viet-cam-nang">
<span className="">Đọc bài viết hướng dẫn</span>
<span className="material-symbols-outlined text-[16px]">open_in_new</span>
</a>
</div>

<div className="pt-4 border-t border-surface/15 flex items-center gap-4 text-xs text-surface-variant">
<div className="flex items-center gap-1 text-secondary-fixed">
<span className="material-symbols-outlined text-[18px]">wb_twilight</span>
<span className="font-semibold">Khung giờ đẹp nhất:</span>
</div>
<span className="">17:15 - 18:45 hàng ngày tại Bến Bạch Đằng &amp; Bình An</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-20 bg-surface-container-lowest border-y border-outline-variant/20">
<div className="max-w-7xl mx-auto px-5 lg:px-10">
<div className="bg-surface-container-low rounded-3xl p-8 sm:p-12 lg:p-16 border border-outline-variant/20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
<div className="lg:col-span-7 space-y-4">
<span className="text-xs uppercase tracking-[0.25em] font-semibold text-on-tertiary-container block">Chương Trình Tri Ân</span>
<h2 className="font-headline-lg text-3xl sm:text-4xl text-primary font-normal">
              Gia Nhập Sông Xanh Club
            </h2>
<p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Trở thành hội viên để tích lũy hải lý trên mỗi hành trình, đổi vé miễn phí cho người thân, nhận đặc quyền ưu tiên lên tàu và giảm 15% tại toàn bộ chuỗi cà phê đối tác tại các bến tàu.
            </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-secondary text-[22px]">loyalty</span>
<div>
<h4 className="font-semibold text-sm text-primary">Tích Hải Lý Đổi Vé</h4>
<p className="text-xs text-on-surface-variant">Mỗi 10 chuyến tặng ngay 1 vé du ngoạn miễn phí</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-secondary text-[22px]">airline_seat_recline_extra</span>
<div>
<h4 className="font-semibold text-sm text-primary">Chọn Chỗ Ngồi Đẹp</h4>
<p className="text-xs text-on-surface-variant">Ưu tiên đặt trước ghế boong ngắm cảnh độc quyền</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-5 bg-surface-container-lowest p-6 sm:p-8 rounded-2xl border border-outline-variant/30 shadow-md">
<h3 className="font-title-md text-lg font-bold text-primary mb-1">Đăng ký nhận ưu đãi</h3>
<p className="text-xs text-on-surface-variant mb-6">Nhận ngay mã giảm 20% cho chuyến đi đầu tiên trong tuần này.</p>
<form className="space-y-4">
<div>
<label className="block text-xs uppercase tracking-wider text-outline font-semibold mb-1">Họ &amp; Tên</label>
<input className="w-full bg-surface-container-low px-4 py-2.5 rounded-lg border border-outline-variant/30 text-sm focus:outline-none focus:border-secondary" placeholder="Nguyễn Văn A" type="text" />
</div>
<div>
<label className="block text-xs uppercase tracking-wider text-outline font-semibold mb-1">Số điện thoại hoặc Email</label>
<input className="w-full bg-surface-container-low px-4 py-2.5 rounded-lg border border-outline-variant/30 text-sm focus:outline-none focus:border-secondary" placeholder="0901 234 567 / name@email.com" type="text" />
</div>
<button onClick={() => navigate('/register')} className="w-full py-3 rounded-lg bg-primary hover:bg-secondary text-on-primary font-semibold text-xs uppercase tracking-wider transition-colors shadow-sm" type="button">
                Đăng Ký Thành Viên Ngay
              </button>
</form>
<p className="text-[11px] text-outline text-center mt-3">Cam kết bảo mật thông tin theo tiêu chuẩn quốc gia.</p>
</div>
</div>
</div>
</section>
</main>

<Footer />



    </>
  );
};

export default Home;
