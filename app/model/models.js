var UserMeta = require('./User.js'),
    connection = require('../sequelize.js')

var User = connection.define('accounts', UserMeta.attributes, UserMeta.options)
var Post = connection.define('posts', UserMeta.posts, UserMeta.options)
// you can define relationships here

Post.sync({force: true});
User.sync({force: true});
module.exports.User = User
module.exports.Post = Post