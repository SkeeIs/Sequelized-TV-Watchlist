var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

//define model
  var Show = sequelize.define("Show", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    watched_status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    liked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    }, {
      freezeShow: true
    });

  Show.sync();

module.exports = shows;