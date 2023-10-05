# CRUD Operations

A simple web application that demonstrates CRUD (Create, Read, Update, Delete) operations using Node.js, Express.js, and Mongoose. This project allows you to manage a collection of items, providing endpoints for creating, reading, updating, and deleting items in a database.

## Technologies Used

- Node.js
- Express.js
- Mongoose (ODM for MongoDB)
- dotenv (for managing environment variables)
- cors (for handling Cross-Origin Resource Sharing)

## Features

- Create, read, update, and delete items.
- CORS support for secure API access.
- Environment variable management with dotenv.

## Getting Started

1. Clone this repository.
2. Install dependencies with `npm install`.
3. Configure your MongoDB connection in `config.js`.
4. Create a `.env` file with environment variables (see `.env.example`).
5. Run the server with `npm start`.

## Usage

- Use your favorite API testing tool (e.g., Postman) to interact with the API.
- Endpoints: `POST /items`, `GET /items`, `GET /items/:id`, `PUT /items/:id`, `DELETE /items/:id`.

