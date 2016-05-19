var path = require('path');
var passport = require('passport'),
    signupController = require('../controllers/signupController.js')
    createController = require('../controllers/createController.js')
module.exports = function(express) {
  var router = express.Router()

  var isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated())
      return next()
      req.flash('error', 'You have to be logged in to access the page.')
    res.redirect('/')
  }
  
  router.get('/signup', signupController.show)
  router.post('/signup', signupController.signup)
  router.post('/create', createController.createPost)
  router.post('/login', passport.authenticate('local', {
      successRedirect: '/dashboard',
      failureRedirect: '/',
      failureFlash: true 
  }))

  router.get('/', function(req, res) {
    res.render('home')
  })

  router.get('/dashboard', isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname + '/../../views/dashboard.html'));
  })
  router.get('/create',isAuthenticated,function(req,res) {
    res.sendFile(path.join(__dirname + '/../../views/create.html'));
    // console.log(passport.session);
  
  })
  router.get('/logout', function(req, res) {
    req.logout()
    res.redirect('/')
  })

  return router
}