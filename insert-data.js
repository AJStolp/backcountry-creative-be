const mongoose = require("mongoose");
require("dotenv").config();

const Navigation = require("./models/navigation");
const Service = require("./models/services");
const Portfolio = require("./models/portfolio");
const Hero = require("./models/hero");
const Trends = require("./models/trends");
const Contact = require("./models/contact");

const navigationData = require("./navigation-data/navigation-data");
const servicesData = require("./services-data/services-data");
const portfolioData = require("./portfolio-data/portfolio-data");
const heroData = require("./hero-data/hero-data");
const trendsData = require("./trends/trends");

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Connected to MongoDB");

    // Insert data
    const insertData = async () => {
      try {
        await Navigation.deleteMany({});
        await Service.deleteMany({});
        await Portfolio.deleteMany({});
        await Hero.deleteMany({});
        await Trends.deleteMany({});
        await Contact.deleteMany({});

        await await Navigation.insertMany(navigationData);
        await Service.insertMany(servicesData);
        await Portfolio.insertMany(portfolioData);
        await Hero.insertMany(heroData);
        await Trends.insertMany(trendsData);
        mongoose.connection.close();
      } catch (err) {
        mongoose.connection.close();
      }
    };

    insertData();
  })
  .catch((err) => {
    console.error("Connection error:", err);
  });
