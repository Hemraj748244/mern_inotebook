const connectToMongo = require('./db');
const express = require('express');
const app=express();
connectToMongo();

//to use json formats in API


app.get('/', function(req, res) {
  res.send('App is running');
});


app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));

app.listen(3000, function() {
  console.log('Server listening on port 3000');
});