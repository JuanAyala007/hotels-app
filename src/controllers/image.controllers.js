const catchError = require('../utils/catchError');
const image = require('../models/Image');
const Hotel = require('../models/Hotel');
const { uploadClouddinary} = require('../utils/cloudinary')

const getAll = catchError(async(req, res) => {
    const results = await image.findAll({include: [Hotel]});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await image.create(req.body);
    // const {url} = await uploadClouddinary(req.file)
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await image.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await image.destroy({ where: {id} });
    return res.sendStatus(204);
});


module.exports = {
    getAll,
    create,
    getOne,
    remove,

}