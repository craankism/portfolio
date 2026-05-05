# Portfolio

This project is a personal portfolio website, created as part of a software development course and further developed at home. It showcases my skills, projects, and background in software development.

## Features
- **Homepage**: Introduction and navigation.
- **About Me**: Information about my background and experience.
- **Projects**: Detailed pages for individual projects, 
including:
	- Calculator
	- Sorter
	- Watering System
	- Todo
	- Discord Bot
- **GitHub**: Link to GitHub Account
- **Resume**: PDF Viewer of the CV

## Project Structure

- `index.html`: Main landing page.
- `src/`: React files
- `nginx.conf`: Nginx configuration for serving the site.
- `Dockerfile` & `docker-compose.yml`: For containerized deployment.

## Getting Started

To run the portfolio locally or in a container:

1. **Local**: Open `index.html` in your browser.
2. **Docker**:
	 - Build the image: `docker build -t portfolio .`
	 - Run with Docker Compose: `docker-compose up`

## Technologies Used
- HTML, CSS
- React with TypeScript
- React Router
- Docker
- Nginx

## WiP
- MUI