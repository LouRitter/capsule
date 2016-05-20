  var  Model = require('../model/models.js')



var find= Model.Post.findAll().then(function(projects) {
  // projects will be an array of all Project instances
  	return projects
  });

module.exports.find = find;