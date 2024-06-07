const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Booking = sequelize.define('booking', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    hotelId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    checkIn: {
        type: DataTypes.DATE,
        allowNull: false
    },
    checkOut: {
        type: DataTypes.DATE,
        allowNull: false
    },
});

module.exports = Booking;