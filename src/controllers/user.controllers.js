const catchError = require('../utils/catchError');
const user = require('../models/User');
const bcrypt = require('bcrypt');
const sendEmail = require('../utils/sendEmail');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const EmailCode = require('../models/EmailCode');

const getAll = catchError(async(req, res) => {
    const results = await user.findAll();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const {firstName, lastName, email, password, gender, frontBaseUrl } = req.body
    const encriptedPassword = await bcrypt.hash( password, 10);
    const result = await user.create({
        firstName,
        lastName,
        email,
        password: encriptedPassword,
        gender
    });
})

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await user.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await user.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const {firstName, lastName, email, gender} = req.body
    const result = await user.update(
        {firstName, lastName, email, gender},
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});



const login = catchError(async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ where: { email }})
    // if (!user) return res.status(401).json({message: "invalid"})
    // if (!user.isVerified) return res.status(401).json({message: "user is not verified"})
    // const isValid = await bcrypt.compare(password, user.password)
    // if (!isValid) return res.status(401).json({message: "invalid"})
  
    const token = jwt.sign(
      { user },
      process.env.TOKEN_SECRET,
      { expiresIn: "1d"},
    )
    return res.json({ user, token })
  });



module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    login,

 

}