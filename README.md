# Modern Mobile Shop Website

A fully functional mobile shop website built with React, Vite, and custom CSS (no Tailwind classes used).

## 🎨 Features

### Pages
- **Home** - Hero section with featured smartphones and CTA buttons
- **Products** - Full product catalog with search and category filters
- **Services** - Mobile repair services and warranty plans  
- **Contact** - Contact form with WhatsApp integration and map section
- **Login** - User authentication page

### Components
- **Navbar** - Sticky navigation with logo, menu links, cart icon with count, and mobile menu
- **ProductCard** - Reusable card component with image, rating, price, and add to cart
- **Footer** - Social links, quick links, and contact information

## 🛠️ Tech Stack

- **React 18.3** - UI library with functional components and hooks
- **React Router DOM** - Client-side routing
- **Vite** - Fast build tool and dev server
- **Custom CSS** - Pure CSS with modern styling (no Tailwind utility classes)

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation component
│   │   ├── Footer.tsx          # Footer component
│   │   └── ProductCard.tsx     # Reusable product card
│   ├── pages/
│   │   ├── Home.tsx            # Home page
│   │   ├── Products.tsx        # Products listing page
│   │   ├── Services.tsx        # Services page
│   │   ├── Contact.tsx         # Contact form page
│   │   └── Login.tsx           # Login page
│   └── App.tsx                 # Main app with routing
├── data/
│   └── products.js             # Dummy product data
└── styles/
    └── index.css               # Main CSS file with all styles
```

## 🎨 Design System

### Colors
- Primary: Blue/Purple gradient (`#667eea` to `#764ba2`)
- Background: Light gray (`#f7fafc`) and White (`#ffffff`)
- Text: Dark gray (`#2d3748`) and medium gray (`#718096`)

### Typography
- Font Family: Poppins (Google Fonts)
- Responsive font sizes
- Smooth font weight transitions

### Layout
- Mobile-first responsive design
- Breakpoints: 768px (tablet), 480px (mobile)
- Flexible grid layouts using CSS Grid

### Components
- Rounded corners (0.375rem - 1rem)
- Smooth hover animations (0.3s ease)
- Card-based design with shadows
- Gradient buttons and accents

## ✨ Features

### Shopping Experience
- **Search Functionality** - Real-time product search
- **Category Filters** - Filter by Smartphones or Accessories
- **Cart System** - Add to cart with visual feedback and counter
- **Product Ratings** - 5-star rating display with review count

### Services
- Mobile Repair
- Screen Replacement  
- Battery Replacement
- Extended Warranty Plans (Basic, Premium, Ultimate)
- Data Transfer
- Trade-In Program

### Contact
- Contact form with validation
- WhatsApp integration button
- Store location details
- Interactive map placeholder

## 🚀 Running the App

The app uses Vite for development and building. All dependencies are already installed.

## 📦 Data

Product data is stored in `/src/data/products.js` with:
- 12 sample products (smartphones and accessories)
- Product details: name, category, price, rating, reviews, image, badge
- 6 service offerings with descriptions

## 🎯 Key Features

1. **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
2. **Smooth Animations** - Hover effects, page transitions, and notifications
3. **Modern UI** - Clean, professional design with gradient accents
4. **Component-Based** - Reusable React components with TypeScript
5. **Client-Side Routing** - Fast navigation with React Router
6. **Shopping Cart** - Functional cart with item counter and notifications
7. **Search & Filter** - Real-time product search and category filtering

## 🎨 CSS Architecture

All styles are in `/src/styles/index.css` using:
- CSS Custom Properties (variables) for consistency
- BEM-like naming conventions
- Mobile-first media queries
- Smooth transitions and animations
- No Tailwind utility classes

## 📱 Mobile Menu

The navbar includes a responsive mobile menu that:
- Collapses on screens < 768px
- Toggles with hamburger icon
- Displays full menu on larger screens

## 🛒 Shopping Cart

- Visual cart icon in navbar
- Real-time cart counter badge
- Add to cart notifications with animations
- State management using React hooks

## 🎭 Animations

- Fade-in animations for hero section
- Hover scale effects on cards and buttons
- Smooth page transitions
- Slide-in notification toast

## 🔧 Customization

To customize:
1. **Colors** - Edit CSS variables in `:root` selector
2. **Products** - Modify `/src/data/products.js`
3. **Styling** - Update `/src/styles/index.css`
4. **Components** - Edit files in `/src/app/components/`

## 📄 License

This is a demo project for educational purposes.
