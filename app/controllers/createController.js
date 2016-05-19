var Model = require('../model/models.js')


var passport = require('passport')

module.exports.createPost = function(req, res) {


console.log("THIS IS GETTING HIT");
  

  var url = req.body.url

  var newPost= {
    userId: 1,
  	url: url,
  }
  
  Model.Post.create(newPost).then(function() {
  
  }).catch(function(error) {
    req.flash('error', "Please, Please enter a valid link")
    console.log(error);
  })

};