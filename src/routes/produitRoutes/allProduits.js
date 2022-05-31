const { Produit } = require("../../db/sequelize");

module.exports = (app) => {
  app.get("/api/produits", (req, res) => {
    Produit.findAll()
      .then((produits) => {
        const message = "les produits ont bien ete recuperes!";
        res.json({ message, data: produits });
      })
      .catch((error) => {
        console.log(error);
      });
  });
};
