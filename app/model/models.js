var UserMeta = require('./User.js'),
    connection = require('../sequelize.js')

var User = connection.define('nh6z3815qyixpc1h.accounts', UserMeta.attributes, UserMeta.options)

// you can define relationships here
User.sync();
module.exports.User = User