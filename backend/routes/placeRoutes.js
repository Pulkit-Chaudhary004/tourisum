// server/routes/placeRoutes.js
const express = require("express");
const router = express.Router();
const Place = require("../models/Place");

// POST - Add new place
router.post("/add", async (req, res) => {
  try {
    console.log(req.body)
    const place = new Place(req.body);
    await place.save();
    res.status(201).json({ message: "Place added successfully", place });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET - Get all places
router.get("/", async (req, res) => {
  try {
    const places = await Place.find();
    res.json(places);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
