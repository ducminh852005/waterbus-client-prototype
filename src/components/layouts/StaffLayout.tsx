import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ScanLine, LayoutDashboard, UserCircle } from 'lucide-react';

export default function StaffLayout() {
  return (
    <div className="relative flex min-h-screen flex-col bg-slate-900 pb-20">
      <main className="relative flex-1 overflow-auto bg-slate-50">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed right-0 bottom-0 left-0 z-40 mx-auto flex h-20 w-full max-w-md items-center justify-between border-t border-slate-200 bg-white px-6 pt-2 pb-4 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.1)]">
        <NavLink
          to="/staff"
          end
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 ${isActive ? 'text-blue-600' : 'text-slate-400'}`
          }
        >
          <LayoutDashboard className="h-6 w-6" />
          <span className="text-[10px] font-medium">Stats</span>
        </NavLink>

        <NavLink
          to="/staff/scanner"
          className={({ isActive }) =>
            `-mt-8 flex h-14 w-14 flex-col items-center justify-center rounded-full shadow-lg shadow-blue-500/30 ${isActive ? 'bg-blue-600 text-white' : 'bg-slate-800 text-white'}`
          }
        >
          <ScanLine className="h-6 w-6" />
        </NavLink>

        <NavLink
          to="/staff/profile"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 ${isActive ? 'text-blue-600' : 'text-slate-400'}`
          }
        >
          <UserCircle className="h-6 w-6" />
          <span className="text-[10px] font-medium">Profile</span>
        </NavLink>
      </nav>
    </div>
  );
}
