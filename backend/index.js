const connectToMongo = require('./db');
const express = require('express');
const app=express();
connectToMongo();

app.get('/', function(req, res) {
  res.send('App is running');
});

app.listen(3000, function() {
  console.log('Server listening on port 3000');
});