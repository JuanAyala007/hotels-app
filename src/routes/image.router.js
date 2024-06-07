const { getAll, create, getOne, remove } = require('../controllers/image.controllers');
const express = require('express');
const uploadImages = require('../utils/multer')


const imageRouter = express.Router();

imageRouter.route('/image')
    .get(getAll)
    .post(uploadImages.single('image'), create);

imageRouter.route('/image/:id')
    .get(getOne)
    .delete(remove)

module.exports = imageRouter;