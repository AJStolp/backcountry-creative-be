const mongoose = require("mongoose");

const webTrendSchema = new mongoose.Schema({
  image: String,
  title: String,
  content: String,
  year: String,
});

const WebTrend = mongoose.model("WebTrend", webTrendSchema);
module.exports = WebTrend;
