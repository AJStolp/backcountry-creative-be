const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

const navigationData = require("./navigation-data/navigation-data");
const heroData = require("./hero-data/hero-data");

app.use(cors());
app.use(express.json());

app.get("/api/navigation", (req, res) => {
  res.json(navigationData);
});

app.get("/api/hero-data", (req, res) => {
  res.json(heroData);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
