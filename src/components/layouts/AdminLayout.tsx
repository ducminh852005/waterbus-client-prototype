import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import {
  Anchor,
  BarChart3,
  Map,
  Ship,
  CalendarClock,
  Settings,
  LogOut,
  Menu,
  X,
  CreditCard,
  ClipboardList,
} from 'lucide-react';

export default function AdminLayout() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: <BarChart3 className="h-5 w-5" /> },
    { name: 'Routes & Stations', path: '/admin/routes', icon: <Map className="h-5 w-5" /> },
    { name: 'Fleet', path: '/admin/fleet', icon: <Ship className="h-5 w-5" /> },
    { name: 'Schedules', path: '/admin/schedules', icon: <CalendarClock className="h-5 w-5" /> },
    {
      name: 'Bookings & Refunds',
      path: '/admin/bookings',
      icon: <CreditCard className="h-5 w-5" />,
    },
    {
      name: 'Charter Requests',
      path: '/admin/charter',
      icon: <ClipboardList className="h-5 w-5" />,
    },
    { name: 'Settings', path: '/admin/settings', icon: <Settings className="h-5 w-5" /> },
  ];

  return (
    <div className="flex min-h-screen bg-slate-100 font-sans">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 transform flex-col bg-slate-900 text-white transition-transform duration-300 ease-in-out lg:static ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        <div className="flex items-center justify-between border-b border-slate-800 p-6">
          <div
            className="flex cursor-pointer items-center gap-3"
            onClick={() => navigate('/admin')}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500">
              <Anchor className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight">Admin Portal</span>
          </div>
          <button
            className="text-slate-400 hover:text-white lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto p-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/admin'}
              onClick={() => setIsSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`
              }
            >
              {item.icon}
              <span className="font-medium">{item.name}</span>
            </NavLink>
          ))}
        </nav>

        <div className="shrink-0 border-t border-slate-800 p-4">
          <button
            onClick={() => navigate('/login')}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
          >
            <LogOut className="h-5 w-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex h-screen min-w-0 flex-1 flex-col overflow-hidden">
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-4 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              className="text-slate-500 hover:text-slate-800 lg:hidden"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="line-clamp-1 text-lg font-semibold text-slate-800 lg:text-xl">
              Saigon Waterbus
            </h1>
          </div>
          <div className="flex shrink-0 items-center gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
              AD
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-auto p-4 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
