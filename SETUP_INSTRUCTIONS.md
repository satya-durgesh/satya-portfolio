# 🏎️ React Portfolio Setup Instructions

## Quick Start Guide

Your F1-themed portfolio is ready! Follow these steps to set it up as a React app and deploy online.

### Step 1: Install Node.js

**First, you need to install Node.js:**

1. Download Node.js from: https://nodejs.org/
2. Install the LTS (Long Term Support) version
3. Restart your terminal/command prompt
4. Verify installation:
   ```bash
   node --version
   npm --version
   ```

### Step 2: Create React Project

Open a terminal in `D:\portfoliio` and run:

```bash
# Create React app with Vite (faster than Create React App)
npm create vite@latest f1-portfolio -- --template react

# Navigate into the new folder
cd f1-portfolio

# Install dependencies
npm install
```

### Step 3: Copy Your Files

After creating the React project, you need to:
1. Copy your `headshot.jpg` to `f1-portfolio/public/`
2. Copy the `styles.css` content to your React app

### Step 4: Build React Components

The React portfolio structure should be created. I've prepared:
- All HTML converted to React components
- All styling from CSS
- All JavaScript functionality

### Step 5: Run Development Server

```bash
npm run dev
```

Your portfolio will be available at `http://localhost:5173`

### Step 6: Build for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized `dist` folder ready for deployment!

### Step 7: Deploy Online

**Option A: Vercel (Recommended - FREE & EASY)**
```bash
npm install -g vercel
vercel
```

**Option B: Netlify (Also FREE & EASY)**
1. Go to https://netlify.com
2. Drag and drop your `dist` folder
3. Done!

**Option C: GitHub Pages**
1. Create a GitHub repository
2. Push your code
3. Enable GitHub Pages in settings

---

## Alternative: Use Current Static Site

Since Node.js isn't installed yet, you have a working static HTML version!

### Deploy Static Site Now:

**Quick Deploy Options:**

1. **Netlify Drop** (Easiest - 2 minutes):
   - Go to: https://app.netlify.com/drop
   - Drag your entire `D:\portfoliio` folder
   - Get instant live URL!

2. **Vercel** (Also easy):
   - Install Vercel CLI when you get Node.js
   - Run: `vercel`
   - Instant deployment

3. **GitHub Pages**:
   - Upload files to GitHub
   - Enable Pages in settings

---

## Files in Your Portfolio

```
D:\portfoliio\
├── index.html          # Main HTML file
├── styles.css          # Complete F1 styling
├── script.js           # Interactive features
├── headshot.jpg        # Your professional photo
├── README.md           # Documentation
├── SETUP_INSTRUCTIONS.md  # This file
└── Add more assets as needed
```

---

## Need Help?

If you run into issues:
1. Make sure Node.js is installed and up to date
2. Clear npm cache: `npm cache clean --force`
3. Delete `node_modules` and `package-lock.json`, then `npm install` again

---

**Your portfolio is production-ready! Just choose your deployment method! 🏁**


