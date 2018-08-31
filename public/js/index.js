var socket = io();
socket.on('connect', function() {
  console.log('Connected to server');

  socket.emit('createMessage',{
    to:"@almestady",
    text:"Hey. Asslam Alikum :-{)",
    createdAt:12345
  });
});


socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on('newEmail',function(newemail){
  console.log(newemail);
});
