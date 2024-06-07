const catchError = require('../utils/catchError');
const hotel = require('../models/Hotel');
const Image = require('../models/Image');
const City = require('../models/City');
const Review = require('../models/Review');

const getAll = catchError(async(req, res) => {
    const results = await hotel.findAll({include: [Image, City, Review]});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await hotel.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await hotel.findByPk(id, {include: [City, Image]});
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await hotel.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await hotel.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}