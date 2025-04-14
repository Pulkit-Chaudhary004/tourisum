const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/tourismDB")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB error:", err));

// ✅ Import routes
const hotelRoutes = require("./routes/hotelRoutes");

// ✅ Use routes
app.use("/hotels", hotelRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
