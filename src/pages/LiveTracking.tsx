import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
  }
];

export default function LiveTracking() {
  return (
    <>
      <Header />
      <main className="w-full pt-24 pb-10 bg-surface min-h-screen">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                Hệ thống định vị AIS
              </div>
              <h1 className="font-headline-lg text-2xl sm:text-3xl text-primary font-normal">
                Theo Dõi Tàu Trực Tuyến
              </h1>
              <p className="font-body-md text-on-surface-variant mt-2 max-w-xl">
                Bảng thông tin thời gian thực về vị trí, tốc độ và trạng thái của các tàu Sông Xanh đang vận hành trên tuyến.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="p-2.5 rounded-lg border border-outline-variant/30 text-outline hover:text-primary hover:bg-surface-container transition-colors shadow-sm bg-surface-container-lowest">
                <span className="material-symbols-outlined text-[20px]">filter_list</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/30 hover:border-secondary hover:text-secondary text-primary font-label-md text-sm transition-colors shadow-sm">
                <span className="material-symbols-outlined text-[18px]">refresh</span>
                Cập nhật
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {LIVE_TRIPS.map((trip) => (
              <div key={trip.id} className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                
                {/* Header Card */}
                <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      trip.status === 'moving' ? 'bg-secondary-container text-secondary' :
                      trip.status === 'boarding' ? 'bg-tertiary-container text-tertiary' :
                      'bg-error-container text-error'
                    }`}>
                      <span className="material-symbols-outlined text-[24px]">
                        {trip.status === 'boarding' ? 'anchor' : 'directions_boat'}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-title-md text-xl font-bold text-primary">{trip.name}</h3>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-surface-container text-outline">
                          {trip.id}
                        </span>
                      </div>
                      <p className="font-body-md text-sm text-on-surface-variant">{trip.type}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:items-end gap-1">
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                      trip.status === 'moving' ? 'bg-secondary/10 text-secondary' :
                      trip.status === 'boarding' ? 'bg-tertiary/10 text-tertiary' :
                      'bg-error/10 text-error'
                    }`}>
                      <span className="material-symbols-outlined text-[14px]">
                        {trip.status === 'moving' ? 'speed' : trip.status === 'boarding' ? 'groups' : 'warning'}
                      </span>
                      {trip.status === 'moving' ? 'Đang di chuyển' : 
                       trip.status === 'boarding' ? 'Đang đón khách' : 'Chậm trễ'}
                    </div>
                    {trip.delay > 0 && (
                      <span className="text-xs font-medium text-error">Trễ {trip.delay} phút</span>
                    )}
                  </div>
                </div>

                {/* Progress Visualizer */}
                <div className="relative mb-5 px-2 md:px-8 mt-2">
                  {/* Background Track */}
                  <div className="absolute top-1/2 left-0 right-0 h-1 bg-surface-variant/40 -translate-y-1/2 rounded-full"></div>
                  {/* Active Track */}
                  <div 
                    className="absolute top-1/2 left-0 h-1 bg-secondary -translate-y-1/2 rounded-full transition-all duration-1000"
                    style={{ width: `${trip.progress}%` }}
                  ></div>
                  
                  <div className="relative flex justify-between">
                    {/* Start Point */}
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-secondary border-4 border-surface-container-lowest relative z-10 shadow-sm"></div>
                      <div className="mt-2 text-center">
                        <p className="font-title-md text-sm font-bold text-primary">{trip.from}</p>
                        <p className="font-body-md text-xs text-outline">{trip.departure}</p>
                      </div>
                    </div>

                    {/* Current Position Marker */}
                    {trip.progress > 0 && trip.progress < 100 && (
                      <div 
                        className="absolute top-0 -translate-x-1/2 -mt-4 flex flex-col items-center transition-all duration-1000 z-20"
                        style={{ left: `${trip.progress}%` }}
                      >
                        <div className="w-10 h-10 bg-surface-container-lowest rounded-full shadow-lg border-2 border-secondary flex items-center justify-center animate-bounce">
                          <span className="material-symbols-outlined text-secondary text-[20px]">sailing</span>
                        </div>
                      </div>
                    )}

                    {/* End Point */}
                    <div className="flex flex-col items-center">
                      <div className={`w-4 h-4 rounded-full border-4 border-surface-container-lowest relative z-10 shadow-sm ${
                        trip.progress === 100 ? 'bg-secondary' : 'bg-surface-variant'
                      }`}></div>
                      <div className="mt-2 text-center">
                        <p className="font-title-md text-sm font-bold text-primary">{trip.to}</p>
                        <p className="font-body-md text-xs text-outline">{trip.eta}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Info */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-3 border-t border-surface-variant/30 bg-surface-container-lowest/50">
                  <div>
                    <p className="text-[11px] uppercase tracking-wider font-semibold text-outline mb-1">Vị trí hiện tại</p>
                    <p className="font-body-md text-sm font-medium text-on-surface">{trip.currentPos}</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider font-semibold text-outline mb-1">Vận tốc</p>
                    <p className="font-body-md text-sm font-medium text-on-surface">{trip.speed}</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider font-semibold text-outline mb-1">Thời gian đến (ETA)</p>
                    <p className="font-body-md text-sm font-medium text-on-surface">{trip.eta}</p>
                  </div>
                  <div className="flex items-end md:justify-end">
                    <button className="text-secondary font-label-md text-xs uppercase tracking-wider font-bold hover:text-primary transition-colors flex items-center gap-1">
                      Xem bản đồ <span className="material-symbols-outlined text-[16px]">map</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
