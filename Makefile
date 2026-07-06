.PHONY: help install dev build

help:
	@echo Available targets:
	@echo   make install   Install dependencies
	@echo   make dev       Run Next.js dev server
	@echo   make build     Build for production

install:
	npm install

dev:
	npm run dev

build:
	npm run build
