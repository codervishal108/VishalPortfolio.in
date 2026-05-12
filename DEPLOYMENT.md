# Deployment Guide

## Quick Start

Your portfolio is now ready to be deployed! Follow these simple steps to get your site live.

### Prerequisites
- Node.js installed locally
- Git repository set up
- GitHub account

## Local Development

1. **Clone the repository:**
```bash
git clone https://github.com/codervishal108/VishalPortfolio.in.git
cd VishalPortfolio.in
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

Visit `http://localhost:3000` to see your portfolio live!

## Build for Production

```bash
npm run build
```

This creates an optimized `dist` folder ready for deployment.

## Deployment Options

### 🚀 Option 1: Vercel (Recommended - Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Click "Deploy"
6. Done! Your site is live at `vishalportfolio.vercel.app`

### 🌐 Option 2: Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click "New site from Git"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### 📄 Option 3: GitHub Pages

1. Update `vite.config.js` to add base:
```js
export default defineConfig({
  base: '/VishalPortfolio.in/',
  plugins: [react()],
})
```

2. Build the project:
```bash
npm run build
```

3. Push `dist` folder to `gh-pages` branch:
```bash
npm install --save-dev gh-pages
npx gh-pages -d dist
```

4. Go to repository Settings → Pages
5. Select `gh-pages` branch as source
6. Your site is live at `https://codervishal108.github.io/VishalPortfolio.in`

### 🖥️ Option 4: Custom Domain with Vercel

1. Deploy on Vercel (Option 1)
2. In Vercel Dashboard, go to Settings → Domains
3. Add your custom domain
4. Follow DNS configuration steps
5. Your portfolio is now at your custom domain!

## Environment Variables (if needed)

Create a `.env.local` file:
```
VITE_API_URL=your_api_url
```

## Updating Your Portfolio

1. Make changes locally
2. Commit and push to GitHub:
```bash
git add .
git commit -m "Update portfolio"
git push
```
3. Your deployment platform auto-updates (Vercel/Netlify)

## Custom Domain Setup

### Connect Custom Domain to Vercel:
1. Register domain (GoDaddy, Namecheap, etc.)
2. In Vercel → Project Settings → Domains
3. Add your domain and follow DNS setup
4. Update nameservers at your registrar

### Connect Custom Domain to Netlify:
1. In Netlify → Site Settings → Domain Management
2. Add your domain
3. Update nameservers at your registrar

## Troubleshooting

### Build fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Port 3000 already in use
```bash
npm run dev -- --port 3001
```

### Tailwind styles not showing
Make sure `tailwind.config.js` content paths are correct

## Performance Tips

1. Optimize images before adding them
2. Use lazy loading for images
3. Minimize CSS/JS in build (automatic with Vite)
4. Enable caching headers on deployment

## Analytics Setup (Optional)

Add Google Analytics to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## SEO Optimization

Update meta tags in `index.html`:
- `<meta name="description">` - Page description
- `<meta property="og:image">` - Social preview image
- `<meta property="og:title">` - Social share title

## Support & Resources

- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)

---

**Your portfolio is ready to shine! Choose your deployment option and get it live today!** ✨
