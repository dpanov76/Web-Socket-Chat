const assert = require('assert'),
      mongoose = require('mongoose'),
      config = require('./config/main'),
      router = require('./router');

mongoose.Promise = global.Promise;
mongoose.connect(config.url);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("mongodb is connected!!");
});

console.log('Server started on: http://localhost:' + config.port);

config.server.listen(config.port);

router(config.app);