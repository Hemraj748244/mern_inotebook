const mongoose = require('mongoose')

const {Schema} = mongoose;

const notesSchema = new Schema({
title : {
    type : String,
    required : true,
    default : "untitled",
},
description : {
    type : String,
    required : true,
},
time : {
    type : Date,
    default : Date.now
}
});

module.exports = mongoose.model('notes',notesSchema);
