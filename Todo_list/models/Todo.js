const mongoose = require("mongoose");  // including my monngoose(ODM)

// Defining my schema
const TodoSchema = new mongoose.Schema({
    Activity:{
        type:String,
        required:true
    },
    Work:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
});

// Creating the database collection
const Todo = mongoose.model("Todo",TodoSchema)

module.exports = Todo;