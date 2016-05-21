var Model = require('../model/models.js')
var passport = require('passport')

module.exports.createPost = function(req, res) {
  console.log(req.body.content);

  var url = req.body.content;

  var newPost= {
    username: req.user.dataValues.username,
  	url: url,
  }
  
  Model.Post.create(newPost).then(function() {
  
  }).catch(function(error) {
    req.flash('error', "Please, Please enter a valid link")
    console.log(error);
  })

};