"use strict"

const config = require('../config/main'),
      Message = require('../models/messages');

config.io.on('connection', function(client) {

    console.log('Client connected...');

    Message.find({

      // Specify some special searching criteria here
      //....

    },function(err, messages){
      if (err) return console.log(err);
      if (messages){
        for (let index in messages) {
          client.emit('messages', messages[index].msg);
        }
      }
    }).limit(config.limit).select({

      // Specify some special seclection criteria here
      //....

    }).sort({ _id: -1 });

    client.on('join', function(data) {
        client.emit('messages', 'Welcome to the chat!');
    });

    client.on('send', function(data) {
        client.emit('messages', data);

        // Send message and save to db

        let newmessage = new Message({ msg:data });
        newmessage.save(function(err, newmwssage){
          if (err) return console.error(err);
          if (newmwssage) {

          // Debugging information
          // Do some cool stuff here
            console.log("New message : "+data);
          }
        });

        client.broadcast.emit('messages', data);
    });

    client.on('disconnectME', function(data) {
      console.log('Client disconnected...');
      client.emit('messages', data);
      client.disconnect();
    });

});