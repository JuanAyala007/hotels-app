const { getAll, create, getOne, remove, update, login, verifyCode } = require('../controllers/user.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const userRouter = express.Router();

userRouter.route('/users')
    .get( getAll)
    .post(create);

userRouter.route('/users/:id')
    .get(getOne)
    .delete(remove)
    .put(verifyJWT, update);

userRouter.route('/users/login')
    .post(login)



module.exports = userRouter;