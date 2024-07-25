const mongoose = require("mongoose");

const servicesSchema = new mongoose.Schema({
  key: String,
  title: String,
});

const Services = mongoose.model("Services", servicesSchema);
module.exports = Services;
