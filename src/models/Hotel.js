const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Hotel = sequelize.define('hotel', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cityId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    lat: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lon: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Hotel;