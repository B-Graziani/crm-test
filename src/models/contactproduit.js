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
