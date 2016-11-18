
const express = require('express');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

module.exports = {
    // Secret key for JWT signing and encryption
  secret: 'dimansecretkey',
  // Database connection information
  url: 'mongodb://localhost:27017/chat',
  // Number records per page
  limit: 10,
  // Setting port for server
  port: process.env.PORT || 3000,
  apiHost: 'localhost',
  apiPort: 3001,
  webpackHost: 'localhost',
  webpackPort: 3002,
  // Express and properties
  app,
  server,
  io,
  express,
};
