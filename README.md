# 🎬 i Movies - Movie Ticket Booking

A full-stack MERN (MongoDB, Express, React, Node.js) movie ticket booking application.

## Features

- 🎥 Browse movies (Now Showing & Coming Soon)
- 🏢 View cinemas
- 🎟️ Book movie tickets with seat selection
- 📊 Admin dashboard for managing movies, cinemas, showtimes & reservations
- 👤 User authentication (Email, Google, Facebook)
- 📱 Responsive design

## Tech Stack

- **Frontend:** React, Redux, Material-UI
- **Backend:** Node.js, Express
- **Database:** MongoDB (Mongoose)
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js >= 16
- MongoDB Atlas account (or local MongoDB)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   cd client && npm install
   cd ../server && npm install
   ```

3. Create environment files:
   
   **Server** (`server/.env`):
   ```
   MONGODB_URI=your-mongodb-connection-string
   GMAIL_USER=your-email@gmail.com
   GMAIL_PASSWORD=your-app-password
   ```

   **Client** (`client/.env`):
   ```
   REACT_APP_GOOGLE_CLIENT_ID=your-google-client-id
   REACT_APP_FACEBOOK_APP_ID=your-facebook-app-id
   ```

4. Run in development:
   ```bash
   # Start server
   npm run server

   # Start client (in another terminal)
   npm run client
   ```

## Deploy to Vercel

1. Push this project to a GitHub repository

2. Import the project in [Vercel](https://vercel.com)

3. Add these **Environment Variables** in Vercel project settings:
   - `MONGODB_URI` — Your MongoDB Atlas connection string
   - `GMAIL_USER` — Gmail address for sending emails
   - `GMAIL_PASSWORD` — Gmail app password
   - `REACT_APP_GOOGLE_CLIENT_ID` — Google OAuth client ID (optional)
   - `REACT_APP_FACEBOOK_APP_ID` — Facebook App ID (optional)

4. Deploy! 🚀

## License

MIT
