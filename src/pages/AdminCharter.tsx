import React from 'react';

export default function AdminCharter() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800">Charter Requests</h2>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-slate-500">
              <th className="p-4 font-medium">Request ID</th>
              <th className="p-4 font-medium">Customer / Company</th>
              <th className="p-4 font-medium">Date & Route</th>
              <th className="p-4 font-medium">Scale</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 text-right font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-100 hover:bg-slate-50/50">
              <td className="p-4 text-sm font-medium text-slate-600">#CR-1029</td>
              <td className="p-4 text-sm font-semibold text-slate-800">FPT Software</td>
              <td className="p-4 text-sm text-slate-600">
                <div className="font-medium text-slate-800">Bạch Đằng - Vũng Tàu</div>
                <div className="text-xs text-slate-500">15/12/2025</div>
              </td>
              <td className="p-4 text-sm text-slate-800">50 pax</td>
              <td className="p-4">
                <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-700">
                  NEW
                </span>
              </td>
              <td className="p-4 text-right">
                <button className="text-sm font-medium text-blue-600 hover:underline">
                  Review & Quote
                </button>
              </td>
            </tr>
            <tr className="border-b border-slate-100 hover:bg-slate-50/50">
              <td className="p-4 text-sm font-medium text-slate-600">#CR-1028</td>
              <td className="p-4 text-sm font-semibold text-slate-800">Lê Văn C</td>
              <td className="p-4 text-sm text-slate-600">
                <div className="font-medium text-slate-800">Bạch Đằng - Thảo Điền (Sunset)</div>
                <div className="text-xs text-slate-500">20/11/2025</div>
              </td>
              <td className="p-4 text-sm text-slate-800">10 pax</td>
              <td className="p-4">
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
                  CONFIRMED
                </span>
              </td>
              <td className="p-4 text-right">
                <button className="text-sm font-medium text-slate-500 hover:underline">
                  View Contract
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
