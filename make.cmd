@echo off
setlocal

if "%1"=="" goto help
if /I "%1"=="help" goto help
if /I "%1"=="install" goto install
if /I "%1"=="dev" goto dev
if /I "%1"=="build" goto build

echo Unknown target: %1
exit /b 1

:help
echo Available targets:
echo   make install   Install dependencies
echo   make dev       Run Next.js dev server
echo   make build     Build for production
exit /b 0

:install
call npm install
exit /b %errorlevel%

:dev
call npm run dev
exit /b %errorlevel%

:build
call npm run build
exit /b %errorlevel%
