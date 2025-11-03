# 🚀 Quick Start: Git Setup & GitHub Deployment

## Step 1: Install Git (if not installed)

1. **Download Git**: https://git-scm.com/download/win
2. **Install** with default settings
3. **Restart** your computer/PowerShell

Verify installation:
```powershell
git --version
```

---

## Step 2: Run the Setup Script

Open PowerShell in your project folder (`D:\portfoliio`) and run:

```powershell
.\setup-git-and-deploy.ps1
```

The script will:
- ✅ Check if Git is installed
- ✅ Initialize Git repository
- ✅ Configure Git user (if needed)
- ✅ Add all your files
- ✅ Create initial commit
- ✅ Help you connect to GitHub

---

## Step 3: Create GitHub Repository

1. **Go to**: https://github.com (create account if needed)
2. **Click**: "+" icon → "New repository"
3. **Name**: `satya-portfolio` (or any name)
4. **Make it PUBLIC** (required for free GitHub Pages)
5. **DO NOT** check "Initialize with README"
6. **Click**: "Create repository"
7. **Copy the repository URL** (e.g., `https://github.com/YOUR_USERNAME/satya-portfolio.git`)

---

## Step 4: Connect and Push

When the script asks for your repository URL, paste it in.

You'll need to authenticate:
- **Username**: Your GitHub username
- **Password**: Use a **Personal Access Token** (not your GitHub password)

### Create Personal Access Token:

1. GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
2. Click **"Generate new token (classic)"**
3. Select **"repo"** scope
4. Click **"Generate token"**
5. **Copy the token** (you won't see it again!)
6. Use this token as your password when pushing

---

## Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Scroll to **"Pages"** (left sidebar)
4. Under **"Source"**:
   - **Branch**: `main`
   - **Folder**: `/` (root)
5. Click **"Save"**

---

## Step 6: Your Portfolio is Live! 🎉

Wait 1-2 minutes, then visit:
```
https://YOUR_USERNAME.github.io/REPO_NAME/
```

---

## Manual Commands (Alternative)

If you prefer to run commands manually:

```powershell
# Navigate to project folder
cd D:\portfoliio

# Initialize Git
git init

# Configure Git (replace with your info)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Add all files
git add .

# Create initial commit
git commit -m "Initial portfolio commit"

# Set main branch
git branch -M main

# Add GitHub remote (replace with your URL)
git remote add origin https://github.com/YOUR_USERNAME/satya-portfolio.git

# Push to GitHub
git push -u origin main
```

---

## Update Your Portfolio Later

Whenever you make changes:

```powershell
cd D:\portfoliio
git add .
git commit -m "Update portfolio"
git push
```

Your changes will be live on GitHub Pages in 1-2 minutes!

---

## Troubleshooting

### "Git is not recognized"
- Install Git: https://git-scm.com/download/win
- Restart PowerShell after installation

### "Push failed - authentication"
- Use Personal Access Token, not password
- Make sure token has "repo" scope

### "Repository not found"
- Check repository URL is correct
- Make sure repository is PUBLIC

### "404 on GitHub Pages"
- Wait 2-3 minutes after enabling Pages
- Check repository is PUBLIC
- Verify `index.html` is in root folder

---

## Need Help?

- **Git Documentation**: https://git-scm.com/doc
- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **GitHub Support**: https://support.github.com

---

**Ready to race? Let's go! 🏁**

