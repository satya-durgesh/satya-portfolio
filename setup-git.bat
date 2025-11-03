@echo off
echo ========================================
echo  Portfolio Git Setup Script
echo ========================================
echo.

REM Check if Git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Git is not installed!
    echo.
    echo Please install Git first:
    echo 1. Download from: https://git-scm.com/download/win
    echo 2. Install with default settings
    echo 3. Restart and run this script again
    echo.
    start https://git-scm.com/download/win
    pause
    exit /b 1
)

echo [OK] Git is installed
echo.

REM Initialize Git
if exist .git (
    echo [INFO] Git repository already exists
) else (
    echo [INFO] Initializing Git repository...
    git init
    echo [OK] Repository initialized
)

echo.
echo [INFO] Adding files...
git add .

echo.
echo [INFO] Creating initial commit...
git commit -m "Initial portfolio commit"

echo.
echo [OK] Setting main branch...
git branch -M main

echo.
echo ========================================
echo  Setup Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Create a repository on GitHub
echo 2. Run: git remote add origin YOUR_REPO_URL
echo 3. Run: git push -u origin main
echo 4. Enable GitHub Pages in repository settings
echo.
pause

