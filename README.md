🔖 RULES FILE FOR AI DEVELOPMENT

General Principles

Performance First: All pages must load within 2 seconds or less on 3G networks.

Mobile-First Design: Prioritize responsive design and UX for smartphones.

SEO Best Practices: Implement meta tags, semantic HTML, Open Graph tags, and JSON-LD.

Security: Secure all endpoints. Use HTTPS, rate limiting, and input sanitization.

Scalability: Use modular code and reusable components. Avoid hardcoding.

Accessibility (a11y): Meet WCAG 2.1 AA compliance.

AI Output Readability: All generated code and text must be well-commented and human-readable.

Architecture Rules

Use Next.js (latest stable) as the frontend framework.

All styling must use Tailwind CSS.

Animations should use Framer Motion.

Backend logic can be implemented via Next.js API routes.

Database must be PostgreSQL via Supabase.

Use TypeScript for type safety.

Use NextAuth.js for authentication.

Payments must integrate MPesa API and Stripe.

CMS must be Sanity.io or Strapi.

Folder Structure (src/)

- src/
  - components/
  - pages/
    - api/
  - styles/
  - lib/
  - utils/
  - hooks/

Mandatory Features

Product Listing with filters (price, category, availability)

Product Detail Pages with image gallery

Shopping Cart (stored in localStorage for guests, DB for users)

Checkout flow (with payment integration)

User login/signup

Admin interface for managing products

Contact form with email integration

📄 README.md

🌟 SchoolMall Redesign Project

A modern, mobile-first, fast and SEO-friendly e-commerce site for school-related products in Kenya.

📁 Project Structure

Frontend: Next.js + Tailwind CSS + Framer Motion

Backend/API: Next.js API Routes

Database: Supabase (PostgreSQL)

CMS: Sanity.io (preferred) / Strapi

Auth: NextAuth.js (Email & Google)

Payments: Stripe + MPesa API

Deployment: Vercel (Frontend) + Railway (Backend & DB)

✅ Requirements

Functional

User login/signup

Product listings + filters

Product detail page

Add to cart and checkout flow

Payment integration (MPesa/Stripe)

Admin dashboard (Basic CRUD)

Contact form

Non-Functional

Must load in under 2 seconds

WCAG 2.1 AA accessibility

Full mobile responsiveness

Core Web Vitals optimized

100 Lighthouse score for SEO

⚖️ Tech Stack

Area

Technology

Frontend

Next.js, Tailwind CSS, Framer Motion

Backend

Node.js (via Next.js API routes)

Database

Supabase (PostgreSQL)

CMS

Sanity.io (preferred), Strapi (optional)

Auth

NextAuth.js

Payments

Stripe, MPesa API

Hosting

Vercel (frontend), Railway (backend), Supabase (DB)

⚙️ Setup Instructions

1. Clone Repository

git clone https://github.com/your-org/schoolmall
cd schoolmall

2. Install Dependencies

npm install

3. Setup .env.local File

NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
STRIPE_SECRET_KEY=...
MPESA_CONSUMER_KEY=...
MPESA_CONSUMER_SECRET=...
NEXTAUTH_SECRET=...
NEXTAUTH_URL=http://localhost:3000

4. Start Development Server

npm run dev

🔍 Features to Implement by Folder

Folder

Implementation

pages/index.tsx

Home page UI, call to action, featured products

pages/products/index.tsx

Product list with filters

pages/products/[id].tsx

Product details with add-to-cart

pages/cart.tsx

Cart page

pages/checkout.tsx

Checkout form and payment flow

pages/api/

API handlers for auth, cart, payments

components/

Navbar, Footer, ProductCard, Modal, Loader

🔧 Deployment

Frontend: Vercel – push to main branch

Backend: Railway – deploy API routes and DB

CMS: Sanity.io – hosted content studio

✏️ Testing Checklist



🏆 License

MIT License. All rights reserved to SchoolMall KE.

