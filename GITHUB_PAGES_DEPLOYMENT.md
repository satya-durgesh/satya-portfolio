# 🚀 GitHub Pages Deployment Guide - Complete Steps

## 📋 Your Portfolio is Ready!

All files are saved in: **`D:\portfoliio`**

---

## 🎯 Step-by-Step Deployment to GitHub Pages

### **Step 1: Create GitHub Account** (If you don't have one)

1. Go to: **https://github.com**
2. Click **"Sign up"**
3. Create your account (it's FREE!)
4. Verify your email

---

### **Step 2: Install Git** (If not installed)

1. Download Git from: **https://git-scm.com/download/win**
2. Install with default settings
3. Restart your computer
4. Verify installation:
   - Open PowerShell
   - Run: `git --version`

---

### **Step 3: Create New Repository on GitHub**

1. **Login to GitHub**
2. Click the **"+"** icon in top right → **"New repository"**
3. **Repository name**: `satya-portfolio` (or any name you like)
4. **Description**: "F1 Themed Professional Portfolio - Satya Durgesh Keerthi"
5. Make sure it's **Public** (required for free GitHub Pages)
6. **DO NOT** check "Initialize with README"
7. Click **"Create repository"**

---

### **Step 4: Upload Files to GitHub**

#### **Option A: Using GitHub Website (Easiest - No Git Required)**

1. After creating repository, you'll see a page with upload instructions
2. Click **"uploading an existing file"**
3. **Drag and drop ALL files** from `D:\portfoliio`:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `headshot.jpg`
   - `package.json` (optional)
   - `vite.config.js` (optional)
   - Any other files
4. Scroll down, add commit message: **"Initial portfolio upload"**
5. Click **"Commit changes"**

#### **Option B: Using Git Commands (Recommended)**

1. **Open PowerShell** in `D:\portfoliio`:
   ```powershell
   cd D:\portfoliio
   ```

2. **Initialize Git**:
   ```bash
   git init
   ```

3. **Add all files**:
   ```bash
   git add .
   ```

4. **Commit files**:
   ```bash
   git commit -m "Initial portfolio commit"
   ```

5. **Add GitHub repository** (replace YOUR_USERNAME with your GitHub username):
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/satya-portfolio.git
   ```

6. **Push to GitHub**:
   ```bash
   git branch -M main
   git push -u origin main
   ```

   - You'll be asked for GitHub username and password
   - Use a **Personal Access Token** as password (see Step 5)

---

### **Step 5: Create Personal Access Token** (For Git Commands)

1. Go to GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
2. Click **"Generate new token"**
3. Select **"repo"** scope
4. Click **"Generate token"**
5. **Copy the token** (you won't see it again!)
6. Use this token as your password when pushing

---

### **Step 6: Enable GitHub Pages**

1. **Go to your repository** on GitHub
2. Click **"Settings"** tab (top right)
3. Scroll down to **"Pages"** section (left sidebar)
4. Under **"Source"**, select:
   - **Branch**: `main`
   - **Folder**: `/` (root)
5. Click **"Save"**

---

### **Step 7: Get Your Live Link! 🎉**

1. **Wait 1-2 minutes** for GitHub to build your site
2. Your portfolio will be live at:
   ```
   https://YOUR_USERNAME.github.io/satya-portfolio/
   ```
   Replace `YOUR_USERNAME` with your actual GitHub username

3. **Or find it in Settings → Pages**:
   - Scroll to "Pages" section
   - You'll see: **"Your site is live at..."**

---

## ✅ Verification Checklist

- [ ] GitHub account created
- [ ] Repository created (public)
- [ ] All files uploaded
- [ ] GitHub Pages enabled
- [ ] Site is live and accessible
- [ ] All images load correctly
- [ ] Navigation works
- [ ] Contact form works

---

## 🔄 Update Your Portfolio (Future)

### **To make changes:**

1. Edit files in `D:\portfoliio`
2. **Using Git**:
   ```bash
   cd D:\portfoliio
   git add .
   git commit -m "Update portfolio"
   git push
   ```
3. **Or using GitHub website**:
   - Go to repository
   - Click file → Edit
   - Make changes → Commit

4. **Changes go live in 1-2 minutes!**

---

## 🎨 Custom Domain (Optional)

### **To use your own domain (e.g., satya-durgesh.com):**

1. In GitHub repository → **Settings → Pages**
2. Under **"Custom domain"**, enter your domain
3. Update your domain's DNS settings:
   - Add CNAME record pointing to: `YOUR_USERNAME.github.io`
4. GitHub will automatically add HTTPS!

---

## 📱 Share Your Portfolio

Your portfolio link:
```
https://YOUR_USERNAME.github.io/satya-portfolio/
```

**Add this link to:**
- ✅ LinkedIn profile
- ✅ Resume/CV
- ✅ Email signature
- ✅ Business cards
- ✅ Social media profiles

---

## 🆘 Troubleshooting

### **"404 Not Found"**
- Wait 2-3 minutes after enabling Pages
- Check repository is **Public**
- Verify `index.html` is in root folder

### **"Images not loading"**
- Make sure `headshot.jpg` is in same folder as `index.html`
- Check file paths are correct (no spaces in filenames)

### **"Styles not working"**
- Verify `styles.css` is uploaded
- Check file paths in `index.html`

### **"Git push fails"**
- Use Personal Access Token, not password
- Check repository URL is correct

---

## 📂 Files You Need to Upload

**Required files:**
- ✅ `index.html`
- ✅ `styles.css`
- ✅ `script.js`
- ✅ `headshot.jpg`

**Optional files:**
- `package.json`
- `vite.config.js`
- `README.md`
- `.gitignore`

---

## 🎯 Quick Reference Commands

```bash
# Navigate to folder
cd D:\portfoliio

# Initialize Git (first time only)
git init

# Add files
git add .

# Commit
git commit -m "Your message"

# Connect to GitHub (first time only)
git remote add origin https://github.com/YOUR_USERNAME/satya-portfolio.git

# Push to GitHub
git push -u origin main

# Update later
git add .
git commit -m "Update"
git push
```

---

## ✅ You're Done!

**Your portfolio will be live at:**
```
https://YOUR_USERNAME.github.io/satya-portfolio/
```

**Share it everywhere and start getting noticed! 🚀**

---

## 📞 Need Help?

- **GitHub Docs**: https://docs.github.com/en/pages
- **GitHub Support**: https://support.github.com
- **Git Tutorial**: https://git-scm.com/docs

---

**Good luck with your portfolio! 🏁✨**

