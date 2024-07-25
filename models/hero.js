const mongoose = require("mongoose");

const heroSchema = new mongoose.Schema({
  key: String,
  logo: String,
  linkTitle: String,
});

const Hero = mongoose.model("Hero", heroSchema);
module.exports = Hero;
