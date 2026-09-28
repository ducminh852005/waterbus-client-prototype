# 1. Project Overview

**Domain:** Public Transportation / Ticketing System

**Core Entities:** Station (Bạch Đằng, Thủ Thiêm, Bình An, etc.), Route, Schedule (Daily/Weekend), Ship, Seat, Ticket, User/Passenger, Staff.

**Objective:** Provide a seamless, high-performance platform that allows users to view schedules, book tickets, and receive electronic tickets (QR codes). Additionally, provide a fast ticket inspection tool for staff at the stations.

## 1.1 Feature Scope

- **Customer Web (React):** Landing page, view schedules & routes, interactive seat selection, checkout/payment process, email ticket delivery, user profile.
- **Admin Web Dashboard (React):** Manage routes, stations, ships, schedules; setup pricing rules; manage staff/customer accounts; track revenue reports & operational statistics.
- **Customer Mobile App (Flutter):** Login/authentication, search & book tickets, interactive seat map, e-wallet/save offline QR tickets, transaction history.
- **Staff Mobile App (Flutter):** Internal staff login, QR scanning camera interface, verify passenger info, update check-in status (used ticket).
