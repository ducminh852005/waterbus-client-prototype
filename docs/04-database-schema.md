# 4. Distributed Database Schema (Conceptual Bounded Contexts)

Data is strictly divided into 6 separate Databases for 6 Microservices. Services only store **Reference IDs (REF)** of each other; there are no physical cross-database Foreign Keys.

## Overall Conceptual Diagram

_(See `mermaids/overall-conceptual-erd.mmd` for the Mermaid source code)_

---

## 4.1. Identity & Access Management (IAM DB)

Manages accounts (uses UUIDs for better security instead of auto-incrementing integers) and permissions.

_(See `mermaids/iam-service-erd.mmd` for the Mermaid source code)_

## 4.2. Booking Service (Booking DB)

The heart of customer transactions. Manages Bookings, Tickets (secure QR), Voucher Wallet, and Scan History. This design integrates Promotions into the same context for easier `final_amount` calculation.

_(See `mermaids/booking-service-erd.mmd` for the Mermaid source code)_

## 4.3. Payment Service (Payment DB)

PCI-DSS compliant payment management (stores card tokens instead of actual card numbers) and handles refund reconciliation when customers cancel tickets.

_(See `mermaids/payment-service-erd.mmd` for the Mermaid source code)_

## 4.4. Inventory & Real-time Seat Engine (Inventory DB + Redis)

The highest load service, optimized for ultra-fast reading/writing of seat status. `hold_token` is used to prevent others (or the same user calling the API twice) from taking a locked seat.

_(See `mermaids/inventory-service-erd.mmd` for the Mermaid source code)_

## 4.5. Fleet & Schedule Management Service (Fleet DB)

Manages physical assets (Ships, Seats), Running Events (Schedules, Trips), and **Digital Maps (GPS Telemetry)**.

_(See `mermaids/fleet-schedule-service-erd.mmd` for the Mermaid source code)_

## 4.6. Catalog & Route Management Service (Catalog DB)

Stores infrequently changed data. The highlight is the `ROUTE_LANDMARKS` table, allowing the Mobile App to play historical audio guides when the ship enters the GPS radius (`trigger_radius_meters`) of a landmark.

_(See `mermaids/catalog-route-service-erd.mmd` for the Mermaid source code)_

## 4.7. Notification Service

Handles sending emails and in-app notifications to users using predefined templates.

_(See `mermaids/notification-service-erd.mmd` for the Mermaid source code)_
