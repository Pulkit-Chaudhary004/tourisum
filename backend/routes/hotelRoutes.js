// server/routes/hotelRoutes.js
const express = require("express");
const router = express.Router();
const Hotel = require("../models/Hotel");

router.post("/add", async (req, res) => {
  try {
    console.log(req.body)
    const hotel = new Hotel(req.body);
    await hotel.save();
    res.status(201).json(hotel);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
