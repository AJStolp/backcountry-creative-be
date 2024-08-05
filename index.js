const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const Navigation = require("./models/navigation");
const Service = require("./models/services");
const Portfolio = require("./models/portfolio");
const Hero = require("./models/hero");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.DATABASE_URL)
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

app.get("/api/hero-data", async (req, res) => {
  try {
    const heroData = await Hero.find({});
    res.json(heroData);
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

router.get("/api/web-trend", async (req, res) => {
  try {
    const webTrend = {
      image: "path_to_your_trend_image.jpg",
      title: "Web Design Trends of 2024: What's Hot",
      content:
        "Curious about what's trending in web design this year? From sleek minimalism to cutting-edge AI, we've got the scoop on what's making waves in the digital world.",
      year: "2024",
    };
    res.json(webTrend);
  } catch (error) {
    res.status(500).json({ message: "Error fetching web trend data" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
