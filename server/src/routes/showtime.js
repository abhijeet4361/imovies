const express = require('express');
const mongoose = require('mongoose');
const auth = require('../middlewares/auth');
const Showtime = require('../models/showtime');
const { mockShowtimes } = require('../db/mockData');

const router = new express.Router();

// Create a showtime
router.post('/showtimes', auth.enhance, async (req, res) => {
  const showtime = new Showtime(req.body);
  try {
    await showtime.save();
    res.status(201).send(showtime);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Get all showtimes
router.get('/showtimes', async (req, res) => {
  try {
    let showtimes = [];
    if (mongoose.connection && mongoose.connection.readyState === 1) {
      showtimes = await Showtime.find({});
    }
    if (!showtimes || !showtimes.length) {
      showtimes = mockShowtimes;
    }
    res.send(showtimes);
  } catch (e) {
    res.send(mockShowtimes);
  }
});

// Get showtime by id
router.get('/showtimes/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    let showtime = null;
    if (mongoose.connection && mongoose.connection.readyState === 1) {
      showtime = await Showtime.findById(_id);
    }
    if (!showtime) {
      showtime = mockShowtimes.find(s => s._id === _id) || mockShowtimes[0];
    }
    return res.send(showtime);
  } catch (e) {
    const showtime = mockShowtimes.find(s => s._id === _id) || mockShowtimes[0];
    return res.send(showtime);
  }
});

// Update showtime by id
router.patch('/showtimes/:id', auth.enhance, async (req, res) => {
  const _id = req.params.id;
  const updates = Object.keys(req.body);
  const allowedUpdates = ['startAt', 'startDate', 'endDate', 'movieId', 'cinemaId'];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

  if (!isValidOperation) return res.status(400).send({ error: 'Invalid updates!' });

  try {
    const showtime = await Showtime.findById(_id);
    updates.forEach((update) => (showtime[update] = req.body[update]));
    await showtime.save();
    return !showtime ? res.sendStatus(404) : res.send(showtime);
  } catch (e) {
    return res.status(400).send(e);
  }
});

// Delete showtime by id
router.delete('/showtimes/:id', auth.enhance, async (req, res) => {
  const _id = req.params.id;
  try {
    const showtime = await Showtime.findByIdAndDelete(_id);
    return !showtime ? res.sendStatus(404) : res.send(showtime);
  } catch (e) {
    return res.sendStatus(400);
  }
});

module.exports = router;
