var socket = io.connect('http://localhost:3000'),
    messages = document.getElementById('messages'),
    input = document.getElementById('chat_input'),
    submitbtn = document.getElementById('submitbtn'),
    disconnectBTN = document.getElementById('disconnectBTN');

socket.on('connect', function(data) {
    socket.emit('join', 'new user connected...');
});

socket.on('messages', function(data) {
    console.log(data);
    messages.insertAdjacentHTML('beforeend', '<p>' + data + '</p>');
});

// socket.on('disconnect', function () {
//     console.log('user disconnected');
// });

var newmessage = function(){
    socket.emit('send', chat_input.value);
}

var disconnectme = function(){
    socket.emit('disconnectME', "You have been disconnected from chat");
}

window.onload = function() {
    submitbtn.onclick = function send() {
        newmessage();
    }
    disconnectBTN.onclick = function ddt() {
        disconnectme();
    }
}

