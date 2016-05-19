var Sequelize = require('sequelize')

var attributes = {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      is: /^[a-z0-9\_\-]+$/i,
    }
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  },
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
  age: {
    type: Sequelize.INTEGER,
  },
  gender:{
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
}

var options = {
  freezeTableName: true
}

var posts = {
  userId: Sequelize.INTEGER,
  url: Sequelize.STRING

}

module.exports.attributes = attributes
module.exports.options = options