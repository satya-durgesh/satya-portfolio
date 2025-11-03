# 🚀 Run These Commands to Setup Git & GitHub

## Important: Restart PowerShell First!

If you just installed Git, **close and reopen PowerShell** before running these commands.

---

## Step 1: Verify Git is Working

```powershell
git --version
```

You should see something like: `git version 2.x.x`

---

## Step 2: Configure Git (First Time Only)

Replace with your actual name and email:

```powershell
git config --global user.name "Satya Durgesh Keerthi"
git config --global user.email "satya.dugesh4@gmail.com"
```

---

## Step 3: Initialize Git Repository

```powershell
cd D:\portfoliio
git init
```

---

## Step 4: Add All Files

```powershell
git add .
```

---

## Step 5: Create Initial Commit

```powershell
git commit -m "Initial portfolio commit"
```

---

## Step 6: Set Main Branch

```powershell
git branch -M main
```

---

## Step 7: Create GitHub Repository First!

**Before the next step**, you need to:
1. Go to https://github.com
2. Click "+" → "New repository"
3. Name it (e.g., `satya-portfolio` or `portfolio`)
4. Make it **PUBLIC** (required for free GitHub Pages)
5. **DO NOT** check "Initialize with README"
6. Click "Create repository"
7. Copy the repository URL (e.g., `https://github.com/YOUR_USERNAME/portfolio.git`)

---

## Step 8: Connect to GitHub

**Replace `YOUR_USERNAME` and `REPO_NAME` with your actual values:**

```powershell
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
```

Example:
```powershell
git remote add origin https://github.com/satyadurgesh/portfolio.git
```

---

## Step 9: Push to GitHub

```powershell
git push -u origin main
```

**When prompted:**
- **Username**: Your GitHub username
- **Password**: Use a **Personal Access Token** (NOT your GitHub password)

### How to Get Personal Access Token:
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Name it: "Portfolio Deploy"
4. Select scope: **`repo`** (check the box)
5. Click "Generate token"
6. **Copy the token immediately** (you won't see it again!)
7. Use this token as your password when pushing

---

## Step 10: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab (top right)
3. Scroll down to **"Pages"** (left sidebar)
4. Under **"Source"**:
   - **Branch**: Select `main`
   - **Folder**: Select `/` (root)
5. Click **"Save"**

---

## Step 11: Your Portfolio is Live! 🎉

Wait 1-2 minutes, then visit:
```
https://YOUR_USERNAME.github.io/REPO_NAME/
```

---

## Quick Copy-Paste (All Steps)

```powershell
# Verify Git
git --version

# Configure Git (replace with your info)
git config --global user.name "Satya Durgesh Keerthi"
git config --global user.email "satya.dugesh4@gmail.com"

# Navigate to project
cd D:\portfoliio

# Initialize and setup
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main

# Add GitHub remote (REPLACE WITH YOUR REPO URL!)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub (use Personal Access Token as password)
git push -u origin main
```

---

## Troubleshooting

### "Git not recognized"
- **Solution**: Restart PowerShell after installing Git
- Or close and reopen your terminal

### "Authentication failed"
- **Solution**: Use Personal Access Token, not password
- Make sure token has "repo" scope

### "Repository not found"
- **Solution**: Check repository URL is correct
- Make sure repository is PUBLIC

### "Push failed"
- **Solution**: Make sure you created the repository on GitHub first
- Check you're using the correct repository URL

---

**Ready? Start with Step 1! 🏁**

