# PowerShell Script to Setup Git and Deploy Portfolio to GitHub
# Run this script in PowerShell: .\setup-git-and-deploy.ps1

Write-Host "🏎️  Portfolio Git Setup & GitHub Deployment Script" -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host ""

# Check if Git is installed
Write-Host "Checking Git installation..." -ForegroundColor Yellow
try {
    $gitVersion = git --version
    Write-Host "✅ Git is installed: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Git is NOT installed!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install Git first:" -ForegroundColor Yellow
    Write-Host "1. Download from: https://git-scm.com/download/win" -ForegroundColor White
    Write-Host "2. Install with default settings" -ForegroundColor White
    Write-Host "3. Restart PowerShell and run this script again" -ForegroundColor White
    Write-Host ""
    Write-Host "Opening Git download page..." -ForegroundColor Yellow
    Start-Process "https://git-scm.com/download/win"
    exit 1
}

Write-Host ""
Write-Host "📋 Next Steps:" -ForegroundColor Cyan
Write-Host "1. Create a GitHub account (if you don't have one): https://github.com" -ForegroundColor White
Write-Host "2. Create a new repository on GitHub (make it PUBLIC)" -ForegroundColor White
Write-Host "3. Copy the repository URL (e.g., https://github.com/YOUR_USERNAME/portfolio.git)" -ForegroundColor White
Write-Host ""

# Get GitHub repository URL
$repoUrl = Read-Host "Enter your GitHub repository URL (or press Enter to skip)"

if ($repoUrl -eq "") {
    Write-Host ""
    Write-Host "⚠️  Skipping Git setup. You can run these commands manually:" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "git init" -ForegroundColor Cyan
    Write-Host "git add ." -ForegroundColor Cyan
    Write-Host "git commit -m 'Initial portfolio commit'" -ForegroundColor Cyan
    Write-Host "git branch -M main" -ForegroundColor Cyan
    Write-Host "git remote add origin YOUR_REPO_URL" -ForegroundColor Cyan
    Write-Host "git push -u origin main" -ForegroundColor Cyan
    Write-Host ""
    exit 0
}

# Initialize Git repository
Write-Host ""
Write-Host "Initializing Git repository..." -ForegroundColor Yellow
if (Test-Path ".git") {
    Write-Host "⚠️  Git repository already exists" -ForegroundColor Yellow
} else {
    git init
    Write-Host "✅ Git repository initialized" -ForegroundColor Green
}

# Configure Git user (if not already configured)
Write-Host ""
Write-Host "Checking Git configuration..." -ForegroundColor Yellow
$userName = git config --global user.name
$userEmail = git config --global user.email

if (-not $userName) {
    Write-Host "Git user name not configured. Please enter:" -ForegroundColor Yellow
    $inputName = Read-Host "Your name (or press Enter to skip)"
    if ($inputName -ne "") {
        git config --global user.name $inputName
        Write-Host "✅ Git user name configured" -ForegroundColor Green
    }
}

if (-not $userEmail) {
    Write-Host "Git user email not configured. Please enter:" -ForegroundColor Yellow
    $inputEmail = Read-Host "Your email (or press Enter to skip)"
    if ($inputEmail -ne "") {
        git config --global user.email $inputEmail
        Write-Host "✅ Git user email configured" -ForegroundColor Green
    }
}

# Add all files
Write-Host ""
Write-Host "Adding files to Git..." -ForegroundColor Yellow
git add .
Write-Host "✅ Files added" -ForegroundColor Green

# Commit
Write-Host ""
Write-Host "Creating initial commit..." -ForegroundColor Yellow
git commit -m "Initial portfolio commit"
Write-Host "✅ Initial commit created" -ForegroundColor Green

# Set main branch
Write-Host ""
Write-Host "Setting main branch..." -ForegroundColor Yellow
git branch -M main
Write-Host "✅ Main branch set" -ForegroundColor Green

# Add remote
Write-Host ""
Write-Host "Adding GitHub remote..." -ForegroundColor Yellow
git remote remove origin 2>$null
git remote add origin $repoUrl
Write-Host "✅ Remote added: $repoUrl" -ForegroundColor Green

# Push to GitHub
Write-Host ""
Write-Host "🚀 Ready to push to GitHub!" -ForegroundColor Cyan
Write-Host ""
Write-Host "You'll need to authenticate. Use one of these methods:" -ForegroundColor Yellow
Write-Host "1. Personal Access Token (recommended)" -ForegroundColor White
Write-Host "   - Go to: GitHub → Settings → Developer settings → Personal access tokens" -ForegroundColor White
Write-Host "   - Generate new token with 'repo' scope" -ForegroundColor White
Write-Host "   - Use token as password when prompted" -ForegroundColor White
Write-Host ""
Write-Host "2. GitHub CLI (if installed)" -ForegroundColor White
Write-Host ""

$pushNow = Read-Host "Push to GitHub now? (y/n)"

if ($pushNow -eq "y" -or $pushNow -eq "Y") {
    Write-Host ""
    Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
    git push -u origin main
    Write-Host ""
    Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📝 Next Steps:" -ForegroundColor Cyan
    Write-Host "1. Go to your repository on GitHub" -ForegroundColor White
    Write-Host "2. Click Settings → Pages" -ForegroundColor White
    Write-Host "3. Select branch: 'main' and folder: '/' (root)" -ForegroundColor White
    Write-Host "4. Save and wait 1-2 minutes" -ForegroundColor White
    Write-Host "5. Your site will be live at: https://YOUR_USERNAME.github.io/REPO_NAME/" -ForegroundColor White
} else {
    Write-Host ""
    Write-Host "To push manually, run:" -ForegroundColor Yellow
    Write-Host "git push -u origin main" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "✨ Setup complete!" -ForegroundColor Green

