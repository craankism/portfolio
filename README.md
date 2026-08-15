# Portfolio

Personal portfolio site built with React, TypeScript, Vite, Material UI and Zustand. The app presents an introduction, background information, and a set of project pages for selected work.

## Overview

This repository contains a single-page application with client-side routing for:

- Home
- About:
  - Me
  - Diploma
- Projects:
  - Schroedinger's Chat
  - Watering System
  - Calculator
  - Sorter
  - To-Do List
  - Discord Bot
- GitHub Profile Link
- Resume

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
### Depedencies used
- React (TS)
- React Router
- Vite
- MUI
- MUI Icons
- Zustand

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
