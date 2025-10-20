# Ayyubi Accountants Website

A fully responsive, animated, production-ready website for Ayyubi Accountants built with Next.js, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Fully Responsive Design**: Mobile-first approach with optimized layouts for all devices
- **Dark Mode Support**: Persistent theme switching with next-themes
- **Smooth Animations**: Framer Motion animations throughout the site
- **Professional Design**: Navy/blue, gray/teal, and gold/orange color scheme
- **SEO Optimized**: Meta tags, Open Graph, structured data (JSON-LD)
- **Accessible**: WCAG AA compliant with keyboard navigation support
- **Performance Optimized**: Next.js Image optimization, code splitting, lazy loading

## 📱 Pages & Routes

- `/` - Home page with hero, services, testimonials, and counters
- `/about` - About us with mission, vision, values, and team
- `/services` - Services index with filtering and search
- `/services/[slug]` - Individual service detail pages (16 services)
- `/contact` - Contact form with Google Maps integration
- `/blog` - Blog index with category filtering
- `/blog/[slug]` - Individual blog post pages
- `/careers` - Careers page with job listings
- `/careers/[slug]` - Individual job detail pages with application form
- `/privacy-policy` - Privacy policy page
- `/terms` - Terms and conditions page
- `/faq` - FAQ page with search and accordion

## 🛠 Technology Stack

- **Framework**: Next.js 13.5 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth transitions
- **Components**: Radix UI components via shadcn/ui
- **Icons**: Lucide React icons
- **Fonts**: Inter font family
- **Theme**: next-themes for dark mode
- **Forms**: React Hook Form with Zod validation
- **TypeScript**: Full type safety

## 🎨 Design System

### Colors
- **Primary**: Navy/Blue (#2563eb)
- **Secondary**: Teal (#14b8a6)
- **Accent**: Orange (#f97316)
- **Success**: Green (#22c55e)
- **Warning**: Yellow (#f59e0b)
- **Error**: Red (#ef4444)

### Typography
- **Font Family**: Inter
- **Headings**: 120% line height, 3 weights max
- **Body**: 150% line height for readability

### Spacing
- **System**: 8px grid system
- **Breakpoints**: Mobile (768px), Tablet (1024px), Desktop (1280px+)

## 🏗 Project Structure

```
├── app/                    # Next.js app directory
│   ├── (routes)/          # Page routes
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   └── *.tsx             # Custom components
├── data/                 # Static data files
├── lib/                  # Utility functions
└── public/              # Static assets
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ayyubi-accountants
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build & Deployment

### Local Build
```bash
npm run build
npm run start
```

### Deploy to Vercel (Recommended)
1. Connect your repository to Vercel
2. Configure environment variables if needed
3. Deploy automatically on push to main branch

### Deploy to Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify
3. Configure redirects for client-side routing

### Deploy to GitHub Pages
1. Update `next.config.js` for GitHub Pages
2. Run: `npm run build`
3. Deploy the `out` folder to gh-pages branch

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for local development:

```env
# Contact form (optional - uses console.log by default)
SENDGRID_API_KEY=your_sendgrid_key
FROM_EMAIL=info@ayyubiaccountants.co.uk
TO_EMAIL=info@ayyubiaccountants.co.uk

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

### Customization

#### Update Company Information
Edit the following files:
- `/data/services.js` - Service offerings
- `/data/team.js` - Team members
- `/data/blog.js` - Blog posts
- `/data/jobs.js` - Job listings
- `/data/testimonials.js` - Client testimonials
- `/data/faqs.js` - Frequently asked questions

#### Modify Contact Information
Update contact details in:
- `/components/Header.tsx`
- `/components/Footer.tsx`
- `/app/contact/page.tsx`
- `/app/layout.tsx` (structured data)

#### Change Branding
- Update logo and favicon in `/public`
- Modify colors in `tailwind.config.ts`
- Update company name throughout the codebase

## 📊 Performance

The website is optimized for performance with:
- Next.js Image optimization for all images
- Code splitting and lazy loading
- Optimized bundle size
- Lighthouse score target: 90+

## 🔒 Security

- Form validation with Zod
- XSS protection
- CSRF protection via Next.js
- Secure headers configuration

## 📧 Contact Form Integration

The contact form includes API route (`/api/contact/route.ts`) with:
- Server-side validation
- Email sending capability (requires configuration)
- Error handling
- Success/failure responses

To enable email sending:
1. Set up SendGrid, Mailgun, or similar service
2. Add API keys to environment variables
3. Update the API route with your email provider logic

## 🆘 Support

For support and questions:
- Email: info@ayyubiaccountants.co.uk
- Phone: +44 7402 448109

## 📄 License

This project is proprietary and confidential. All rights reserved.

---

Built with ❤️ for Ayyubi Accountants