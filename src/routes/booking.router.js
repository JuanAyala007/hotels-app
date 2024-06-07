const { getAll, create, getOne, remove, update } = require('../controllers/booking.controllers');
const express = require('express');

const bookingRouter = express.Router();

bookingRouter.route('/booking')
    .get(getAll)
    .post(create);

bookingRouter.route('/booking/:id')
    .delete(remove)
    .put(update);

module.exports = bookingRouter;