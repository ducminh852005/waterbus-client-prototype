import { createBrowserRouter } from 'react-router-dom';

// Layouts
import MobileCustomerLayout from './components/layouts/MobileCustomerLayout';
import AdminLayout from './components/layouts/AdminLayout';
import StaffLayout from './components/layouts/StaffLayout';

// Customer Pages
import Home from './pages/Home';
import BookingSearch from './pages/BookingSearch';
import BookingTripSelection from './pages/BookingTripSelection';
import BookingSeatSelection from './pages/BookingSeatSelection';
import BookingPassengerInfo from './pages/BookingPassengerInfo';
import BookingPayment from './pages/BookingPayment';
import BookingSuccess from './pages/BookingSuccess';
import Wallet from './pages/Wallet';
import Profile from './pages/Profile';
import LiveTracking from './pages/LiveTracking';

// Common Pages
import Login from './pages/Login';
import Register from './pages/Register';

// Staff Pages
import StaffDashboard from './pages/StaffDashboard';
import StaffScanner from './pages/StaffScanner';
import StaffProfile from './pages/StaffProfile';

// Admin Pages
import AdminDashboard from './pages/AdminDashboard';
import AdminRoutes from './pages/AdminRoutes';
import AdminFleet from './pages/AdminFleet';
import AdminSchedules from './pages/AdminSchedules';
import AdminCharter from './pages/AdminCharter';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MobileCustomerLayout,
    children: [
      { index: true, Component: Home },
      { path: 'search', Component: BookingSearch },
      { path: 'trips', Component: BookingTripSelection },
      { path: 'seats', Component: BookingSeatSelection },
      { path: 'passenger-info', Component: BookingPassengerInfo },
      { path: 'payment', Component: BookingPayment },
      { path: 'success', Component: BookingSuccess },
      { path: 'wallet', Component: Wallet },
      { path: 'profile', Component: Profile },
      { path: 'live', Component: LiveTracking },
    ],
  },
  {
    path: '/admin',
    Component: AdminLayout,
    children: [
      { index: true, Component: AdminDashboard },
      { path: 'routes', Component: AdminRoutes },
      { path: 'fleet', Component: AdminFleet },
      { path: 'schedules', Component: AdminSchedules },
      { path: 'charter', Component: AdminCharter },
    ],
  },
  {
    path: '/staff',
    Component: StaffLayout,
    children: [
      { index: true, Component: StaffDashboard },
      { path: 'scanner', Component: StaffScanner },
      { path: 'profile', Component: StaffProfile },
    ],
  },
  { path: '/login', Component: Login },
  { path: '/register', Component: Register },
]);
