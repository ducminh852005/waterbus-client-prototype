import { createBrowserRouter } from "react-router-dom";
import AppShell from "./components/AppShell";

import Home from './pages/Home';
import BookingSearch from './pages/BookingSearch';
import BookingTripSelection from './pages/BookingTripSelection';
import BookingSeatSelection from './pages/BookingSeatSelection';
import BookingPassengerInfo from './pages/BookingPassengerInfo';
import BookingPayment from './pages/BookingPayment';
import BookingSuccess from './pages/BookingSuccess';
import Login from './pages/Login';
import Register from './pages/Register';
import LiveTracking from './pages/LiveTracking';
import AdminCharter from './pages/AdminCharter';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AppShell,
    children: [
      { index: true, Component: Home },
      { path: "search", Component: BookingSearch },
      { path: "trips", Component: BookingTripSelection },
      { path: "seats", Component: BookingSeatSelection },
      { path: "passenger-info", Component: BookingPassengerInfo },
      { path: "payment", Component: BookingPayment },
      { path: "success", Component: BookingSuccess },
      { path: "login", Component: Login },
      { path: "register", Component: Register },
      { path: "live", Component: LiveTracking },
      { path: "admin/charter", Component: AdminCharter },
    ],
  },
]);
