import React from 'react';

export default function AdminBookings() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800">Bookings & Refunds</h2>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Search by Booking ID or Phone..."
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
          />
          <button className="rounded-xl bg-slate-100 px-4 py-2 font-medium text-slate-600 transition-colors hover:bg-slate-200">
            Filter
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-slate-500">
              <th className="p-4 font-medium">Booking ID</th>
              <th className="p-4 font-medium">Customer</th>
              <th className="p-4 font-medium">Trip & Date</th>
              <th className="p-4 font-medium">Amount</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 text-right font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-100 hover:bg-slate-50/50">
              <td className="p-4 text-sm font-medium text-blue-600">#BK-84729</td>
              <td className="p-4 text-sm font-semibold text-slate-800">Nguyễn Văn A</td>
              <td className="p-4 text-sm text-slate-600">
                <div className="font-medium text-slate-800">BD ➔ TD</div>
                <div className="text-xs text-slate-500">29/10/2025 15:30</div>
              </td>
              <td className="p-4 text-sm font-medium text-slate-800">15.000đ</td>
              <td className="p-4">
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
                  PAID
                </span>
              </td>
              <td className="p-4 text-right">
                <button className="text-sm font-medium text-blue-600 hover:underline">View</button>
              </td>
            </tr>
            <tr className="border-b border-slate-100 hover:bg-slate-50/50">
              <td className="p-4 text-sm font-medium text-blue-600">#BK-84728</td>
              <td className="p-4 text-sm font-semibold text-slate-800">Trần Thị B</td>
              <td className="p-4 text-sm text-slate-600">
                <div className="font-medium text-slate-800">TD ➔ BD</div>
                <div className="text-xs text-slate-500">28/10/2025 10:15</div>
              </td>
              <td className="p-4 text-sm font-medium text-slate-800">30.000đ</td>
              <td className="p-4">
                <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-semibold text-red-700">
                  CANCELLED
                </span>
                <div className="mt-1 text-[10px] text-amber-600">Refund Pending</div>
              </td>
              <td className="flex flex-col items-end gap-1 p-4 text-right">
                <button className="text-sm font-medium text-amber-600 hover:underline">
                  Process Refund
                </button>
                <button className="text-sm font-medium text-slate-500 hover:underline">View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
