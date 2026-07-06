@echo off
setlocal

if "%1"=="" goto help
if /I "%1"=="help" goto help
if /I "%1"=="install" goto install
if /I "%1"=="dev" goto dev
if /I "%1"=="dev-frontend" goto devfrontend
if /I "%1"=="dev-backend" goto devbackend
if /I "%1"=="build" goto build

echo Unknown target: %1
exit /b 1

:help
echo Available targets:
echo   make install       Install frontend and backend dependencies
echo   make dev           Run frontend and backend together
echo   make dev-frontend  Run Next.js dev server only
echo   make dev-backend   Run Express API server only
echo   make build         Build frontend and backend for production
exit /b 0

:install
call npm install
if errorlevel 1 exit /b 1
call npm install --prefix backend
exit /b %errorlevel%

:dev
call npm run dev:all
exit /b %errorlevel%

:devfrontend
call npm run dev
exit /b %errorlevel%

:devbackend
call npm run dev --prefix backend
exit /b %errorlevel%

:build
call npm run build
if errorlevel 1 exit /b 1
call npm run build --prefix backend
exit /b %errorlevel%
