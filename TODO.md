# Boutique Website Build - TODO

## Planned architecture
- **Frontend:** Plain HTML/CSS/JS served from Node
- **Backend:** Node + Express
- **DB:** SQLite (single file)
- **Auth:** bcrypt + JWT in httpOnly cookies
- **Roles:** admin vs customer
- **Features:** product browsing, admin product CRUD with image upload, customer orders, Stripe payment, forgot/reset password via email

## Steps
- [ ] Create project structure: `server/`, `public/`, `uploads/`, `data/`
- [ ] Add backend dependencies + `package.json`
- [ ] Implement server setup (Express, static, uploads)
- [ ] Implement SQLite schema + DB helpers
- [ ] Implement auth routes: register (optional), login, logout
- [ ] Implement password reset (request + reset endpoints) with email sender
- [ ] Implement admin middleware (role checks)
- [ ] Implement product CRUD routes (admin-only) + image upload handling
- [ ] Implement public product listing routes
- [ ] Implement order creation route (customer)
- [ ] Implement Stripe payment flow (PaymentIntent + webhook)
- [ ] Implement frontend pages: login, forgot/reset, product list, checkout/order
- [ ] Implement admin dashboard pages: products + orders management
- [ ] Add `.env.example` and README run instructions
- [ ] Run `npm install`, start server, sanity test end-to-end

