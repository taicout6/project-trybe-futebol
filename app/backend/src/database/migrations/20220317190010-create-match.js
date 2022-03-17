'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('matchs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      home_team: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'clubs',
          key: 'id',
        },
      },
      home_team_goals: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      away_team: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'clubs',
          key: 'id',
        },
      },
      away_team_goals: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      in_progress: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('matchs');
  }
};
