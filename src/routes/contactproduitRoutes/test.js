// const { ContactProduit } = require("../../db/sequelize");
const { Produit, ContactProduit } = require("../../db/sequelize");

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
  //   app.get("/api/produit/:id", (req, res) => {
  //     return Produit.findByPk(req.params.id).then((data) => {
  //   console.log(data.id);
  //   let produitId = data.id;
  //   res.json({ produitId });
  //   console.log({ produitId });
  // });
  //   });
  //===========================
  //pour le moment je centralise tout , je change apres
  let documentId;
  app.post("/api/contactproduit", (req, res) => {
    ContactProduit.create().then((data) => {
      const message = "document bien cree !";
      //   let documentId = data.contactproduitId;
      documentId = data.contactproduitId;
      res.json({ message, data: data.contactproduitId });

      //   console.log({ message });
      //   console.log(data.toJSON());
    });
  });
};
//ce que je sais , c est que au click je recupere l ID de l element
//peu importe l element

//mais au click je ne veux pas faire de requete ou je ne suis pas sur
// j ai mon document en ma possession
//cote front je recupere l ID de l element
//de la je return document.setProduit(produit)
//QUESTION EST CE QUE C EST UNE REQUETE ? SI OUI DE TYPE PUT OR CREATE
