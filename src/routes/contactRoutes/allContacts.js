const { Contact } = require("../../db/sequelize");

module.exports = (app) => {
  app.get("/api/contacts", (req, res) => {
    Contact.findAll()
      .then((contacts) => {
        const message = "les contacts ont bien ete recuperes!";
        res.json({ message, data: contacts });
      })
      .catch((error) => {
        console.log(error);
      });
  });
};
