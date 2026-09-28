import React from 'react';
import { VESSELS } from '../mocks/vessels';

export default function AdminFleet() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800">Fleet Management</h2>
        <button className="rounded-xl bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700">
          Add New Ship
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-slate-500">
              <th className="p-4 font-medium">Ship Name</th>
              <th className="p-4 font-medium">Type</th>
              <th className="p-4 font-medium">Capacity</th>
              <th className="p-4 text-right font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {VESSELS.map((vessel) => (
              <tr key={vessel.id} className="border-b border-slate-100 hover:bg-slate-50/50">
                <td className="p-4 font-semibold text-slate-800">{vessel.name}</td>
                <td className="p-4 text-slate-600 capitalize">{vessel.type}</td>
                <td className="p-4 text-slate-600">{vessel.capacity} seats</td>
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
