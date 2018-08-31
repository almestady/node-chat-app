const express = require('express');
const http = require('http');
const hbs = require('hbs');
const socketIO = require('socket.io');

const path = require('path');
const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 5000;
var app  = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

socket.emit('newEmail', {
  from:"Alwaleed@almestady.com",
  text:"Hey. Asslam Alikum :-{)",
  createdAt:12345
});

socket.on('createMessage', function(message){
  console.log(message);
});

  socket.on('disconnect', () => {
    console.log('Disconnected from client');
  })
});



app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index');
});
// app.set('view engine', 'hbs');
//
// app.get('/', (req, res) => {
//   res.render('index.hbs', {
//     pageTitle: 'Home Page',
//     welcomeMessage: 'Welcome to my website'
//   });
// });

server.listen(port, () => {
  console.log(`Server is up on port 5000`);
});
