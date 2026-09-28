import BookingStepper from '../components/BookingStepper';
import BookingSummarySidebar from '../components/BookingSummarySidebar';
import { usePassengerInfo } from '../hooks/usePassengerInfo';
import { ContactInfoForm, PassengerForm } from '../components/booking';
import type { SpecialRequest } from '../types';

const SPECIAL_REQUESTS: { id: SpecialRequest; title: string; subtitle: string }[] = [
  { id: 'wheelchair', title: 'Hỗ trợ xe lăn', subtitle: 'Cầu tàu dốc & tiếp đón hỗ trợ' },
  { id: 'elderly', title: 'Người cao tuổi', subtitle: 'Bố trí ưu tiên lối đi rộng rãi' },
  { id: 'pet', title: 'Thú cưng đi cùng', subtitle: 'Trong lồng chuyên dụng an toàn' },
];

const BookingPassengerInfo = () => {
  const {
    contact,
    setContact,
    passengers,
    updatePassenger,
    copyContactToPassenger,
    specialRequests,
    toggleSpecialRequest,
    agreedToTerms,
    setAgreedToTerms,
    error,
    submit,
  } = usePassengerInfo();

  if (passengers.length === 0) return null;

  return (
    <>
      <main className="bg-surface min-h-screen w-full pt-20">
        <div className="flex w-full flex-col">
          <div className="px-gutter py-space-md mx-auto max-w-7xl">
            <BookingStepper currentStep={4} />
          </div>

          <section className="px-gutter py-space-lg mx-auto w-full max-w-7xl">
            <div className="gap-space-lg grid grid-cols-1 lg:grid-cols-12">
              <div className="gap-space-md flex flex-col lg:col-span-8">
                <div className="bg-surface-container-lowest p-space-md gap-space-sm flex flex-col items-start justify-between rounded-xl shadow-sm sm:flex-row sm:items-center">
                  <div className="gap-space-sm flex items-center">
                    <div className="bg-secondary-container text-on-secondary-container flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                      <span className="material-symbols-outlined text-[20px]">bolt</span>
                    </div>
                    <div>
                      <p className="font-title-md text-body-lg text-primary font-semibold">
                        Đặt vé nhanh tiện lợi
                      </p>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Không bắt buộc tạo tài khoản hoặc đăng nhập ngay để tích lũy dặm sóng Sông
                        Xanh.
                      </p>
                    </div>
                  </div>
                </div>

                <ContactInfoForm
                  value={contact}
                  onChange={(patch) => setContact((prev) => ({ ...prev, ...patch }))}
                />

                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
                  <div className="mb-space-md flex items-center justify-between">
                    <div className="gap-space-sm flex items-center">
                      <span className="bg-primary-fixed text-primary font-title-md text-label-md flex h-8 w-8 items-center justify-center rounded-full">
                        2
                      </span>
                      <div>
                        <h2 className="font-title-md text-title-md text-primary tracking-wide uppercase">
                          Danh sách chi tiết hành khách
                        </h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                          Quy định Cục Hàng hải Việt Nam yêu cầu danh sách danh tính trước giờ nhổ
                          neo.
                        </p>
                      </div>
                    </div>
                    <span className="px-space-sm py-space-xs bg-surface-container text-primary font-label-sm text-label-sm hidden rounded uppercase sm:inline-flex">
                      {passengers.length} Ghế đã chọn
                    </span>
                  </div>

                  <div className="gap-space-md flex flex-col">
                    {passengers.map((passenger, index) => (
                      <PassengerForm
                        key={passenger.seatId}
                        index={index}
                        passenger={passenger}
                        onChange={(patch) => updatePassenger(index, patch)}
                        onCopyFromContact={() => copyContactToPassenger(index)}
                      />
                    ))}
                  </div>
                </div>

                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
                  <div className="gap-space-sm mb-space-md flex items-center">
                    <span className="bg-primary-fixed text-primary font-title-md text-label-md flex h-8 w-8 items-center justify-center rounded-full">
                      3
                    </span>
                    <div>
                      <h2 className="font-title-md text-title-md text-primary tracking-wide uppercase">
                        Yêu cầu hỗ trợ đặc biệt
                      </h2>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Đội ngũ tiếp viên cảng Sông Xanh luôn sẵn sàng chuẩn bị trước khi quý khách
                        lên tàu.
                      </p>
                    </div>
                  </div>
                  <div className="gap-space-sm grid grid-cols-1 md:grid-cols-3">
                    {SPECIAL_REQUESTS.map((req) => (
                      <label
                        key={req.id}
                        className="gap-space-xs p-space-sm bg-surface-container hover:bg-surface-variant flex cursor-pointer items-start rounded-lg transition-colors"
                      >
                        <input
                          className="text-secondary focus:ring-secondary accent-secondary mt-1"
                          type="checkbox"
                          checked={specialRequests.includes(req.id)}
                          onChange={() => toggleSpecialRequest(req.id)}
                        />
                        <div>
                          <span className="font-title-md text-body-md text-primary block font-medium">
                            {req.title}
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">
                            {req.subtitle}
                          </span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {error && (
                  <div className="p-space-sm bg-error-container text-error font-body-md text-body-md rounded-xl">
                    {error}
                  </div>
                )}

                <div className="p-space-sm bg-surface-container-low rounded-xl">
                  <label className="gap-space-sm flex cursor-pointer items-start select-none">
                    <input
                      checked={agreedToTerms}
                      onChange={(e) => setAgreedToTerms(e.target.checked)}
                      className="text-secondary focus:ring-secondary accent-secondary mt-1 h-4 w-4 shrink-0 rounded"
                      type="checkbox"
                    />
                    <span className="font-body-md text-body-md text-on-surface-variant">
                      Tôi cam kết thông tin cung cấp trên là chính xác và hoàn toàn đồng ý với
                      <a className="text-secondary font-medium hover:underline" href="#">
                        Quy chế vận chuyển hàng hải
                      </a>
                      cùng
                      <a className="text-secondary font-medium hover:underline" href="#">
                        Điều khoản bảo vệ dữ liệu cá nhân
                      </a>
                      của Sông Xanh Water Express.
                    </span>
                  </label>
                </div>
              </div>

              <div className="lg:col-span-4">
                <BookingSummarySidebar buttonText="Tiếp tục đến Thanh toán" onNext={submit} />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default BookingPassengerInfo;
