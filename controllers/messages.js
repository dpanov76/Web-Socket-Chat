'use strict';

const config = require('../config/main');
const Message = require('../models/messages');

config.io.on('connection', (client) => {
  console.log('Client connected...');

  Message.find({

  // Specify some special searching criteria here
  // ....

  }, (err, messages) => {
    if (err) return console.log(err);
    if (messages) {
      for (const index in messages) {
        client.emit('messages', messages[index].msg);
      }
    }
    return false;
  }).limit(config.limit).select({

  // Specify some special seclection criteria here
  // ....

  }).sort({ _id: -1 });

  client.on('join', () => {
    client.emit('messages', 'Welcome to the chat!');
  });

  client.on('send', (data) => {
    client.emit('messages', data);

    // Send message and save to db

    const newmessage = new Message({ msg: data });
    newmessage.save((err, newmwssage) => {
      if (err) return console.error(err);
      if (newmwssage) {
      // Debugging information
      // Do some cool stuff here
        console.log('New message : ', data);
      }
      return false;
    });

    client.broadcast.emit('messages', data);
  });

  client.on('disconnectME', (data) => {
    console.log('Client disconnected...');
    client.emit('messages', data);
    client.disconnect();
  });
});
