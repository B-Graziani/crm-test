const express = require("express");
const sequelize = require("./src/db/sequelize");

const app = express();
const port = 3000;

sequelize.initDb();

app.get("/", (req, res) => {
  res.json("HOME PAGE DEFAULT");
});

app.listen(port, () => {
  console.log(`i m running on port : ${port}`);
});
