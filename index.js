const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const Navigation = require("./models/navigation");
const Service = require("./models/services");
const Portfolio = require("./models/portfolio");
const Hero = require("./models/hero");
const Trends = require("./models/trends");
const Contact = require("./models/contact");

const app = express();
const PORT = process.env.PORT || 5000;

const axios = require("axios");

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
    res.status(500).json({ error: "Failed to fetch hero data" });
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

app.get("/api/web-trend", async (req, res) => {
  try {
    const trendsData = await Trends.find({});
    res.json(trendsData);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch web trend data" });
  }
});

app.post("/api/contact", async (req, res) => {
  try {
    // Save to database (as before)
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Send message to Discord
    const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL;
    await axios.post(discordWebhookUrl, {
      content: `New contact form submission:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error processing contact form:", error);
    res.status(500).json({ message: "Error sending message" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
