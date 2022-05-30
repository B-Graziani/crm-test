module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "produit",
    {
      productName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      priceHT: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tVA: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      createdAt: "created",
      updatedAt: false,
    }
  );
};
