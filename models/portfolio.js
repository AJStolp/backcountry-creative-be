const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
  key: String,
  title: String,
  content: String,
});

const Portfolio = mongoose.model("Portfolio", portfolioSchema);
module.exports = Portfolio;
