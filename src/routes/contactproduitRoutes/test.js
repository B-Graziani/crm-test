// const { ContactProduit } = require("../../db/sequelize");
const { Produit } = require("../../db/sequelize");

module.exports = (app) => {
  //   let contactproduit = [];
  //   app.get("/api/contactproduit/:id", (req, res) => {
  //     ContactProduit.findByPk(req.params.id)
  //       .then((produit) => {
  //         const message = "le produit a bien ete trouvé !";
  //         console.log(produit);
  //         res.json({ message, data: produit });
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   });
  app.get("/api/produit/:id", (req, res) => {
    return Produit.findByPk(req.params.id).then((data) => {
      //   console.log(data.id);
      let produitId = data.id;
      //   res.json({ produitId });
      console.log({ produitId });
    });
  });
};
