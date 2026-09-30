# 6. Frontend Details (Mobile App - Flutter)

The Mobile App system uses a single Flutter codebase but renders different UIs based on the JWT token Role returned after login.

## 6.1 Customer Mode

- **Navigation (Bottom Navigation):** Home (Booking), Ticket Wallet, Profile.
- **Booking Workflow:** Interactive seat map (zoomable using `InteractiveViewer`), smooth ticket selection flow.
- **Offline Capabilities:** Stores purchased tickets locally (using `sqflite` or `hive`) so the QR can be opened at the pier even without a 4G connection.
- **Push Notifications:** Departure reminder 30 minutes in advance.

## 6.2 Staff Mode

- **Navigation:** Extremely minimalist. Focuses on a single main screen: the Camera.
- **Scanner UI:**
  - Uses a package like `mobile_scanner` for continuous QR recognition with low latency.
  - Flashlight button for evening/sunset shifts.
  - Manual ticket code entry field (in case the customer's phone screen is cracked and the camera cannot read the QR).
- **Result Feedback (BottomSheet/Dialog):**
  - Optimized UI for glanceability. Large text, clear color coding (Green/Red). Auto-closes popup after 2 seconds to scan the next person continuously without tapping.
- **Local Statistics:** Displays a counter for the number of passengers boarded on the current trip (e.g., 45/50 seats checked in).

## 6.3 Admin Web Dashboard (React)

- **Routing & Scheduling Management:** Add/edit/delete station, route, and ship information, and create flexible daily/weekly running schedules.
- **Analytics & Reports:** Revenue charts by day/month/route, seat occupancy rate for each trip, and staff ticket scanning history.

## 6.4 Missing & Required Pages for Web Client

### Customer Facing

- **Tra cứu / Quản lý vé:** `/tickets/lookup` và `/bookings/:bookingCode`. Allow customers to view tickets, QR codes, and booking status using `bookingCode` and `phone/email`.
- **Payment Lifecycle:** `/payment/callback`, `/payment/failed` (or merged into `/payment/result`). Used to handle redirects from VNPay/MoMo, verifying the payment status with BE and navigating to `/success` or error UI.
- **Account Recovery:** `/forgot-password`, `/reset-password`
- **Member Profile (Phase 2):** `/account`, `/account/bookings`, `/account/vouchers`.
- **Legal & Policies:** `/terms`, `/privacy`, `/refund-policy`. Currently these are placeholder links `#`.

### Admin Facing

- **Admin Authentication:** `/admin/login`. Route guard needed for `/admin/charter`.

## 6.5 Action Items / Known Issues in Current Implementation

- **Encoding:** Text localization/Vietnamese text encoding bugs need to be resolved.
- **React Warnings:** Missing `onChange` handlers for several input components on Register page.
- **Form Submissions:** Register/Login logic are placeholders and require form submission bindings.
- **Seat Mapping:** `Seat.status` mock logic needs to be mapped to ticket reservation from `tripInstanceId`.
- **UX Improvement (Round-trips):** Clarify the flow on `/trips` and `/seats` to distinguish "Outbound (Chiều đi)" vs "Return (Chiều về)".
