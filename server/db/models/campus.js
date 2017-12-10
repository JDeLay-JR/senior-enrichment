const db = require('../index');
const Sequelize = require('sequelize');


let Campuses = db.define('campuses', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      //Check if this works
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://openclipart.org/download/216805/Planet_Mars.svg"
  },
  description: {
    type: Sequelize.TEXT
  }
})

module.exports = Campuses

