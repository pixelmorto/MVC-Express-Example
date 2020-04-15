'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },

      username: {
        allowNull: false,
        type: DataTypes.STRING
      },

      password: {
        allowNull: false,
        type: DataTypes.STRING
      },

      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },

    })
  },
  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Users');
  }
};
