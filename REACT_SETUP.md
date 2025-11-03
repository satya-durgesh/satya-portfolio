# 🚀 React Portfolio - Setup & Deploy Guide

## 📍 Your Portfolio Folder Location

**Copy and paste this path into Windows File Explorer:**

```
D:\portfoliio
```

Or simply:
```
file:///D:/portfoliio
```

---

## ✅ What's Been Created

Your complete React portfolio is ready! Here's what's included:

### 📁 Folder Structure:
```
D:\portfoliio\
├── src/
│   ├── components/
│   │   ├── LoadingScreen.jsx
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── public/
│   └── headshot.jpg
├── index.html
├── package.json
├── vite.config.js
└── .gitignore
```

---

## 🔧 Step 1: Install Node.js (Required)

1. **Download Node.js**: https://nodejs.org/
2. **Install LTS version** (recommended)
3. **Restart** your computer or terminal
4. **Verify installation**:
   ```bash
   node --version
   npm --version
   ```

---

## 🚀 Step 2: Install Dependencies

Open PowerShell or Command Prompt in `D:\portfoliio`:

```bash
cd D:\portfoliio
npm install
```

This will install:
- React 18
- Vite (build tool)
- All dependencies

---

## 💻 Step 3: Run Development Server

```bash
npm run dev
```

Your portfolio will open automatically at: **http://localhost:3000**

---

## 📦 Step 4: Build for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized `dist` folder with all production files.

---

## 🌐 Step 5: Deploy Online (Get Live Link!)

### Option A: Vercel (Recommended - FREE!)

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Get instant live link!** ✨

### Option B: Netlify (Also FREE!)

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Build first**:
   ```bash
   npm run build
   ```

3. **Deploy**:
   ```bash
   netlify deploy --prod --dir=dist
   ```

### Option C: GitHub Pages

1. Create GitHub repository
2. Push your code
3. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
4. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/repo-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
5. Deploy:
   ```bash
   npm run deploy
   ```

---

## 📱 Your Portfolio Features

✅ **React Components** - Fully modular
✅ **F1 Theme** - Beautiful animations
✅ **Responsive** - Works on all devices
✅ **Fast** - Optimized with Vite
✅ **SEO Ready** - Meta tags included
✅ **Your Headshot** - Professional photo
✅ **All Your Data** - Skills, projects, experience

---

## 🎯 Quick Commands Reference

```bash
# Navigate to folder
cd D:\portfoliio

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🔗 After Deployment

Once deployed, you'll get a link like:
- `https://your-portfolio.vercel.app`
- `https://your-portfolio.netlify.app`
- `https://yourusername.github.io/portfolio`

**Share this link on:**
- LinkedIn profile
- Resume
- Email signature
- Business cards

---

## 🆘 Troubleshooting

### "npm is not recognized"
→ Install Node.js first from nodejs.org

### "Port already in use"
→ Change port in `vite.config.js` or close other apps

### "Module not found"
→ Run `npm install` again

### "Build fails"
→ Check Node.js version (should be 16+)

---

## ✅ Everything is Ready!

Your React portfolio is complete and ready to deploy!

**Just install Node.js, run `npm install`, then `npm run dev`!**

---

**Your live portfolio link will be ready in minutes! 🏁🚀**


