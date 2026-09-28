import React from 'react';
import { User, LogOut, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function StaffProfile() {
  const navigate = useNavigate();
  return (
    <div className="flex h-full flex-col bg-slate-50">
      <div className="flex shrink-0 flex-col items-center p-6 pt-12">
        <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-slate-800">
          <User className="h-10 w-10 text-white" />
        </div>
        <h2 className="text-xl font-bold text-slate-800">Trần Văn B (Staff)</h2>
        <p className="mt-1 flex items-center gap-1 text-sm text-slate-500">
          <Shield className="h-4 w-4 text-green-500" />
          Verified Inspector
        </p>
      </div>

      <div className="mt-4 flex-1 space-y-2 px-4">
        <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
          <div className="border-b border-slate-100 p-4">
            <p className="mb-1 text-xs font-medium tracking-wider text-slate-400 uppercase">
              Assigned Station
            </p>
            <p className="font-semibold text-slate-800">Bạch Đằng Station (BD)</p>
          </div>
          <div className="border-b border-slate-100 p-4">
            <p className="mb-1 text-xs font-medium tracking-wider text-slate-400 uppercase">
              Employee ID
            </p>
            <p className="font-semibold text-slate-800">EMP-2026-042</p>
          </div>
          <button
            onClick={() => navigate('/login')}
            className="flex w-full items-center gap-4 p-4 text-red-600 transition-colors hover:bg-red-50"
          >
            <LogOut className="h-5 w-5" />
            <span className="flex-1 text-left font-medium">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
