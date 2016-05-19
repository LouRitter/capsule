
    Model = require('../model/models.js')

module.exports.show = function(req, res) {
  res.render('signup')
}

module.exports.signup = function(req, res) {
  var username = req.body.username
  var password = req.body.password
  var password2 = req.body.password2
  var firstName = req.body.firstName
  var lastName = req.body.lastName
  var gender = req.body.gender
  var age = req.body.age
  var email = req.body.email
  
  if (!username || !password || !password2) {
    req.flash('error', "Please, fill in all the fields.")
    res.redirect('signup')
  }
  
  if (password !== password2) {
    req.flash('error', "Please, enter the same password twice.")
    res.redirect('signup')
  }
  

 
  
  var newUser = {
    username: username,
    password: password,
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    age: age,
    email: email
  }
  
  Model.User.create(newUser).then(function() {
    res.redirect('/')
  }).catch(function(error) {
    req.flash('error', "Please, choose a different username.")
    console.log(error);
    res.redirect('/signup')
  })
}