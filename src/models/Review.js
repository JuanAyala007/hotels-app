const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Review = sequelize.define('review', {
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false
    },
    hotelId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});

module.exports = Review;