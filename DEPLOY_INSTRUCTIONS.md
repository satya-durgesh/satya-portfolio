# 🚀 Deploy Your Portfolio to GitHub Pages

## Quick Setup (5 minutes)

### Option 1: Automated Script (Easiest)

1. **Install Git** (if not installed):
   - Download: https://git-scm.com/download/win
   - Install with defaults
   - Restart PowerShell

2. **Run the setup script**:
   ```powershell
   cd D:\portfoliio
   .\setup-git-and-deploy.ps1
   ```

3. **Follow the prompts** - it will guide you through everything!

---

### Option 2: Manual Setup

#### 1. Install Git
- Download from: https://git-scm.com/download/win
- Install with default settings

#### 2. Create GitHub Repository
1. Go to https://github.com
2. Click "+" → "New repository"
3. Name it (e.g., `satya-portfolio`)
4. Make it **PUBLIC**
5. **Don't** initialize with README
6. Click "Create repository"
7. Copy the repository URL

#### 3. Initialize Git and Push

Open PowerShell in `D:\portfoliio`:

```powershell
# Initialize Git
git init

# Configure Git (first time only)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Set main branch
git branch -M main

# Add GitHub remote (replace with your URL)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git push -u origin main
```

**Note**: When prompted for password, use a **Personal Access Token**:
- GitHub → Settings → Developer settings → Personal access tokens
- Generate new token with "repo" scope
- Use token as password

#### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source":
   - Branch: `main`
   - Folder: `/` (root)
4. Click **Save**

Wait 1-2 minutes, then visit:
```
https://YOUR_USERNAME.github.io/REPO_NAME/
```

---

## Update Your Portfolio

After making changes to your portfolio:

```powershell
cd D:\portfoliio
git add .
git commit -m "Update portfolio"
git push
```

Changes will be live in 1-2 minutes!

---

## Files You Need

Make sure these files are in your repository:
- ✅ `index.html`
- ✅ `styles.css`
- ✅ `script.js`
- ✅ `headshot.jpg`
- ✅ `.gitignore`

---

## Your Live Portfolio URL

After deployment, your portfolio will be available at:
```
https://YOUR_USERNAME.github.io/REPO_NAME/
```

Replace:
- `YOUR_USERNAME` with your GitHub username
- `REPO_NAME` with your repository name

---

## Need Help?

See `GIT_SETUP_QUICK_START.md` for detailed instructions.

---

**Ready to go live? Let's deploy! 🏁**

