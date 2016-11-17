const config = require('./config/main'),
      MessagesController = require('./controllers/messages');

module.exports = function(app) {
  // Initializing route groups
  const apiRoutes = config.express.Router(),
        authRoutes = config.express.Router();

  //=========================
  // Auth Routes
  //=========================

  // Set auth routes as subgroup/middleware to apiRoutes
  //apiRoutes.use('/auth', authRoutes);

  // Registration route
  //authRoutes.post('/register', AuthenticationController.register);

  // Login route
  //authRoutes.post('/login', requireLogin, AuthenticationController.login);

// Set url for API group routes
  app.use(config.express.static(__dirname + '/public'));
  app.get('/', function(req, res, next) {
      res.sendFile(__dirname + '/index.html');
  });
};