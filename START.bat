@echo off
title AdaptLearn — Start All Services
color 0A

echo.
echo  ==========================================
echo   AdaptLearn — Starting all services
echo  ==========================================
echo.

REM ── 1. Ollama serve (AI model) ────────────────────────────────────────────
echo [1/3] Starting Ollama (AI)...
start "Ollama" cmd /k "ollama serve"
timeout /t 5 /nobreak >nul

REM ── 2. Backend API ────────────────────────────────────────────────────────
echo [2/3] Starting Backend (http://localhost:8001)...
start "AdaptLearn Backend" cmd /k "cd /d D:\Adaptlearn\backend && node_modules\.bin\tsx.cmd src/index.ts"
timeout /t 4 /nobreak >nul

REM ── 3. Frontend ───────────────────────────────────────────────────────────
echo [3/3] Starting Frontend (http://localhost:3000)...
start "AdaptLearn Frontend" cmd /k "cd /d D:\Adaptlearn\frontend && npm run dev"

echo.
echo  ==========================================
echo   All services started!
echo.
echo   Frontend  : http://localhost:3000
echo   Backend   : http://localhost:8001
echo   Health    : http://localhost:8001/api/health
echo.
echo   Demo login:
echo     Student : demo.student@adaptlearn.dev / Student@123
echo     Teacher : teacher1@adaptlearn.dev    / Teacher@123
echo  ==========================================
echo.
pause
