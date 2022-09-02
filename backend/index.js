const mongoose = require('mongoose');
const express = require('express');
const app=express();
const DB ='mongodb+srv://hemraj:Hemraj%40748244@databasecluster.z5usoe1.mongodb.net/inotebook?retryWrites=true&w=majority'
mongoose.connect(DB).then(()=>{console.log('connection success')}).catch((err)=>console.log(err))

app.get('/', function(req, res) {
  res.send('App is running');
});

app.listen(3000, function() {
  console.log('Server listening on port 3000');
});