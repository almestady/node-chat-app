var socket = io();
socket.on('connection', function() {
  console.log('Connected to server');
});

socket.on('newMessage', function(message){
  console.log('newMessage',message);
});


socket.on('disconnect', function() {
  console.log('Disconnected from server');
});
