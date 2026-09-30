import { useState } from 'react';
import BookingStepper from '../components/BookingStepper';
import { useBookingSearch } from '../hooks/useBookingSearch';
import { BookingSearchWidget } from '../components/booking';

const BookingSearch = () => {
  return (
    <>
      <main className="bg-surface min-h-screen w-full pt-20">
        <div className="flex w-full flex-col">
          <div className="relative w-full overflow-hidden">
            <div className="bg-secondary-container/30 pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full blur-3xl"></div>
            <div className="bg-tertiary-fixed/30 pointer-events-none absolute top-10 left-10 h-80 w-80 rounded-full blur-3xl"></div>
            <div className="px-gutter py-space-lg relative z-10 mx-auto max-w-7xl">
              <div className="gap-space-sm mb-space-md flex flex-wrap items-center justify-between">
                <div className="gap-space-xs font-label-sm text-label-sm text-on-surface-variant flex items-center tracking-widest uppercase">
                  <span className="hover:text-primary cursor-pointer transition-colors">
                    Trang chủ
                  </span>
                  <span className="text-outline-variant">/</span>
                  <span className="text-on-tertiary-container font-semibold">
                    Đặt vé trực tuyến
                  </span>
                </div>
                <div className="gap-space-xs bg-surface-container px-space-sm text-outline font-label-sm text-label-sm inline-flex items-center rounded-full py-1">
                  <span className="bg-secondary h-2 w-2 animate-pulse rounded-full"></span>
                  <span className="">Hệ thống thời gian thực</span>
                </div>
              </div>

              <BookingStepper currentStep={1} />

              <div className="mb-space-lg max-w-3xl">
                <span className="font-label-md text-label-md text-secondary font-semibold tracking-widest uppercase">
                  Tuyến sông Sài Gòn Di Sản & Đô Thị Mới
                </span>
                <h1 className="font-headline-lg text-headline-lg text-primary mt-space-xs mb-space-xs font-normal tracking-tight">
                  Bắt đầu hành trình trên sông Sài Gòn
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  Tận hưởng góc nhìn khoáng đạt của đô thị hoa lệ khi lướt êm qua những công trình
                  biểu tượng. Lựa chọn bến cảng khởi hành để bắt đầu chuyến du ngoạn sông nước độc
                  bản.
                </p>
              </div>

              <BookingSearchWidget />

              <div className="gap-space-md my-space-xl grid grid-cols-1 md:grid-cols-3">
                <div className="bg-surface-container-lowest p-space-md gap-space-sm flex items-start rounded-xl shadow-sm">
                  <div className="bg-secondary-container text-on-secondary-container flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                    <span className="material-symbols-outlined text-[22px]">
                      nest_clock_farsight_analog
                    </span>
                  </div>
                  <div>
                    <h2 className="font-title-md text-body-md text-primary mb-0.5 font-bold">
                      Đúng giờ 100%
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Lộ trình vận hành chính xác theo biểu đồ sóng, hạn chế tối đa độ trễ bến bãi.
                    </p>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-space-md gap-space-sm flex items-start rounded-xl shadow-sm">
                  <div className="bg-tertiary-fixed text-on-tertiary-container flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                    <span className="material-symbols-outlined text-[22px]">mark_email_read</span>
                  </div>
                  <div>
                    <h2 className="font-title-md text-body-md text-primary mb-0.5 font-bold">
                      Vé điện tử tức thì
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Nhận vé mã QR bảo mật ngay qua SMS &amp; Email sau thao tác thanh toán 30
                      giây.
                    </p>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-space-md gap-space-sm flex items-start rounded-xl shadow-sm">
                  <div className="bg-primary-fixed text-on-primary-fixed flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                    <span className="material-symbols-outlined text-[22px]">
                      published_with_changes
                    </span>
                  </div>
                  <div>
                    <h2 className="font-title-md text-body-md text-primary mb-0.5 font-bold">
                      Đổi chuyến linh hoạt
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Hỗ trợ dời giờ hoặc chuyến tàu trực tuyến dễ dàng trước giờ xuất bến 60 phút.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BookingSearch;
