'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('ThoughtLogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      situation: {
        type: Sequelize.TEXT
      },
      emotion1: {
        type: Sequelize.STRING
      },
      emotion2: {
        type: Sequelize.STRING
      },
      emotion3: {
        type: Sequelize.STRING
      },
      emotion4: {
        type: Sequelize.STRING
      },
      emotion5: {
        type: Sequelize.STRING
      },
      emotion1AmountA: {
        type: Sequelize.INTEGER
      },
      emotion2AmountA: {
        type: Sequelize.INTEGER
      },
      emotion3AmountA: {
        type: Sequelize.INTEGER
      },
      emotion4AmountA: {
        type: Sequelize.INTEGER
      },
      emotion5AmountA: {
        type: Sequelize.INTEGER
      },
      emotion1AmountB: {
        type: Sequelize.INTEGER
      },
      emotion2AmountB: {
        type: Sequelize.INTEGER
      },
      emotion3AmountB: {
        type: Sequelize.INTEGER
      },
      emotion4AmountB: {
        type: Sequelize.INTEGER
      },
      emotion5AmountB: {
        type: Sequelize.INTEGER
      },
      thought: {
        type: Sequelize.TEXT
      },
      altThought: {
        type: Sequelize.TEXT
      },
      improvement: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('ThoughtLogs');
  }
};