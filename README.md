Online Learning Platform

Features
Student/instructor registration
Browse courses
Enroll, view lessons, take quizzes
Tech Stack
MERN (MongoDB, Express, React, Node.js)
Docker (for deployment)
Setup
Run npm install in both /client and /server.
Start backend: node server.js
Start frontend: npm start
Usage
Visit /courses to browse courses.
Register/login as student or instructor.

## Frontend

- Navigate to `/client`
- Run `npm install` to install dependencies
- Start the dev server with `npm start`

## Docker

- Ensure Docker is installed.
- From root folder (where docker-compose.yml is), run:

- Backend API available at http://localhost:5000
- Frontend available at http://localhost:3000
- MongoDB runs in its container, data persisted in volume.
