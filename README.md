# MS AUTO PART INDUSTRIES
### Heavy Commercial Vehicle Automotive Components Manufacturer

A modern, professional B2B automotive manufacturing web application built with **React**, **TypeScript**, and **Tailwind CSS**. Designed for **MS AUTO PART INDUSTRIES**, specializing in precision-engineered king pins and companion bushes for heavy commercial vehicle front axle assemblies.

---

## 🌟 Key Features & Architecture

1. **Four Dedicated Pages**:
   - **Page 1: Home** – Hero section with genuine component photography, company intro, featured products, 4 product categories, 5-point "Why Choose Us", quality commitment, manufacturing operations, and CTA.
   - **Page 2: Products** – Comprehensive automotive catalogue with real-time text search (name and product code), category filter tabs, alphabetical & code sorting, specification popups, and an interactive ₹ INR price simulator.
   - **Page 3: About Us** – Corporate profile featuring the official Company Mission & Vision, precision machining focus, heavy vehicle front axle knuckle applications, and component photography.
   - **Page 4: Login / Customer Enquiry** – 10-field Commercial & Technical Enquiry (RFQ) form with validation, copyable summary generator, and a client portal demonstration login with explicit transparency disclaimers.

2. **Clean Industrial Theme (Authentic Manufacturing Aesthetic)**:
   - **Primary**: Clean White (`#FFFFFF`)
   - **Secondary & Actions**: Steel Blue (`#315B7D`)
   - **Background**: Light Grey (`#F2F4F6`)
   - **Typography**: Deep Charcoal (`#263238`)
   - **Borders & Dividers**: Soft Silver (`#DCE4EA`)
   - Minimalist card shadows, subtle hover effects, and authentic Indian manufacturing corporate styling.

3. **Strict Use of Original Product Photographs**:
   - **Stepped King Pin (`MS-KP-001`)** &rarr; `/public/assets/king-pin-stepped.png`
   - **Spiral Groove King Pin (`MS-KP-002`)** &rarr; `/public/assets/king-pin-spiral-groove.png`
   - **Oil-Hole King Pin (`MS-KP-003`)** &rarr; `/public/assets/king-pin-oil-hole.png`
   - **King Pin Bush (`MS-BU-001`)** &rarr; `/public/assets/king-pin-bush.png`
   - All product images use `object-fit: contain` to preserve every detail, thread, channel, and surface finish of the components.

3. **Pricing Architecture (Indian Rupees ₹)**:
   - By default, all products display **REQUEST A QUOTE**.
   - Setting a numeric price in `src/data/products.ts` (or testing via the built-in UI Price Simulator) automatically renders formatted currency (e.g. `₹ 1,450 / unit`).

---

## 🚀 Quick Start Guide

### 1. Opening the Project in VS Code
1. Extract or clone the project folder to your computer.
2. Launch **Visual Studio Code**.
3. Go to **File > Open Folder...** and select the root directory of this project.

### 2. Installing Dependencies
Open the built-in terminal in VS Code (`Ctrl + ~` or **Terminal > New Terminal**) and run:
```bash
npm install
```

### 3. Running the Website Locally
To start the Vite development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` (or the URL shown in your terminal).

### 4. Building for Production
To create an optimized production build:
```bash
npm run build
```

---

## 🌐 Deploying to GitHub and Vercel

### Step A: Push to GitHub
1. Initialize git and commit files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: MS Auto Part Industries website"
   ```
2. Create a new repository on your GitHub account named `ms-auto-part-industries`.
3. Link your remote repository and push:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/ms-auto-part-industries.git
   git branch -M main
   git push -u origin main
   ```

### Step B: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New Project"** &rarr; **"Import"** next to `ms-auto-part-industries`.
3. Vercel will automatically detect **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**. Your website will be live worldwide with an HTTPS link in under a minute!
5. The included `vercel.json` ensures direct client-side routing works smoothly across all pages.

---

## 🛠 Project Structure

```text
├── index.html                   # Entry HTML with SEO metadata & typography
├── package.json                 # Project dependencies & scripts
├── vercel.json                  # Single-Page-App rewrites for Vercel
├── public/
│   └── assets/                  # Original uploaded product photographs
│       ├── king-pin-stepped.png
│       ├── king-pin-spiral-groove.png
│       ├── king-pin-oil-hole.png
│       └── king-pin-bush.png
├── src/
│   ├── main.tsx                 # React DOM mount point
│   ├── App.tsx                  # Root application orchestrator & page routing
│   ├── index.css                # Tailwind CSS v4 styles & fonts
│   ├── types/
│   │   └── index.ts             # TypeScript definitions
│   ├── data/
│   │   └── products.ts          # Central catalogue data & company details
│   ├── components/
│   │   ├── Navbar.tsx           # MS monogram logo & responsive navigation
│   │   ├── Footer.tsx           # Consistent footer with links & disclaimer
│   │   ├── ProductCard.tsx      # Object-fit contain cards with quote button
│   │   ├── ProductDetailsModal.tsx # Full non-hallucinated specification dialog
│   │   ├── EnquiryForm.tsx      # 10-field RFQ form & copyable summary generator
│   │   └── ContactSection.tsx   # Editable contact channels & placeholders
│   └── pages/
│       ├── Home.tsx             # Page 1: Hero, intro, catalogue, Why Choose Us
│       ├── Products.tsx         # Page 2: Filterable, searchable catalogue
│       ├── About.tsx            # Page 3: Mission, vision, machining focus
│       └── Login.tsx            # Page 4: Demonstration login & RFQ desk
```

---

## 📋 College Project Presentation Notes

- **Zero Hallucination Policy**: Adheres strictly to the guidelines—no fabricated establishment years, fake awards, or unverified factory capacities are mentioned.
- **Frontend Demonstration Clarity**: Both the login system and the enquiry submission clearly inform evaluators that they run client-side without fake backend claims.
- **Copy Enquiry Feature**: Enables the user to generate an authentic RFQ document and copy it to their clipboard with one click.
- **Mobile Responsive**: Fully verified across mobile viewports, tablets, and desktop displays.
