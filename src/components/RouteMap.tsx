import React from 'react';

export default function RouteMap() {
  return (
    <div className="mb-8 w-full overflow-hidden rounded-2xl bg-white shadow-[0_10px_25px_rgba(0,0,0,0.05)]">
      <div className="p-6 pb-2 text-center">
        <h2 className="font-headline-sm text-primary mb-1 text-2xl font-bold">
          Bản Đồ Tuyến Đường Sông
        </h2>
        <p className="text-outline text-sm">Tuyến Saigon River (Bạch Đằng - Linh Đông)</p>
      </div>

      <div className="relative w-full overflow-x-auto pb-6">
        {/* Adjusted viewBox for better proportion and removed absolute widths */}
        <svg
          viewBox="0 0 900 240"
          className="mx-auto h-auto max-h-[280px] w-full max-w-4xl min-w-[800px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Water Background decoration */}
          <rect x="50" y="60" width="800" height="130" fill="#e0f2fe" rx="20" />

          {/* The Route Line */}
          <path
            d="M 120 120 L 320 120 L 370 80 L 650 80 L 700 120 L 780 120"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* STATIONS */}
          {/* 1. Bến Bạch Đằng */}
          <circle
            cx="120"
            cy="120"
            r="10"
            fill="white"
            stroke="#e26d38"
            strokeWidth="5"
            className="hover:r-[14px] transition-all duration-300"
          />
          <text x="120" y="155" textAnchor="middle" fill="#082b3a" fontSize="16" fontWeight="bold">
            Bạch Đằng
          </text>
          <text x="120" y="175" textAnchor="middle" fill="#64748b" fontSize="12">
            Quận 1
          </text>
          <rect x="80" y="85" width="80" height="20" rx="4" fill="#e26d38" opacity="0.1" />
          <text x="120" y="99" textAnchor="middle" fill="#e26d38" fontSize="10" fontWeight="bold">
            GA TRUNG TÂM
          </text>

          {/* 2. Bến Ba Son */}
          <circle
            cx="280"
            cy="120"
            r="10"
            fill="white"
            stroke="#082b3a"
            strokeWidth="5"
            className="hover:r-[14px] transition-all duration-300 hover:fill-[#e26d38] hover:stroke-white"
          />
          <text x="280" y="155" textAnchor="middle" fill="#082b3a" fontSize="16" fontWeight="bold">
            Ba Son
          </text>
          <text x="280" y="175" textAnchor="middle" fill="#64748b" fontSize="12">
            Quận 1
          </text>
          <rect x="245" y="85" width="70" height="20" rx="4" fill="#0d8368" opacity="0.1" />
          <text x="280" y="99" textAnchor="middle" fill="#0d8368" fontSize="10" fontWeight="bold">
            METRO 1
          </text>

          {/* 3. Bến Bình An */}
          <circle
            cx="420"
            cy="80"
            r="10"
            fill="white"
            stroke="#082b3a"
            strokeWidth="5"
            className="hover:r-[14px] transition-all duration-300 hover:fill-[#e26d38] hover:stroke-white"
          />
          <text x="420" y="55" textAnchor="middle" fill="#082b3a" fontSize="16" fontWeight="bold">
            Bình An
          </text>
          <text x="420" y="35" textAnchor="middle" fill="#64748b" fontSize="12">
            TP. Thủ Đức
          </text>

          {/* 4. Bến Thảo Điền */}
          <circle
            cx="580"
            cy="80"
            r="10"
            fill="white"
            stroke="#082b3a"
            strokeWidth="5"
            className="hover:r-[14px] transition-all duration-300 hover:fill-[#e26d38] hover:stroke-white"
          />
          <text x="580" y="55" textAnchor="middle" fill="#082b3a" fontSize="16" fontWeight="bold">
            Thảo Điền
          </text>
          <text x="580" y="35" textAnchor="middle" fill="#64748b" fontSize="12">
            TP. Thủ Đức
          </text>

          {/* 5. Bến Linh Đông */}
          <circle
            cx="780"
            cy="120"
            r="10"
            fill="white"
            stroke="#082b3a"
            strokeWidth="5"
            className="hover:r-[14px] transition-all duration-300 hover:fill-[#e26d38] hover:stroke-white"
          />
          <text x="780" y="155" textAnchor="middle" fill="#082b3a" fontSize="16" fontWeight="bold">
            Linh Đông
          </text>
          <text x="780" y="175" textAnchor="middle" fill="#64748b" fontSize="12">
            TP. Thủ Đức
          </text>
          <rect x="740" y="85" width="80" height="20" rx="4" fill="#334155" opacity="0.1" />
          <text x="780" y="99" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="bold">
            GA CUỐI
          </text>
        </svg>
      </div>

      <div className="flex justify-center gap-8 border-t border-slate-100 py-4">
        <div className="flex items-center gap-2">
          <div className="border-primary h-4 w-4 rounded-full border-4 bg-white"></div>
          <span className="text-sm font-medium text-slate-600">Bến tiêu chuẩn</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full border-4 border-[#e26d38] bg-white"></div>
          <span className="text-sm font-medium text-slate-600">Ga trung tâm / Điểm nối chuyến</span>
        </div>
      </div>
    </div>
  );
}
