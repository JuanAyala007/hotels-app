const catchError = require('../utils/catchError');
const booking = require('../models/Booking');
const Hotel = require('../models/Hotel');

const getAll = catchError(async(req, res) => {
    const results = await booking.findAll({include: [Hotel]});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await booking.create(req.body);
    return res.status(201).json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await booking.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await booking.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

module.exports = {
    getAll,
    create,
    remove,
    update
}