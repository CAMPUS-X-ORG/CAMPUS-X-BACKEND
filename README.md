# campus-x-backend

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.2. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

CAMPUS X Backend Application
This project is a CAMPSU-X backend application built using Node.js, Prisma, SQLite, JWT authentication, passwordless authentication, various middlewares, user management functionalities, and Docker containerization.


Features
Node.js: Backend server using Node.js for handling HTTP requests.
Prisma: Database ORM for interfacing with an SQLite database.
SQLite: Embedded database for storing application data.
JWT Authentication: JSON Web Token-based authentication for secure API access.
Passwordless Authentication: Authentication method without using passwords.
Middlewares: Implemented for authentication, error handling, and more.
User Management: Functionalities for managing users, their profiles, and confeeds.
Docker Containerization: Docker setup for containerizing the application.
Setup
Clone the repository:
git clone <repository-url>
cd campus-x-backend
Run Project:
 npm install
 npx prisma migrate dev
 npm start
Endpoints
Authentication Endpoints
POST /auth/login: User login endpoint.
POST auth/logout: User logout endpoint.
POST /auth/reset-password: Reset password endpoint (passwordless).
Other Endpoints
There are various other endpoints for user management, confeed, and additional functionalities.

Users : POST,GET - /users.
Confeeds : POST,GET - /confeed.
Middlewares
Implemented Middlewares
authMiddleware: Middleware for JWT authentication.
errorHandlingMiddleware: Error handling middleware.
