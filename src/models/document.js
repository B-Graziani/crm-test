module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "document",
    {
      statuePayment: {
        type: DataTypes.STRING,
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
