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

📚 Documentation Requirements

✅ API Documentation
- Swagger/OpenAPI documentation
- API endpoint specifications
- Authentication requirements

✅ User Documentation
- User guides
- Admin dashboard documentation
- Payment process documentation

✅ Technical Documentation
- Architecture diagrams
- Database schema
- Deployment procedures

🏆 License

MIT License. All rights reserved to SchoolMall KE.

Phase 1: Planning & Setup
Goal: Lay the foundation for your stack and project structure

✅ Tasks:

 Finalize UI/UX wireframes or designs (Figma/Sketch)

 Set up GitHub repo and Git version control

 Create project structure in Next.js

 Set up Tailwind CSS with Next.js

 Choose your CMS (Sanity.io or Strapi) and connect

 Set up Supabase (PostgreSQL + Auth + Storage if needed)

 Set up environment variables using .env.local

🔧 Tools:

Figma (UI/UX design)

GitHub (source control)

Vercel + Railway accounts

Trello/Notion (project tracking)

🔹 Phase 2: Frontend Development
Goal: Build responsive and fast UI for key pages

✅ Core Pages:

 Home Page

 Product Listing Page (with categories)

 Product Detail Page

 Cart Page

 Checkout Page

 Contact/About Page

 Admin Dashboard (optional now)

💡 Use:

Tailwind CSS for layout and styling

Framer Motion for animations

Dynamic routing in Next.js

SEO optimization with <Head> tags and image optimization

🔹 Phase 3: Backend & CMS Integration
Goal: Connect data sources and power the site with dynamic content

✅ Tasks:

 Connect frontend to Sanity.io or Strapi for products/content

 Set up product schema (name, price, stock, category, image, etc.)

 Use Supabase for cart and user data

 Create API routes in Next.js for handling:

 Cart updates

 Order submissions

 Stock management

🔹 Phase 4: Payments & Authentication
Goal: Allow secure logins and checkout

✅ Tasks:

 Integrate NextAuth.js with Supabase or Clerk.dev

Google/email/password sign-in

 Integrate MPesa API

Create secure server-side endpoint for payment requests

Handle callbacks and confirmations

 Secure API routes with middleware

🔐 Tip: Use HTTPS + token-based auth for secure MPesa integrations

🔹 Phase 5: Hosting, SEO, and Performance
Goal: Make it live, fast, and discoverable

✅ Tasks:

 Deploy frontend to Vercel

 Deploy backend & Supabase DB on Railway

 Add SEO best practices (meta tags, OG tags, structured data)

 Enable image compression and lazy loading

 Configure domain (schoolmall.co.ke)

 Set up 301 redirects if migrating from old site

�� Phase 6: Analytics and Optimization
Goal: Track users and ensure smooth UX

✅ Tasks:
- Install Google Analytics 4
- Install Hotjar or Microsoft Clarity
- Perform user testing
- Lighthouse audit (check Core Web Vitals)
- Improve mobile performance and accessibility

🔹 Phase 7: Admin Panel (Optional or Later Phase)
Goal: Enable easy management of orders, stock, and customers

✅ Features:
- View/add/edit/delete products
- Order management view
- Customer list and order history
- REST API integration or CMS-based dashboard
- Error logging and monitoring
- Backup and recovery procedures
- User role management
- Analytics dashboard

🔹 Phase 8: Error Handling & Monitoring
Goal: Ensure robust error handling and system monitoring

✅ Tasks:
- Implement global error boundary
- Set up error logging (Sentry/LogRocket)
- Create fallback UI components
- Implement retry mechanisms for API calls
- Set up monitoring alerts
- Create error reporting system
- Implement graceful degradation
- Set up automated backups

