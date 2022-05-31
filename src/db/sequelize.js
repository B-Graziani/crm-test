const { Sequelize, Datatypes, DataTypes } = require("sequelize");
const ProduitModel = require("../models/produit");
const DocumentModel = require("../models/document");
const ContactModel = require("../models/contact");
const ContactProduitModel = require("../models/contactproduit");

sequelize = new Sequelize("crm-test", "root", "root", {
  port: 8889,
  dialect: "mariadb",
  dialectOptions: {
    timezone: "Etc/GMT-2",
  },
  logging: true,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected ok !");
  })
  .catch((error) => {
    console.log(error);
  });

const Produit = ProduitModel(sequelize, DataTypes);
const Document = DocumentModel(sequelize, DataTypes);
const Contact = ContactModel(sequelize, DataTypes);
const ContactProduit = ContactProduitModel(sequelize, DataTypes);

Contact.hasMany(Document);
Document.belongsTo(Contact);

Document.belongsToMany(Produit, { through: ContactProduit });
Produit.belongsToMany(Document, { through: ContactProduit });

const initDb = () => {
  sequelize.sync({ alter: true }).then(() => {
    console.log("DB initialized !");
  });
};

module.exports = {
  initDb,
  Produit,
  Document,
  Contact,
  ContactProduit,
};
