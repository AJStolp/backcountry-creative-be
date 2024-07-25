const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const Navigation = require("./models/navigation");
const Service = require("./models/services");
const Portfolio = require("./models/portfolio");

const app = express();
const port = process.env.PORT || 5000; // Use the PORT environment variable if available, otherwise default to 5000

app.use(cors());
app.use(express.json());

// Use DATABASE_URL for MongoDB connection string
const mongoUrl = process.env.DATABASE_URL;

console.log("Connecting to MongoDB URL:", mongoUrl); // Debugging line to ensure URL is correct

// Connect to MongoDB without deprecated options
mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Connection error:", err);
  });

// Routes
app.get("/api/navigation", async (req, res) => {
  try {
    const navigationData = await Navigation.find({});
    res.json(navigationData);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch navigation data" });
  }
});

app.get("/api/services", async (req, res) => {
  try {
    const serviceData = await Service.find({});
    res.json(serviceData);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch service data" });
  }
});

app.get("/api/portfolio-data", async (req, res) => {
  try {
    const portfolioData = await Portfolio.find({});
    res.json(portfolioData);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch portfolio data" });
  }
});

app.get("/api/verify-data", async (req, res) => {
  try {
    const navCount = await Navigation.countDocuments();
    const serviceCount = await Service.countDocuments();
    const portfolioCount = await Portfolio.countDocuments();

    res.json({
      navigationDocuments: navCount,
      serviceDocuments: serviceCount,
      portfolioDocuments: portfolioCount,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to verify data" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
