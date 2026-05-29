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
Vite will start a local dev server with hot reload.

### Start the development server


```bash
npm run dev
```

## Docker

### Run with Docker Compose

```bash
docker compose build
```

```bash
docker compose up --build
```

## Project Structure

- `src/` application source code
- `src/components/` page components and project detail views
- `public/` static assets
- `Dockerfile` multi-stage build for production deployment
- `docker-compose.yml` container orchestration
- `nginx.conf` Nginx config for static hosting and SPA fallback
