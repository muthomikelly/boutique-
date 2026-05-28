# Boutique

A full-stack boutique e-commerce website built with Node.js, Express, SQLite, and vanilla JS.

## Features

- **Customer**: register, login, browse products, add to cart, checkout with Stripe, view orders
- **Admin**: manage products (create / edit / delete with image upload), view and update order statuses
- **Auth**: JWT in httpOnly cookies, bcrypt password hashing, forgot/reset password via email

## Stack

| Layer    | Tech                          |
|----------|-------------------------------|
| Backend  | Node.js + Express             |
| Database | SQLite via better-sqlite3     |
| Auth     | JWT + bcrypt                  |
| Payments | Stripe                        |
| Email    | Nodemailer (SMTP)             |
| Frontend | Plain HTML / CSS / Vanilla JS |

## Getting started

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment
Copy `.env.example` to `.env` and fill in your values:
```bash
copy .env.example .env
```

Key values to set:
- `JWT_SECRET` — any long random string
- `SMTP_*` — your email credentials (Gmail app password recommended)
- `STRIPE_SECRET_KEY` / `STRIPE_WEBHOOK_SECRET` — from [Stripe dashboard](https://dashboard.stripe.com)

### 3. Create the first admin user
Start the server once, then use the register endpoint and manually update the role in the DB:

```bash
# Start server
npm start

# Register via API
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Admin\",\"email\":\"admin@example.com\",\"password\":\"yourpassword\"}"

# Then open data/boutique.db with any SQLite viewer and run:
# UPDATE users SET role = 'admin' WHERE email = 'admin@example.com';
```

### 4. Stripe publishable key
In `public/js/checkout.js`, replace `YOUR_STRIPE_PUBLISHABLE_KEY` with your actual publishable key from the Stripe dashboard.

### 5. Run
```bash
# Production
npm start

# Development (auto-restart)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project structure

```
Boutique/
├── server/
│   ├── index.js              # Express app entry
│   ├── db/init.js            # SQLite schema + helpers
│   ├── middleware/
│   │   ├── auth.js           # JWT attach/require/admin
│   │   └── upload.js         # Multer image upload
│   └── routes/
│       ├── index.js          # Route registrar
│       ├── auth.js           # /api/auth/*
│       ├── products.js       # /api/products/*
│       ├── orders.js         # /api/orders/*
│       └── payments.js       # /api/payments/*
├── public/
│   ├── index.html            # Shop / product listing
│   ├── login.html
│   ├── checkout.html
│   ├── orders.html
│   ├── forgot-password.html
│   ├── reset-password.html
│   ├── css/style.css
│   ├── js/
│   │   ├── cart.js
│   │   ├── shop.js
│   │   └── checkout.js
│   └── admin/
│       ├── dashboard.html
│       ├── products.html
│       └── orders.html
├── uploads/                  # Product images (auto-created)
├── data/                     # SQLite DB file (auto-created)
├── .env
└── package.json
```
