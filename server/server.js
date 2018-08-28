const express = require('express');
const hbs = require('hbs');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 5000
var app  = express(); 

app.use(express.static(publicPath));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('index.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my website'
  });
});

app.listen(5000, () => {
  console.log(`Server is up on port 5000`);
});
