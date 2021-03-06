const db = require('../index');
const Sequelize = require('sequelize');

let Students = db.define('students', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty() {
        if (this.firstName === '') {
          throw new Error('First Name cannot be empty')
        }
      }
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty() {
        if (this.lastName === '') {
          throw new Error('Last Name cannot be empty')
        }
      }
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  gpa: {
    type: Sequelize.FLOAT,
    validate: {
      min: 0,
      max: 4
    }
  },
  name: {
    type: Sequelize.VIRTUAL,
    get() {
      return `${this.getDataValue('firstName')} ${this.getDataValue('lastName')}`
    }
  }
});

module.exports = Students
