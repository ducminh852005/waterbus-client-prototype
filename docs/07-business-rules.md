# 7. Business Rules & Constraints

1. **One-Way Routing:** Applies One-Way ticket logic. A "round-trip" ticket is simply two separate one-way tickets.
2. **No Refund/Exchange:** Once booked, tickets cannot be canceled or changed online.
3. **Boarding Time:** Users must be present 15 minutes prior to departure time.
4. **Anti-Double Scanning:** The database must implement Transaction isolation levels or locking (Optimistic Locking) on the ticket row when updating the USED status to prevent a scenario where a QR code is scanned simultaneously by multiple staff members and both report success.
5. **Automatic Trip Generation:** The system automatically generates `trip_instance` records and their corresponding empty seat lists in the Inventory DB based on fixed daily/weekly schedules.
