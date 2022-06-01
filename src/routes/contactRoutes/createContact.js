const { Contact } = require("../../db/sequelize");

module.exports = (app) => {
  app.post("/api/contact", (req, res) => {
    Contact.create(req.body)
      .then((contact) => {
        const message = `le contact : ${req.body.agencyName} a bien ete cree !`;
        res.json({ message, data: contact });
      })
      .catch((error) => {
        console.log(error);
      });
  });
};
