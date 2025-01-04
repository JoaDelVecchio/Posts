# Post Manager Project

## 🌟 Project Overview

This project is a full-stack CRUD (Create, Read, Update, Delete) API application built as a portfolio piece to demonstrate the integration of a React frontend with an Express backend.

## 📁 Folder Structure

### Client-side (Frontend)

```
client/
├── node_modules/       # Dependencies for the frontend
├── public/             # Static assets
├── src/                # Source files
│   ├── api/            # API integration files
│   │   └── api.ts      # Functions for API calls
│   ├── assets/         # Static assets (e.g., images, SVGs)
│   │   └── react.svg   # React logo
│   ├── components/     # React components
│   │   ├── ErrorMessage.tsx  # Error message component
│   │   ├── Footer.tsx        # Footer component
│   │   ├── GetPostButton.tsx # Button to fetch posts
│   │   ├── Header.tsx        # Header component
│   │   ├── Loading.tsx       # Loading spinner
│   │   ├── PostForm.tsx      # Form to create a post
│   │   ├── PostList.tsx      # Component to list posts
│   ├── App.tsx          # Main application component
│   ├── index.css        # Global styles
│   ├── main.tsx         # Entry point for React application
├── package.json         # Frontend dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration for development
```

### Server-side (Backend)

```
server/
├── controllers/         # Controllers for route logic
│   └── postController.js # Handles post-related routes
├── middleware/          # Custom middleware
│   ├── error.js         # Error handling middleware
│   ├── logger.js        # Logging middleware
│   └── notFound.js      # Middleware for 404 routes
├── routes/              # API routes
│   └── posts.js         # Routes for handling posts
├── server.js            # Entry point for the backend server
├── .env                 # Environment variables
├── package.json         # Backend dependencies and scripts
```

---

## 🛠️ Technologies Used

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript for type safety.
- **Vite**: A fast development build tool.
- **TailwindCSS**: A utility-first CSS framework for rapid UI development.

### Backend

- **Express.js**: A minimalist web framework for Node.js.
- **Node.js**: A JavaScript runtime for server-side programming.

### Additional Tools

- **ESLint**: A tool for identifying and fixing JavaScript code issues.
- **Prettier**: A code formatter to enforce consistent style.

---

### Features

- **Create Posts**: Users can add new posts.
- **Read Posts**: Users can fetch and view all posts.
- **Update Posts**: Users can edit existing posts directly in the UI.
- **Delete Posts**: Users can remove posts from the database.

The application is designed to showcase key CRUD (Create, Read, Update, Delete) functionality while following modern development practices. The frontend is styled with TailwindCSS and leverages TypeScript for type safety. The backend follows an organized MVC structure with custom middleware for logging, error handling, and managing 404 responses.

### Goals

The goal of this project is to highlight skills in:

- Full-stack development with modern technologies.
- Writing clean and modular code.
- Building scalable and maintainable applications.

---
