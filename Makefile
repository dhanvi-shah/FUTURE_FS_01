.PHONY: help install dev dev-frontend dev-backend build

help:
	@echo Available targets:
	@echo   make install       Install frontend and backend dependencies
	@echo   make dev           Run frontend and backend together
	@echo   make dev-frontend  Run Next.js dev server only
	@echo   make dev-backend   Run Express API server only
	@echo   make build         Build frontend and backend for production

install:
	npm install
	npm install --prefix backend

dev:
	npm run dev:all

dev-frontend:
	npm run dev

dev-backend:
	npm run dev --prefix backend

build:
	npm run build
	npm run build --prefix backend
