import React from 'react';
import { Ticket, Search } from 'lucide-react';

export default function Wallet() {
  return (
    <div className="flex h-full flex-col bg-slate-50">
      <div className="shrink-0 rounded-b-3xl bg-blue-600 p-6 pb-10 text-white">
        <h1 className="text-2xl font-bold">My Tickets</h1>
        <p className="mt-1 text-sm opacity-80">2 upcoming trips</p>
      </div>

      <div className="-mt-6 flex-1 space-y-4 px-4">
        {/* Mock Ticket 1 */}
        <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
            <Ticket className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-slate-800">Bạch Đằng - Thủ Thiêm</h3>
            <p className="text-xs text-slate-500">20 Oct 2026 • 15:30</p>
          </div>
          <div className="text-right">
            <span className="inline-block rounded-lg bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
              PAID
            </span>
          </div>
        </div>

        {/* Search */}
        <div className="mt-8 text-center">
          <button className="mx-auto flex items-center justify-center gap-2 rounded-xl bg-blue-50 px-6 py-3 font-medium text-blue-600">
            <Search className="h-4 w-4" />
            Find Past Tickets
          </button>
        </div>
      </div>
    </div>
  );
}
