# Full-Stack Portfolio with Admin Dashboard

A full-stack developer portfolio platform with a public-facing website and a secure admin dashboard for dynamically managing projects, skills, experience, and portfolio content. The application is designed to provide a modern and responsive interface while enabling secure content management through a protected admin panel.

## 🛠Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Shadcn UI
- Redux Toolkit
- Axios

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Authentication
- JWT Authentication
- BcryptJS

### Deployment
- Frontend: Netlify
- Backend: Render

## 🚀Features

- Responsive developer portfolio website
- Secure admin dashboard for managing content
- Add, update, and delete projects dynamically
- Manage skills, experience, and portfolio details
- JWT-based authentication with protected routes
- RESTful API integration between frontend and backend
- Global state management using Redux Toolkit
- Mobile-friendly and modern UI design

## 🔥Key Contributions

- Built responsive UI components using React.js, Tailwind CSS, and Shadcn UI
- Implemented secure authentication using JWT and BcryptJS
- Developed RESTful APIs using Node.js and Express.js
- Integrated Redux Toolkit for scalable state management
- Deployed frontend on Netlify and backend on Render
- Created dynamic content management through the admin dashboard

## 📁Project Structure

- frontend/ → React portfolio website
- dashboard/ → Secure admin dashboard
- backend/ → Node.js and Express backend APIs

## 📦Installation

### Clone the Repository
- git clone <your-repository-url>
- cd <project-folder-name>

### Frontend Setup
- cd frontend
- npm install
- npm run dev

### Dashboard Setup
- cd dashboard
- npm install
- npm run dev

### Backend Setup
- cd backend
- npm install
- npm start

## 🔐Environment Variables

### Create a .env file inside the backend folder and add:
- MONGO_URI=your_mongodb_connection_string
- JWT_SECRET=your_secret_key

#### The following files should never be pushed to GitHub:
- .env
- .env.local
- .env.production

## 🌐Deployment

### The project is deployed using:
- Frontend → Netlify
- Dashboard → Netlify
- Backend → Render

Whenever new changes are pushed to the main branch, the deployed version can be updated automatically through GitHub integration.

## 💼Author

G Prasant
MERN Stack Developer