const mongoose = require('mongoose'),
      Schema = mongoose.Schema;
//================================
// Message Schema
//================================
const messageSchema = new Schema({
    msg: {
      type: String
    }
});

const Message = mongoose.model('messages', messageSchema, 'chat_messages');

module.exports = Message;