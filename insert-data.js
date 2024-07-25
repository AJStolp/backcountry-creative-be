const mongoose = require("mongoose");
require("dotenv").config();

const Navigation = require("./models/navigation");
const Service = require("./models/services");
const Portfolio = require("./models/portfolio");

const navigationData = require("./navigation-data/navigation-data");
const servicesData = require("./services-data/services-data");
const portfolioData = require("./portfolio-data/portfolio-data");

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

        await Navigation.insertMany(navigationData);
        await Service.insertMany(servicesData);
        await Portfolio.insertMany(portfolioData);
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
