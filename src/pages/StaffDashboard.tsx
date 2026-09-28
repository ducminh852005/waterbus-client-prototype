import React from 'react';
import { Users, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function StaffDashboard() {
  return (
    <div className="flex h-full flex-col bg-slate-50">
      <div className="shrink-0 rounded-b-3xl bg-slate-900 p-6 pb-12 text-white">
        <p className="text-sm font-semibold text-blue-400">Station: Bạch Đằng</p>
        <h1 className="mt-1 text-2xl font-bold">Current Shift</h1>

        <div className="mt-6 flex items-center justify-between rounded-2xl bg-slate-800 p-4">
          <div>
            <p className="text-sm text-slate-400">Next Departure</p>
            <p className="text-lg font-semibold">Trip #BD-TT-1530</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-slate-400">Time</p>
            <p className="text-lg font-bold text-blue-400">15:30</p>
          </div>
        </div>
      </div>

      <div className="-mt-6 flex-1 space-y-4 px-4">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
            <div className="mb-2 flex items-center gap-2 text-slate-500">
              <Users className="h-4 w-4" />
              <span className="text-sm font-medium">Boarded</span>
            </div>
            <p className="text-3xl font-bold text-slate-800">
              45<span className="text-lg font-normal text-slate-400">/50</span>
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
            <div className="mb-2 flex items-center gap-2 text-slate-500">
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm font-medium">Pending</span>
            </div>
            <p className="text-3xl font-bold text-amber-500">5</p>
          </div>
        </div>

        {/* Recent Scans */}
        <div className="mt-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <h3 className="mb-4 font-semibold text-slate-800">Recent Scans</h3>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center justify-between border-b border-slate-50 pb-3 last:border-0 last:pb-0"
              >
                <div>
                  <p className="font-medium text-slate-800">
                    Seat {Math.floor(Math.random() * 50) + 1}
                  </p>
                  <p className="text-xs text-slate-500">2 mins ago</p>
                </div>
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
