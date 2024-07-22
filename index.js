const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

const navigationData = require("./navigation-data/navigation-data");
const sectionData = require("./sections-data/sections-data");

app.use(cors());
app.use(express.json());

app.get("/api/navigation", (req, res) => {
  res.json(navigationData);
});

app.get("/api/sections", (req, res) => {
  res.json(sectionData);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
