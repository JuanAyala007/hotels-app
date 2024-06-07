const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Image = sequelize.define('image', {
    url: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    hotelId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});

module.exports = Image;