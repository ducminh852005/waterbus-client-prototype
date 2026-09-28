# 5. Core Business Workflows

## 5.1 Ticket Booking Workflow (Customer)

1. **Search & Select Trip:** Call to _Catalog Service_.
2. **Lock Seat:** Customer selects a seat. _Inventory Service_ uses Redis lock to hold the seat for 10 minutes. Status changes to LOCKED.
3. **Create Order:** _Booking Service_ creates a PENDING booking.
4. **Payment:** Call to _Payment Service_ (VNPay/MoMo).
5. **Confirmation (Event-Driven):** Payment success -> Publish event to Kafka. _Booking_ changes order status, _Inventory_ finalizes the seat (BOOKED), _Notification_ generates digital signature QR and sends the ticket.

## 5.2 Seat Lock Expiration (Exception)

- If payment is not completed within 10 minutes, the Redis TTL expires. _Inventory Service_ automatically releases the seat back to AVAILABLE status.

## 5.3 Check-in / Ticket Inspection Workflow (Staff)

This workflow requires fast processing speed to prevent congestion at the pier.

1. **Startup:** Pier staff opens the Flutter app and logs in with a STAFF account. The interface automatically switches to Scanner Mode.
2. **Scan QR:** Customer presents the QR code (from the app or email). Staff points the camera to scan it.
3. **Verification:** Staff app sends `POST /api/bookings/validate-ticket` with the decoded QR content.
4. **Backend Processing (_Booking Service_):**
   - Verify the integrity of the QR signature (anti-fraud).
   - Query the ticket database: Check the status of the ticket.
   - If the ticket is VALID and matches the departing trip: Change ticket status to USED, save `scanned_at` and `scanned_by_staff_id`.
5. **UI/UX Feedback:**
   - **Valid:** Staff app screen flashes **GREEN**, plays a "Beep" success sound, and quickly displays [Customer Name - Seat Number - Ship Name] for the staff to direct the passenger.
   - **Invalid / Already Used:** Screen flashes **RED**, device vibrates, plays a warning sound, and displays the reason (e.g., "Ticket was scanned at 10:05", "Wrong trip/Wrong date").
