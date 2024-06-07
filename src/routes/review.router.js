const { getAll, create, getOne, remove, update } = require('../controllers/review.controllers');
const express = require('express');

const reviewRouter = express.Router();

reviewRouter.route('/review')
    .get(getAll)
    .post(create);

reviewRouter.route('/review/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = reviewRouter;