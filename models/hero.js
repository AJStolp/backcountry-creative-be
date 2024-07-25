const mongoose = require("mongoose");

const heroSchema = new mongoose.Schema({
  key: String,
  title: String,
  content: String,
});

const Hero = mongoose.model("Hero", heroSchema);
module.exports = Hero;
