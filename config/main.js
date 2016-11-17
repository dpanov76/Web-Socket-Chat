const express = require('express'),
      app = express(),
      server = require('http').createServer(app),
      io = require('socket.io')(server);

module.exports = {
  // Secret key for JWT signing and encryption
  'secret': 'dimansecretkey',
  // Database connection information
  'url': 'mongodb://localhost:27017/chat',
  // Number records per page
  'limit': 10,
  // Setting port for server
  'port': process.env.PORT || 3000,
  // Express and properties
  'app': app,
  'server': server,
  'io': io,
  'express': express
}