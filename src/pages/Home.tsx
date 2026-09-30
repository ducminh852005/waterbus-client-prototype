import { useNavigate } from 'react-router-dom';
import { useBookingSearch } from '../hooks/useBookingSearch';
import type { StationCode } from '../types';
import { BookingSearchWidget } from '../components/booking';
const Home = () => {
  const navigate = useNavigate();
  const {
    from,
    setFrom,
    to,
    setTo,
    date,
    setDate,
    handleSearch,
    stations,
    tripType,
    setTripType,
    passengers,
    setPassengers,
  } = useBookingSearch();

  return (
    <>
      <main className="w-full pt-20">
        <section className="relative flex min-h-[700px] w-full items-center justify-center overflow-hidden lg:h-[860px]">
          <div className="absolute inset-0 z-0">
            <img
              alt="Tàu catamaran cao cấp Sông Xanh lướt trên sông Sài Gòn lúc hoàng hôn vàng rực rỡ"
              className="h-full w-full scale-105 object-cover object-center transition-transform duration-1000 ease-out"
              src="/images/asset_f96cbb30.webp"
            />
            <div className="from-primary-container/95 via-primary-container/65 to-primary-container/20 absolute inset-0 bg-gradient-to-r"></div>
            <div className="from-surface to-primary/40 absolute inset-0 bg-gradient-to-t via-transparent"></div>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-16 lg:px-10 lg:py-24">
            <div className="max-w-2xl space-y-6 text-left">
              <div className="bg-surface-container-lowest/15 inline-flex items-center gap-3 rounded-full border border-white/20 px-3 py-1.5 backdrop-blur-md">
                <span className="bg-secondary-fixed h-2 w-2 animate-pulse rounded-full"></span>
                <span className="text-secondary-fixed text-xs font-semibold tracking-[0.2em] uppercase">
                  Hành trình du ngoạn chuẩn Boutique
                </span>
              </div>
              <h1 className="font-display-lg text-surface text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
                Thưởng Ngoạn Sài Gòn <br />
                <span className="text-tertiary-fixed font-normal italic">
                  Trên Dòng Sông Hoa Lệ
                </span>
              </h1>
              <p className="font-body-lg text-surface-container-high/90 max-w-xl text-base leading-relaxed font-light sm:text-lg">
                Kết nối nhịp sống hiện đại giữa các bến cảng lịch sử, chiêm ngưỡng bức tranh skyline
                tráng lệ và thư thái cảm nhận làn gió mát lành dọc dòng sông Sài Gòn.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-3 sm:gap-6">
                <a
                  className="bg-on-tertiary-container text-on-tertiary font-label-md inline-flex transform items-center justify-center rounded-lg px-7 py-3.5 text-sm font-semibold tracking-wider uppercase shadow-[0_8px_24px_rgba(226,109,56,0.35)] transition-all hover:-translate-y-0.5 hover:bg-[#c95a28]"
                  href="#dat-ve"
                >
                  Khám Phá Hành Trình
                </a>
                <a
                  className="font-body-md text-surface hover:text-secondary-fixed inline-flex items-center gap-2 text-sm font-medium transition-colors"
                  href="#lich-trinh"
                >
                  <span className="">Xem lịch trình tàu</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <div
          className="relative z-20 mx-auto -mt-16 mb-16 max-w-5xl px-4 sm:px-6 lg:-mt-24"
          id="dat-ve"
        >
          <BookingSearchWidget />

          <div className="bg-surface-container-lowest/90 border-outline-variant/20 text-outline mx-auto mt-4 flex flex-wrap items-center gap-2 rounded-xl border px-6 py-3 text-xs shadow-sm backdrop-blur-md">
            <span className="text-on-surface-variant font-medium">Tuyến gợi ý hôm nay:</span>
            <button
              type="button"
              onClick={() => {
                setFrom('BD');
                setTo('TD');
              }}
              className="bg-surface-container text-secondary hover:bg-secondary-container rounded-full px-2.5 py-1 transition-colors"
            >
              Bạch Đằng ⇄ Thảo Điền (15.000đ)
            </button>
            <button
              type="button"
              onClick={() => {
                setFrom('BD');
                setTo('BA');
              }}
              className="bg-surface-container text-secondary hover:bg-secondary-container rounded-full px-2.5 py-1 transition-colors"
            >
              Bạch Đằng ⇄ Bình An (15.000đ)
            </button>
            <button
              type="button"
              onClick={() => {
                setFrom('BD');
                setTo('BA');
              }}
              className="bg-surface-container text-secondary hover:bg-secondary-container rounded-full px-2.5 py-1 transition-colors"
            >
              Chuyến Ngắm Hoàng Hôn Sunset Express (17:30)
            </button>
          </div>
        </div>

        <section className="bg-surface w-full py-20" id="trai-nghiem">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <div className="mx-auto mb-16 max-w-2xl space-y-3 text-center">
              <span className="text-secondary text-xs font-semibold tracking-[0.25em] uppercase">
                Phong Cách Di Chuyển Mới
              </span>
              <h2 className="font-headline-lg text-primary text-3xl font-normal sm:text-4xl">
                Triết Lý Di Chuyển Thảnh Thơi
              </h2>
              <p className="font-body-md text-on-surface-variant text-sm leading-relaxed sm:text-base">
                Mỗi chuyến tàu Sông Xanh không chỉ là phương tiện di chuyển, mà là một khoảng lặng
                cân bằng cảm xúc giữa nhịp chảy hối hả của đại đô thị Sài Gòn.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="bg-surface-container-lowest border-outline-variant/20 rounded-2xl border p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="bg-secondary-fixed/50 text-secondary mb-6 flex h-14 w-14 items-center justify-center rounded-xl">
                  <span className="material-symbols-outlined text-[30px]">commute</span>
                </div>
                <h3 className="font-headline-sm text-primary mb-3 text-xl font-semibold">
                  Thoát Khỏi Kẹt Xe Đô Thị
                </h3>
                <p className="font-body-md text-on-surface-variant mb-4 text-sm leading-relaxed">
                  Không còi xe inh ỏi, không khói bụi ùn tắc giờ cao điểm. Lộ trình trên mặt nước
                  thông suốt, đúng giờ tuyệt đối và êm dịu từng hải lý.
                </p>
                <div className="text-secondary flex items-center gap-1 text-xs font-semibold">
                  <span className="">Đúng giờ chuẩn xác 99.8%</span>
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                </div>
              </div>

              <div className="bg-surface-container-lowest border-outline-variant/20 rounded-2xl border p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="bg-tertiary-fixed text-on-tertiary-container mb-6 flex h-14 w-14 items-center justify-center rounded-xl">
                  <span className="material-symbols-outlined text-[30px]">panorama</span>
                </div>
                <h3 className="font-headline-sm text-primary mb-3 text-xl font-semibold">
                  Tầm Nhìn Sông Nước 360°
                </h3>
                <p className="font-body-md text-on-surface-variant mb-4 text-sm leading-relaxed">
                  Thiết kế cửa kính panorama kịch trần cùng boong tàu mở khoáng đạt, mở ra toàn cảnh
                  công viên bờ sông, cầu Ba Son và tòa tháp Landmark 81 vươn mây.
                </p>
                <div className="text-on-tertiary-container flex items-center gap-1 text-xs font-semibold">
                  <span className="">Boong ngắm cảnh mở đón gió mát tự nhiên</span>
                  <span className="material-symbols-outlined text-[16px]">sparkles</span>
                </div>
              </div>

              <div className="bg-surface-container-lowest border-outline-variant/20 rounded-2xl border p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="bg-primary-fixed text-primary mb-6 flex h-14 w-14 items-center justify-center rounded-xl">
                  <span className="material-symbols-outlined text-[30px]">shield_with_heart</span>
                </div>
                <h3 className="font-headline-sm text-primary mb-3 text-xl font-semibold">
                  Chuẩn Mực An Toàn Châu Âu
                </h3>
                <p className="font-body-md text-on-surface-variant mb-4 text-sm leading-relaxed">
                  Hệ thân tàu hai thân catamaran giảm rung lắc sóng sông tối đa, trang bị đầy đủ áo
                  phao thông minh, hệ thống định vị GPS và đội ngũ thủy thủ giàu kinh nghiệm.
                </p>
                <div className="text-primary flex items-center gap-1 text-xs font-semibold">
                  <span className="">Đạt tiêu chuẩn an toàn hàng hải quốc gia</span>
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low w-full py-20" id="lich-trinh">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <span className="text-secondary mb-2 block text-xs font-semibold tracking-[0.25em] uppercase">
                  Hành Trình Được Tuyển Chọn
                </span>
                <h2 className="font-headline-lg text-primary text-3xl sm:text-4xl">
                  Các Tuyến Đường Sông Nổi Bật
                </h2>
              </div>
              <p className="font-body-md text-on-surface-variant max-w-md text-sm">
                Giá vé minh bạch, tần suất đều đặn từ 07:00 sáng đến 20:30 tối hàng ngày. Kết nối
                những điểm đến đáng sống nhất thành phố.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="bg-surface-container-lowest group border-outline-variant/20 flex flex-col overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 hover:shadow-xl">
                <div className="relative h-60 overflow-hidden">
                  <img
                    alt="Toàn cảnh sông Sài Gòn và bán đảo Thảo Điền rợp bóng mát ven sông"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="/images/asset_e38850f3.webp"
                  />
                  <div className="bg-primary-container/85 text-surface absolute top-4 left-4 rounded-md px-3 py-1 text-xs font-semibold uppercase backdrop-blur-md">
                    Tuyến Văn Hóa Sáng Tạo
                  </div>
                  <div className="bg-surface-container-lowest/90 text-primary absolute right-3 bottom-3 rounded px-2.5 py-1 text-xs font-bold backdrop-blur-sm">
                    20 phút di chuyển
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between space-y-4 p-6">
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-title-md text-primary text-lg font-bold">
                        Bạch Đằng → Thảo Điền
                      </h3>
                      <span className="text-secondary text-lg font-bold">15.000đ</span>
                    </div>
                    <p className="font-body-md text-on-surface-variant text-xs leading-relaxed sm:text-sm">
                      Lộ trình di chuyển lý tưởng đến khu phố nghệ thuật Thảo Điền, quy tụ nhiều
                      tiệm bánh thủ công, cà phê ngắm hoàng hôn và phòng trưng bày nghệ thuật độc
                      đáo.
                    </p>
                  </div>
                  <div className="border-surface-container-highest flex items-center justify-between border-t pt-2 text-xs">
                    <span className="text-outline">Tần suất: 30 phút / chuyến</span>
                    <button
                      type="button"
                      onClick={() => {
                        setFrom('BD');
                        setTo('TD');
                        window.location.hash = 'dat-ve';
                      }}
                      className="text-secondary hover:text-primary inline-flex cursor-pointer items-center gap-1 font-semibold"
                    >
                      Đặt vé ngay{' '}
                      <span className="material-symbols-outlined text-[16px]">east</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-lowest group border-secondary/40 relative flex flex-col overflow-hidden rounded-2xl border-2 shadow-[0_16px_36px_rgba(8,43,58,0.1)] transition-all duration-300">
                <div className="bg-on-tertiary-container text-on-tertiary absolute top-3 right-3 z-10 rounded-full px-3 py-1 text-[11px] font-bold tracking-wider uppercase shadow-md">
                  Yêu thích nhất
                </div>
                <div className="relative h-60 overflow-hidden">
                  <img
                    alt="Góc nhìn tòa tháp Landmark 81 từ bến tàu Bình An"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="/images/asset_f96cbb30.webp"
                  />
                  <div className="bg-primary-container/85 text-surface absolute top-4 left-4 rounded-md px-3 py-1 text-xs font-semibold uppercase backdrop-blur-md">
                    Góc Ngắm Skyline Đẹp Nhất
                  </div>
                  <div className="bg-surface-container-lowest/90 text-primary absolute right-3 bottom-3 rounded px-2.5 py-1 text-xs font-bold backdrop-blur-sm">
                    15 phút hành trình
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between space-y-4 p-6">
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-title-md text-primary text-lg font-bold">
                        Bạch Đằng → Bình An
                      </h3>
                      <span className="text-on-tertiary-container text-lg font-bold">15.000đ</span>
                    </div>
                    <p className="font-body-md text-on-surface-variant text-xs leading-relaxed sm:text-sm">
                      Ngắm nhìn toàn cảnh công viên Central Park và tòa tháp Landmark 81 sừng sững
                      bên sông. Bến tàu Bình An có quán cà phê ven sông lộng gió nổi tiếng.
                    </p>
                  </div>
                  <div className="border-surface-container-highest flex items-center justify-between border-t pt-2 text-xs">
                    <span className="text-outline">Tần suất: 20 phút / chuyến</span>
                    <button
                      type="button"
                      onClick={() => {
                        setFrom('BD');
                        setTo('BA');
                        window.location.hash = 'dat-ve';
                      }}
                      className="text-on-tertiary-container hover:text-tertiary inline-flex cursor-pointer items-center gap-1 font-bold"
                    >
                      Đặt vé ngay{' '}
                      <span className="material-symbols-outlined text-[16px]">east</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-lowest group border-outline-variant/20 flex flex-col overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 hover:shadow-xl">
                <div className="relative h-60 overflow-hidden">
                  <img
                    alt="Khung cảnh đêm lấp lánh trên hành trình đường sông Sài Gòn"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="/images/night-view.webp"
                  />
                  <div className="bg-primary-container/85 text-surface absolute top-4 left-4 rounded-md px-3 py-1 text-xs font-semibold uppercase backdrop-blur-md">
                    Toàn Tuyến Khám Phá
                  </div>
                  <div className="bg-surface-container-lowest/90 text-primary absolute right-3 bottom-3 rounded px-2.5 py-1 text-xs font-bold backdrop-blur-sm">
                    52 phút trải nghiệm
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between space-y-4 p-6">
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-title-md text-primary text-lg font-bold">
                        Bạch Đằng → Linh Đông
                      </h3>
                      <span className="text-secondary text-lg font-bold">15.000đ</span>
                    </div>
                    <p className="font-body-md text-on-surface-variant text-xs leading-relaxed sm:text-sm">
                      Hành trình 10.8 km xuyên qua 7 bến đón, chuyển đổi từ trung tâm cao ốc sang
                      vùng bán đảo Thanh Đa xanh tươi thanh bình rợp bóng cây ăn quả.
                    </p>
                  </div>
                  <div className="border-surface-container-highest flex items-center justify-between border-t pt-2 text-xs">
                    <span className="text-outline">Tần suất: 45 phút / chuyến</span>
                    <button
                      type="button"
                      onClick={() => {
                        setFrom('BD');
                        setTo('LD');
                        window.location.hash = 'dat-ve';
                      }}
                      className="text-secondary hover:text-primary inline-flex cursor-pointer items-center gap-1 font-semibold"
                    >
                      Đặt vé ngay{' '}
                      <span className="material-symbols-outlined text-[16px]">east</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface w-full py-20" id="ben-tau">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              <div className="space-y-4 lg:col-span-7">
                <div className="border-outline-variant/30 relative overflow-hidden rounded-2xl border shadow-[0_20px_45px_rgba(8,43,58,0.12)]">
                  <img
                    alt="Ga tàu thủy Bạch Đằng Waterbus Station với sàn gỗ rộng mở nhìn ra bến cảng trung tâm Sài Gòn"
                    className="h-[420px] w-full object-cover sm:h-[480px]"
                    src="/images/asset_7fa6197d.webp"
                  />
                  <div className="from-primary/80 via-primary/40 text-surface absolute inset-x-0 bottom-0 bg-gradient-to-t to-transparent p-6">
                    <span className="text-secondary-fixed mb-1 block text-xs font-semibold tracking-widest uppercase">
                      Ga Trung Tâm • Quận 1
                    </span>
                    <h4 className="font-headline-sm text-surface text-xl sm:text-2xl">
                      Bến Tàu Thủy Bạch Đằng
                    </h4>
                    <p className="text-surface-container-high/90 mt-1 text-xs sm:text-sm">
                      Sàn gỗ ngắm cảnh ngoài trời, phòng vé số hóa, cafe specialty và lối tản bộ kết
                      nối trực tiếp Phố đi bộ Nguyễn Huệ.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-2">
                  <div className="bg-surface-container-lowest border-outline-variant/20 rounded-xl border p-4 text-center">
                    <span className="font-headline-sm text-primary block text-xl font-bold">
                      07
                    </span>
                    <span className="text-outline text-xs font-medium">Bến đang hoạt động</span>
                  </div>
                  <div className="bg-surface-container-lowest border-outline-variant/20 rounded-xl border p-4 text-center">
                    <span className="font-headline-sm text-secondary block text-xl font-bold">
                      100%
                    </span>
                    <span className="text-outline text-xs font-medium">Tiện ích không rào cản</span>
                  </div>
                  <div className="bg-surface-container-lowest border-outline-variant/20 rounded-xl border p-4 text-center">
                    <span className="font-headline-sm text-on-tertiary-container block text-xl font-bold">
                      Wi-Fi &amp; Cafe
                    </span>
                    <span className="text-outline text-xs font-medium">Phục vụ tại mỗi bến</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6 lg:col-span-5">
                <div>
                  <span className="text-secondary mb-2 block text-xs font-semibold tracking-[0.25em] uppercase">
                    Mạng Lưới Bến Đón Khách
                  </span>
                  <h2 className="font-headline-lg text-primary text-3xl leading-snug font-normal">
                    Hệ Thống Bến Tàu <br />
                    Di Sản &amp; Hiện Đại
                  </h2>
                  <p className="font-body-md text-on-surface-variant mt-3 text-sm leading-relaxed">
                    Mỗi bến tàu của Sông Xanh được quy hoạch như một công viên bỏ túi bên sông, nơi
                    bạn có thể nhâm nhi ly cà phê sáng hoặc đón gió chiều trước giờ tàu cập bến.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="bg-surface-container-lowest border-secondary flex items-center justify-between rounded-xl border-l-4 p-4 shadow-sm">
                    <div>
                      <h4 className="font-title-md text-primary text-sm font-bold">
                        1. Bến Ga Bạch Đằng
                      </h4>
                      <p className="text-outline text-xs">
                        Số 10B Tôn Đức Thắng, P. Bến Nghé, Quận 1
                      </p>
                    </div>
                    <span className="bg-secondary-container text-on-secondary-container rounded px-2.5 py-1 text-[11px] font-semibold">
                      Ga Trung Tâm
                    </span>
                  </div>

                  <div className="bg-surface-container-lowest border-outline-variant/20 hover:border-secondary/40 flex items-center justify-between rounded-xl border p-4 transition-colors">
                    <div>
                      <h4 className="font-title-md text-primary text-sm font-semibold">
                        2. Bến Cầu Ba Son
                      </h4>
                      <p className="text-outline text-xs">
                        Khu phức hợp Ba Son, Tôn Đức Thắng, Quận 1
                      </p>
                    </div>
                    <span className="text-outline text-xs">Kết nối Metro số 1</span>
                  </div>

                  <div className="bg-surface-container-lowest border-outline-variant/20 hover:border-secondary/40 flex items-center justify-between rounded-xl border p-4 transition-colors">
                    <div>
                      <h4 className="font-title-md text-primary text-sm font-semibold">
                        3. Bến Bình An
                      </h4>
                      <p className="text-outline text-xs">
                        Đường số 21, Phường Bình An, TP. Thủ Đức
                      </p>
                    </div>
                    <span className="text-outline text-xs">View Landmark 81</span>
                  </div>

                  <div className="bg-surface-container-lowest border-outline-variant/20 hover:border-secondary/40 flex items-center justify-between rounded-xl border p-4 transition-colors">
                    <div>
                      <h4 className="font-title-md text-primary text-sm font-semibold">
                        4. Bến Thảo Điền
                      </h4>
                      <p className="text-outline text-xs">
                        Đường Nguyễn Văn Hưởng, P. Thảo Điền, TP. Thủ Đức
                      </p>
                    </div>
                    <span className="text-outline text-xs">Khu nghệ thuật ẩm thực</span>
                  </div>
                </div>
                <div>
                  <a
                    className="text-secondary hover:text-primary inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                    href="#so-do-ben"
                  >
                    <span className="">Xem bản đồ chi tiết và hướng dẫn di chuyển</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary-container text-surface w-full py-20" id="cam-nang">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <div className="relative overflow-hidden rounded-3xl shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
              <div className="relative h-[480px] w-full lg:h-[540px]">
                <img
                  alt="Đêm Sài Gòn rực rỡ ánh đèn từ sông nước với du thuyền sang trọng"
                  className="h-full w-full object-cover"
                  src="/images/night-view.webp"
                />
                <div className="from-primary-container/95 via-primary-container/70 to-primary-container/30 absolute inset-0 bg-gradient-to-r"></div>
                <div className="from-primary-container absolute inset-0 bg-gradient-to-t via-transparent to-transparent"></div>
              </div>

              <div className="absolute inset-0 flex items-center">
                <div className="max-w-2xl space-y-6 p-8 sm:p-12 lg:p-16">
                  <span className="text-secondary-fixed block text-xs font-semibold tracking-[0.25em] uppercase">
                    Cẩm Nang Tuyển Chọn
                  </span>
                  <h2 className="font-display-lg text-surface text-3xl leading-tight font-normal sm:text-4xl lg:text-5xl">
                    Khám Phá Sài Gòn <br />
                    <span className="text-tertiary-fixed font-light italic">
                      Khi Thành Phố Lên Đèn
                    </span>
                  </h2>
                  <p className="font-body-md text-surface-container-high/90 text-sm leading-relaxed font-light sm:text-base">
                    Khi ánh hoàng hôn tắt dần, đường chân trời Sài Gòn bừng sáng với hàng vạn ánh
                    đèn lấp lánh phản chiếu xuống mặt nước. Tận hưởng không khí mát lành cùng âm
                    nhạc acoustic dịu nhẹ trên chuyến tàu Sunset Cruise lúc 17:30.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <a
                      className="bg-on-tertiary-container text-on-tertiary font-label-md inline-flex items-center justify-center rounded-lg px-6 py-3 text-xs font-bold tracking-wider uppercase shadow-lg transition-all hover:bg-[#c95a28] sm:text-sm"
                      href="#dat-ve"
                    >
                      Đặt Chuyến Hoàng Hôn
                    </a>
                    <a
                      className="text-surface hover:text-secondary-fixed inline-flex items-center gap-1.5 text-xs font-medium transition-colors sm:text-sm"
                      href="#bai-viet-cam-nang"
                    >
                      <span className="">Đọc bài viết hướng dẫn</span>
                      <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                    </a>
                  </div>

                  <div className="border-surface/15 text-surface-variant flex items-center gap-4 border-t pt-4 text-xs">
                    <div className="text-secondary-fixed flex items-center gap-1">
                      <span className="material-symbols-outlined text-[18px]">wb_twilight</span>
                      <span className="font-semibold">Khung giờ đẹp nhất:</span>
                    </div>
                    <span className="">
                      17:15 - 18:45 hàng ngày tại Bến Bạch Đằng &amp; Bình An
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-lowest border-outline-variant/20 w-full border-y py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <div className="bg-surface-container-low border-outline-variant/20 grid grid-cols-1 items-center gap-10 rounded-3xl border p-8 sm:p-12 lg:grid-cols-12 lg:p-16">
              <div className="space-y-4 lg:col-span-7">
                <span className="text-on-tertiary-container block text-xs font-semibold tracking-[0.25em] uppercase">
                  Chương Trình Tri Ân
                </span>
                <h2 className="font-headline-lg text-primary text-3xl font-normal sm:text-4xl">
                  Gia Nhập Sông Xanh Club
                </h2>
                <p className="font-body-md text-on-surface-variant text-sm leading-relaxed sm:text-base">
                  Trở thành hội viên để tích lũy hải lý trên mỗi hành trình, đổi vé miễn phí cho
                  người thân, nhận đặc quyền ưu tiên lên tàu và giảm 15% tại toàn bộ chuỗi cà phê
                  đối tác tại các bến tàu.
                </p>
                <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-[22px]">
                      loyalty
                    </span>
                    <div>
                      <h4 className="text-primary text-sm font-semibold">Tích Hải Lý Đổi Vé</h4>
                      <p className="text-on-surface-variant text-xs">
                        Mỗi 10 chuyến tặng ngay 1 vé du ngoạn miễn phí
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-[22px]">
                      airline_seat_recline_extra
                    </span>
                    <div>
                      <h4 className="text-primary text-sm font-semibold">Chọn Chỗ Ngồi Đẹp</h4>
                      <p className="text-on-surface-variant text-xs">
                        Ưu tiên đặt trước ghế boong ngắm cảnh độc quyền
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest border-outline-variant/30 rounded-2xl border p-6 shadow-md sm:p-8 lg:col-span-5">
                <h3 className="font-title-md text-primary mb-1 text-lg font-bold">
                  Đăng ký nhận ưu đãi
                </h3>
                <p className="text-on-surface-variant mb-6 text-xs">
                  Nhận ngay mã giảm 20% cho chuyến đi đầu tiên trong tuần này.
                </p>
                <form className="space-y-4">
                  <div>
                    <label className="text-outline mb-1 block text-xs font-semibold tracking-wider uppercase">
                      Họ &amp; Tên
                    </label>
                    <input
                      className="bg-surface-container-low border-outline-variant/30 focus:border-secondary w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none"
                      placeholder="Nguyễn Văn A"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="text-outline mb-1 block text-xs font-semibold tracking-wider uppercase">
                      Số điện thoại hoặc Email
                    </label>
                    <input
                      className="bg-surface-container-low border-outline-variant/30 focus:border-secondary w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none"
                      placeholder="0901 234 567 / name@email.com"
                      type="text"
                    />
                  </div>
                  <button
                    onClick={() => navigate('/register')}
                    className="bg-primary hover:bg-secondary text-on-primary w-full rounded-lg py-3 text-xs font-semibold tracking-wider uppercase shadow-sm transition-colors"
                    type="button"
                  >
                    Đăng Ký Thành Viên Ngay
                  </button>
                </form>
                <p className="text-outline mt-3 text-center text-[11px]">
                  Cam kết bảo mật thông tin theo tiêu chuẩn quốc gia.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
