const City = require("./City");
const Hotel = require("./Hotel");
const Image = require("./Image");
const Review = require("./Review");




Review.belongsTo(Hotel)
Hotel.hasMany(Review)

Hotel.belongsTo(City)
City.hasMany(Hotel)

Image.belongsTo(Hotel)
Hotel.hasMany(Image)