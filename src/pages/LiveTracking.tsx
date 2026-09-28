import React from 'react';

const LIVE_TRIPS = [
  {
    id: 'SX-01',
    name: 'Sông Xanh 01',
    type: 'Catamaran',
    status: 'moving',
    from: 'Bạch Đằng',
    to: 'Thảo Điền',
    departure: '15:30',
    eta: '15:55',
    progress: 45,
    speed: '22 km/h',
    currentPos: 'Gần cầu Ba Son',
    delay: 0,
  },
  {
    id: 'SX-02',
    name: 'Sông Xanh 02',
    type: 'Catamaran',
    status: 'boarding',
    from: 'Bình An',
    to: 'Bạch Đằng',
    departure: '15:45',
    eta: '16:00',
    progress: 0,
    speed: '0 km/h',
    currentPos: 'Bến Bình An',
    delay: 0,
  },
  {
    id: 'SX-03',
    name: 'Sông Xanh Express',
    type: 'Cano Cao Tốc',
    status: 'delayed',
    from: 'Thảo Điền',
    to: 'Linh Đông',
    departure: '15:15',
    eta: '15:50',
    progress: 75,
    speed: '18 km/h',
    currentPos: 'Đoạn bán đảo Thanh Đa',
    delay: 5,
  },
];

export default function LiveTracking() {
  return (
    <>
      <main className="bg-surface min-h-screen w-full pt-24 pb-10">
        <div className="mx-auto max-w-6xl px-5 lg:px-10">
          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="bg-secondary-container text-on-secondary-container mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold tracking-wider uppercase">
                <span className="bg-secondary h-2 w-2 animate-pulse rounded-full"></span>
                Hệ thống định vị AIS
              </div>
              <h1 className="font-headline-lg text-primary text-2xl font-normal sm:text-3xl">
                Theo Dõi Tàu Trực Tuyến
              </h1>
              <p className="font-body-md text-on-surface-variant mt-2 max-w-xl">
                Bảng thông tin thời gian thực về vị trí, tốc độ và trạng thái của các tàu Sông Xanh
                đang vận hành trên tuyến.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="border-outline-variant/30 text-outline hover:text-primary hover:bg-surface-container bg-surface-container-lowest rounded-lg border p-2.5 shadow-sm transition-colors">
                <span className="material-symbols-outlined text-[20px]">filter_list</span>
              </button>
              <button className="bg-surface-container-lowest border-outline-variant/30 hover:border-secondary hover:text-secondary text-primary font-label-md flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm shadow-sm transition-colors">
                <span className="material-symbols-outlined text-[18px]">refresh</span>
                Cập nhật
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {LIVE_TRIPS.map((trip) => (
              <div
                key={trip.id}
                className="bg-surface-container-lowest border-outline-variant/30 group relative overflow-hidden rounded-2xl border px-5 py-4 shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Header Card */}
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4 md:flex-nowrap">
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                        trip.status === 'moving'
                          ? 'bg-secondary-container text-secondary'
                          : trip.status === 'boarding'
                            ? 'bg-tertiary-container text-tertiary'
                            : 'bg-error-container text-error'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[24px]">
                        {trip.status === 'boarding' ? 'anchor' : 'directions_boat'}
                      </span>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center gap-2">
                        <h3 className="font-title-md text-primary text-xl font-bold">
                          {trip.name}
                        </h3>
                        <span className="bg-surface-container text-outline rounded px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase">
                          {trip.id}
                        </span>
                      </div>
                      <p className="font-body-md text-on-surface-variant text-sm">{trip.type}</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 md:items-end">
                    <div
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold tracking-wider uppercase ${
                        trip.status === 'moving'
                          ? 'bg-secondary/10 text-secondary'
                          : trip.status === 'boarding'
                            ? 'bg-tertiary/10 text-tertiary'
                            : 'bg-error/10 text-error'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[14px]">
                        {trip.status === 'moving'
                          ? 'speed'
                          : trip.status === 'boarding'
                            ? 'groups'
                            : 'warning'}
                      </span>
                      {trip.status === 'moving'
                        ? 'Đang di chuyển'
                        : trip.status === 'boarding'
                          ? 'Đang đón khách'
                          : 'Chậm trễ'}
                    </div>
                    {trip.delay > 0 && (
                      <span className="text-error text-xs font-medium">Trễ {trip.delay} phút</span>
                    )}
                  </div>
                </div>

                {/* Progress Visualizer */}
                <div className="mt-2 mb-5 px-2 md:px-8">
                  <div className="relative">
                    {/* Tracks - precisely positioned relative to dot centers */}
                    <div className="absolute top-[7px] right-2 left-2 h-1">
                      {/* Background Track */}
                      <div className="bg-surface-variant/40 absolute inset-0 rounded-full"></div>
                      {/* Active Track */}
                      <div
                        className="bg-secondary absolute top-0 bottom-0 left-0 rounded-full transition-all duration-1000"
                        style={{ width: `${trip.progress}%` }}
                      ></div>
                      {/* Current Position Marker */}
                      {trip.progress > 0 && trip.progress < 100 && (
                        <div
                          className="absolute top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center transition-all duration-1000"
                          style={{ left: `${trip.progress}%` }}
                        >
                          <div className="bg-surface-container-lowest border-secondary flex h-8 w-8 animate-bounce items-center justify-center rounded-full border-2 shadow-lg">
                            <span className="material-symbols-outlined text-secondary text-[16px]">
                              sailing
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="relative flex justify-between">
                      {/* Start Point */}
                      <div className="flex flex-col items-center">
                        <div className="bg-secondary border-surface-container-lowest relative z-10 h-4 w-4 rounded-full border-[3.5px] shadow-sm"></div>
                        <div className="mt-2 text-center">
                          <p className="font-title-md text-primary text-sm font-bold">
                            {trip.from}
                          </p>
                          <p className="font-body-md text-outline text-xs">{trip.departure}</p>
                        </div>
                      </div>

                      {/* End Point */}
                      <div className="flex flex-col items-center">
                        <div
                          className={`border-surface-container-lowest relative z-10 h-4 w-4 rounded-full border-[3.5px] shadow-sm ${
                            trip.progress === 100 ? 'bg-secondary' : 'bg-surface-variant'
                          }`}
                        ></div>
                        <div className="mt-2 text-center">
                          <p className="font-title-md text-primary text-sm font-bold">{trip.to}</p>
                          <p className="font-body-md text-outline text-xs">{trip.eta}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Info */}
                <div className="border-surface-variant/30 bg-surface-container-lowest/50 grid grid-cols-2 gap-4 border-t pt-3 md:grid-cols-4">
                  <div>
                    <p className="text-outline mb-1 text-[11px] font-semibold tracking-wider uppercase">
                      Vị trí hiện tại
                    </p>
                    <p className="font-body-md text-on-surface text-sm font-medium">
                      {trip.currentPos}
                    </p>
                  </div>
                  <div>
                    <p className="text-outline mb-1 text-[11px] font-semibold tracking-wider uppercase">
                      Vận tốc
                    </p>
                    <p className="font-body-md text-on-surface text-sm font-medium">{trip.speed}</p>
                  </div>
                  <div>
                    <p className="text-outline mb-1 text-[11px] font-semibold tracking-wider uppercase">
                      Thời gian đến (ETA)
                    </p>
                    <p className="font-body-md text-on-surface text-sm font-medium">{trip.eta}</p>
                  </div>
                  <div className="flex items-end md:justify-end">
                    <button className="text-secondary font-label-md hover:text-primary flex items-center gap-1 text-xs font-bold tracking-wider uppercase transition-colors">
                      Xem bản đồ <span className="material-symbols-outlined text-[16px]">map</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
