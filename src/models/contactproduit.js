module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "contactproduit",
    {
      contactproduitId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      statuePayment: {
        type: DataTypes.STRING,
        //peux etre null : true
        allowNull: true,
      },
    },
    {
      timestamps: true,
    }
  );
};
// DOIT RAJOUTER UN CHAMP POUR LE NUMERO DE DOCUMENT
// DU COUP AVEC LE STATUE DU CONTACT ET CE NUMERO , ON PEUT DISTINGUER LES DOCS
