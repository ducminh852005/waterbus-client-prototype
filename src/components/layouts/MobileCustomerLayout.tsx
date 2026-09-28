import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Home, Ticket, UserCircle } from 'lucide-react';
import { BookingProvider } from '../../context/BookingContext';
import Header from '../Header';
import Footer from '../Footer';

export default function MobileCustomerLayout() {
  return (
    <BookingProvider>
      <div className="flex min-h-screen flex-col bg-slate-50 pb-20 md:pb-0">
        {/* Desktop Header */}
        <div className="hidden md:block">
          <Header />
        </div>

        {/* Main Content */}
        <main className="w-full flex-1">
          <Outlet />
        </main>

        {/* Desktop Footer */}
        <div className="hidden md:block">
          <Footer />
        </div>

        {/* Mobile Bottom Navigation */}
        <nav className="fixed bottom-0 z-50 flex h-20 w-full items-center justify-between border-t border-slate-200 bg-white px-8 pt-3 pb-4 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.1)] md:hidden">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 ${isActive ? 'text-blue-600' : 'text-slate-400'}`
            }
          >
            <Home className="h-6 w-6" />
            <span className="text-[10px] font-medium">Home</span>
          </NavLink>

          <NavLink
            to="/wallet"
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 ${isActive ? 'text-blue-600' : 'text-slate-400'}`
            }
          >
            <Ticket className="h-6 w-6" />
            <span className="text-[10px] font-medium">Wallet</span>
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 ${isActive ? 'text-blue-600' : 'text-slate-400'}`
            }
          >
            <UserCircle className="h-6 w-6" />
            <span className="text-[10px] font-medium">Profile</span>
          </NavLink>
        </nav>
      </div>
    </BookingProvider>
  );
}
