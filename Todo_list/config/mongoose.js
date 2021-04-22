const mongoose = require("mongoose")     //Including Mongoose
mongoose.connect("mongodb://localhost/todo_list_db");  //Creating a connection between mongoose and mongodb
const db = mongoose.connection;                        //To set Connection with database

db.on("error",console.error.bind("Error in connecting the database")); //If error occurs in setting up db

//Event when the db is successfully connected.
db.once("open",function(){
    console.log("The database is connected successfully.")
})
