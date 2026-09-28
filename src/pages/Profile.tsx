import React from 'react';
import { User, Settings, LogOut, CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();
  return (
    <div className="flex h-full flex-col bg-slate-50">
      <div className="flex shrink-0 flex-col items-center p-6 pt-12">
        <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-blue-100">
          <User className="h-10 w-10 text-blue-600" />
        </div>
        <h2 className="text-xl font-bold text-slate-800">Nguyễn Văn A</h2>
        <p className="text-sm text-slate-500">0901234567</p>
      </div>

      <div className="mt-4 flex-1 space-y-2 px-4">
        <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
          <button className="flex w-full items-center gap-4 border-b border-slate-100 p-4 transition-colors hover:bg-slate-50">
            <CreditCard className="h-5 w-5 text-slate-400" />
            <span className="flex-1 text-left font-medium text-slate-700">Payment Methods</span>
          </button>
          <button className="flex w-full items-center gap-4 border-b border-slate-100 p-4 transition-colors hover:bg-slate-50">
            <Settings className="h-5 w-5 text-slate-400" />
            <span className="flex-1 text-left font-medium text-slate-700">Settings</span>
          </button>
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
