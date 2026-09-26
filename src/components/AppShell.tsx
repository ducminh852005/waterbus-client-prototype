import { Outlet } from "react-router-dom";
import { BookingProvider } from "../context/BookingContext";

export default function AppShell() {
  return (
    <BookingProvider>
      {/* AppShell provides common layout wrappers. 
          For this prototype, pages self-contain their headers and footers. */}
      <Outlet />
    </BookingProvider>
  );
}
