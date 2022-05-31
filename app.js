const express = require("express");
const sequelize = require("./src/db/sequelize");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(bodyParser.json()).use(cors());

sequelize.initDb();

app.get("/", (req, res) => {
  res.json("HOME PAGE DEFAULT");
});

require("./src/routes/produitRoutes/createProduit")(app);

app.listen(port, () => {
  console.log(`i m running on port : ${port}`);
});
