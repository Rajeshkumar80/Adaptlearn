@echo off
REM AdaptLearn demo launcher: Ollama + backend (:8001) + frontend (:3000)
start "" /b ollama serve
start "AdaptLearn backend" cmd /k "cd /d %~dp0backend && node node_modules\tsx\dist\cli.mjs src\index.ts"
start "AdaptLearn frontend" cmd /k "cd /d %~dp0frontend && node node_modules\next\dist\bin\next dev"
echo Waiting for services to start...
timeout /t 15 /nobreak >nul
start http://localhost:3000/login
