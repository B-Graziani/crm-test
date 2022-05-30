const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json("HOME PAGE DEFAULT");
});

app.listen(port, () => {
  console.log(`i m running on port : ${port}`);
});
