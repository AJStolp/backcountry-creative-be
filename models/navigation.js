const mongoose = require("mongoose");

const navigationSchema = new mongoose.Schema({
  key: String,
  logo: String,
  linkTitle: String,
});

const Navigation = mongoose.model("Navigation", navigationSchema);
module.exports = Navigation;
