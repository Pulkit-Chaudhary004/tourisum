const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 🔗 Connect to MongoDB Compass (local MongoDB instance)
mongoose.connect("mongodb+srv://chaaudharypulkit10:lBvOafRwiPeoHg5m@cluster1.jmkcvma.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1") 
  .then(() => console.log("✅ Connected to MongoDB Compass"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Routes
const hotelRoutes = require("./routes/hotelRoutes");
app.use("/hotels", hotelRoutes);

// Start server
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
