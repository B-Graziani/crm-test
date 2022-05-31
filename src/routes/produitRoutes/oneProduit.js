const { Produit } = require("../../db/sequelize");

module.exports = (app) => {
  app.get("/api/produit/:id", (req, res) => {
    Produit.findByPk(req.params.id)
      .then((produit) => {
        if (produit === null) {
          const message = "le produit souhaité n existe pas";
          return res.status(404).json({ message });
        } else {
          const message = "produit trouvé";
          res.json({ message, data: produit });
        }
      })
      .catch((error) => {
        const message = "produit non recupere";
        res.status(500).json({ message, data, error });
      });
  });
};
