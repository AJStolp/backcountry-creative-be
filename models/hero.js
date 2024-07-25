const mongoose = require("mongoose");

const heroSchema = new mongoose.Schema({
  key: String,
  title: String,
  content: String,
  additionalServices: {
    one: String,
    two: String,
  },
});

const Hero = mongoose.model("Hero", heroSchema);
module.exports = Hero;
