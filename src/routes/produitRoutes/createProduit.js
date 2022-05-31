const { Produit } = require("../../db/sequelize");

module.exports = (app) => {
  app.post("/api/produit", (req, res) => {
    Produit.create(req.body)
      .then((produit) => {
        const message = `le produit : ${req.body.productName} a bien ete cree !`;
        res.json({ message, data: produit });
      })
      .catch((error) => {
        console.log(error);
      });
  });
};
