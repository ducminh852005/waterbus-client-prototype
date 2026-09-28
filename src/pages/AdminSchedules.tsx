import React from 'react';

export default function AdminSchedules() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800">Schedules (Trip Instances)</h2>
        <button className="rounded-xl bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700">
          Generate Daily Trips
        </button>
      </div>

      <div className="flex min-h-[400px] items-center justify-center overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
        <p className="text-slate-400">Schedule Management UI goes here</p>
      </div>
    </div>
  );
}
