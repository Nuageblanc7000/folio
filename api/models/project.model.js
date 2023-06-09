const { Sequelize, ModelStatic, DataTypes } = require("sequelize");

/**
 *
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>} project
 */
module.exports = (sequelize) => {
  const Project = sequelize.define(
    "Project",
    {
      title: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.TEXT, allowNull: false },
      link: { type: DataTypes.STRING, allowNull: true },
      github: { type: DataTypes.STRING, allowNull: true },
    },
    { paranoid: true }
  );
  return Project;
};
