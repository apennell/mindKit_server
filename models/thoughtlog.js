'use strict';
module.exports = function(sequelize, DataTypes) {
  var ThoughtLog = sequelize.define('ThoughtLog', {
    situation: DataTypes.TEXT,
    emotion1: DataTypes.STRING,
    emotion2: DataTypes.STRING,
    emotion3: DataTypes.STRING,
    emotion4: DataTypes.STRING,
    emotion5: DataTypes.STRING,
    emotion1AmountA: DataTypes.INTEGER,
    emotion2AmountA: DataTypes.INTEGER,
    emotion3AmountA: DataTypes.INTEGER,
    emotion4AmountA: DataTypes.INTEGER,
    emotion5AmountA: DataTypes.INTEGER,
    emotion1AmountB: DataTypes.INTEGER,
    emotion2AmountB: DataTypes.INTEGER,
    emotion3AmountB: DataTypes.INTEGER,
    emotion4AmountB: DataTypes.INTEGER,
    emotion5AmountB: DataTypes.INTEGER,
    thought: DataTypes.TEXT,
    altThought: DataTypes.TEXT,
    improvement: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ThoughtLog;
};