const { getAll, create, getOne, remove, update } = require('../controllers/city.controllers');
const express = require('express');

const cityRouter = express.Router();

cityRouter.route('/city')
    .get(getAll)
    .post(create);

cityRouter.route('/city/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = cityRouter;