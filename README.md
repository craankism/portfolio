# Portfolio

Personal portfolio site built with React, TypeScript, Vite, and Material UI. The app presents an introduction, background information, and a set of project pages for selected work.

## Overview

This repository contains a single-page application with client-side routing for:

- Home
- About
- Projects overview
- Individual project pages for:
  - Watering System
  - Calculator
  - Sorter
  - To-Do List
  - Discord Bot

The production build is served through Nginx, with SPA routing configured so deep links resolve correctly.

## Stack

- React 19
- TypeScript
- Vite
- React Router 7
- Material UI
- Docker
- Nginx

## Development

### Prerequisites

- Node.js 20+
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will start a local dev server with hot reload.

### Build for production

```bash
npm run build
```

The compiled output is written to `dist/`.

### Preview the production build locally

```bash
npm run preview
```

## Docker

### Build the image

```bash
docker build -t portfolio .
```

### Run with Docker Compose

```bash
docker compose up --build
```

The Compose setup expects an external Docker network named `nginx_proxy_manager_default`. Create it first if it does not already exist:

```bash
docker network create nginx_proxy_manager_default
```

## Project Structure

- `src/` application source code
- `src/components/` page components and project detail views
- `public/` static assets
- `Dockerfile` multi-stage build for production deployment
- `docker-compose.yml` container orchestration
- `nginx.conf` Nginx config for static hosting and SPA fallback

## Available Scripts

- `npm run dev` starts the Vite dev server
- `npm run build` runs TypeScript compilation and creates a production build
- `npm run preview` serves the production build locally
- `npm run lint` runs ESLint
