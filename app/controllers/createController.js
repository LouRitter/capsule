var Model = require('../model/models.js')


var passport = require('passport')

module.exports.createPost = function(req, res) {


  var url = req.body.url
  var userId = res
  console.log("USER ID:" + userId);
  var newPost= {
  	url: url,
  	userId: userId
  }
  
  Model.Post.create(newPost).then(function() {
  
  }).catch(function(error) {
    req.flash('error', "Please, Please enter a valid link")
    console.log(error);
  })

};