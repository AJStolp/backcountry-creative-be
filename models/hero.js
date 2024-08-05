const mongoose = require("mongoose");

const heroSchema = new mongoose.Schema({
  key: String,
  title: String,
  content: String,
  cta: String,
  url: String,
});

const Hero = mongoose.model("Hero", heroSchema);
module.exports = Hero;
