import React from 'react';
import { STATIONS } from '../mocks/stations';

export default function AdminRoutes() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800">Routes & Stations</h2>
        <button className="rounded-xl bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700">
          Add New Station
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-slate-500">
              <th className="p-4 font-medium">ID / Code</th>
              <th className="p-4 font-medium">Station Name</th>
              <th className="p-4 font-medium">Area</th>
              <th className="p-4 text-right font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {STATIONS.map((station) => (
              <tr key={station.code} className="border-b border-slate-100 hover:bg-slate-50/50">
                <td className="p-4 text-sm font-medium text-slate-600">
                  {station.id} - {station.code}
                </td>
                <td className="p-4 font-semibold text-slate-800">{station.name}</td>
                <td className="p-4 text-slate-600">{station.area}</td>
                <td className="p-4 text-right">
                  <button className="mr-4 text-sm font-medium text-blue-600 hover:underline">
                    Edit
                  </button>
                  <button className="text-sm font-medium text-red-600 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
