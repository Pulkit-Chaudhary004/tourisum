// server/models/Hotel.js
const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name: String,
  type: String, // "hotel" or "houseboat"
  location: String,
  price: Number,
  description: String,
  image: String ,// for image URL
  Offer: String,
  ratings: Number,
  taxes: Number,
});

module.exports = mongoose.model("Hotel", hotelSchema);
