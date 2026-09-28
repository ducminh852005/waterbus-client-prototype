# 3. Microservices Architecture Design

## 3.1 Core Microservices (Updated to new standards)

The system is divided into 6 independent Microservices (Bounded Contexts), communicating via gRPC (synchronous calls) and Apache Kafka (asynchronous calls):

1. **Identity & Access Management (IAM):** Account management (UUID), Roles, Email OTP.
2. **Booking Service:** Order management (Master), Ticket issuance (anti-fraud QR Token Hash), Customer Voucher Wallet, and Ticket Scan History (Scan Events) from Staff POS devices.
3. **Payment Service (PCI-DSS):** Secure card/wallet storage (Tokenized Vault), payment gateway transactions (VNPAY, MoMo), and refund reconciliation (Refund Ledger).
4. **Inventory & Real-time Seat Engine:** Core seat locking engine using Redis TTL, managing `hold_token` and conflict resolution (Optimistic Locking).
5. **Fleet & Schedule Management Service:** Fleet management, physical seat layout, schedules, actual trips, and **Real-time GPS Tracking (Telemetries)**.
6. **Catalog & Route Management Service:** Static data management (Stations, Routes, Stops), Complex Pricing, and **Tourist Audio Guide** (triggered by GPS radius).

## 3.2 High-Level Architecture Diagram

_(See `mermaids/cloud-deployment.mmd` for the Mermaid source code)_

## 3.3 Asynchronous Communication Architecture (Event-Driven with Apache Kafka)

In the new architecture, the booking and payment flows are clearly decoupled across services.

### Kafka Event-Driven Architecture Diagram

_(See `mermaids/kafka-event-driven.mmd` for the Mermaid source code)_

### Typical Ticket Booking Flow via Kafka:

1. **Seat Locking:** User selects a seat on the App. Frontend calls API to `Inventory Service`. This service locks the seat in Redis (sets `lock_expires_at` to 10 mins) and returns a `hold_token`. It publishes the `seat.locked` event to Kafka.
2. **Create Booking:** Frontend uses the `hold_token` to call the `Booking Service` API to create a Booking (`BOOKINGS`) and apply any discount codes (`USER_VOUCHERS`). The booking is in `PENDING` status.
3. **Payment:** Customer pays via `Payment Service` (can use a saved card in `CUSTOMER_PAYMENT_METHODS`).
4. **Distributed Consequence (Automated):** Upon successful callback, `Payment Service` publishes the `payment.success` event.
   - `Booking Service` consumes the event: Changes booking status to PAID, generates a ticket hash (`TICKETS.qr_token_hash`), and triggers notifications.
   - `Inventory Service` consumes the event: Changes `SEAT_RESERVATIONS` status to `BOOKED` (removes Redis TTL, hard saves to DB).
