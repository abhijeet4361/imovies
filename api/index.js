const express = require('express');
const path = require('path');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: path.join(__dirname, '../server/.env') });
}

require('../server/src/db/mongoose');

// Routes
const userRouter = require('../server/src/routes/users');
const movieRouter = require('../server/src/routes/movies');
const cinemaRouter = require('../server/src/routes/cinema');
const showtimeRouter = require('../server/src/routes/showtime');
const reservationRouter = require('../server/src/routes/reservation');
const invitationsRouter = require('../server/src/routes/invitations');

const app = express();
app.disable('x-powered-by');

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization'
  );

  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  next();
});

app.use(express.json());
app.use(userRouter);
app.use(movieRouter);
app.use(cinemaRouter);
app.use(showtimeRouter);
app.use(reservationRouter);
app.use(invitationsRouter);

module.exports = app;
