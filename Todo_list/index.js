const express = require("express");     // including our express server
const port = 7010;                      // defining the port number
const path = require("path");           // Including path 
const app = express();                  // Instance of express
const db = require("./config/mongoose") // Setting up the database
const Todo = require("./models/Todo");  // Setting up the database models
const date = require("date-and-time");  // Setting up the date

// to set ejs as our view engines
app.set('view engine', 'ejs');

// to set path for our views pages
app.set('views', path.join(__dirname,'views'));

//to use static files
app.use(express.static("assets"));
//for parsing the requests data
app.use(express.urlencoded());

//Controller for Home Page
app.get("/",function(req,res){
    Todo.find({},function(err,todos){
        if(err){
            Console.log("Error in fetching data from database",err);
        }
        return res.render("home",{
            title:"TODOs",
            TodoList:todos
        })
    })
});

// creating my mongodb-document collection by the input provided by user through form and display that.
app.post("/create-list",function(req,res){
    Todo.create(req.body,function(err,newTodo){
        if(err){
            console.log("error in storing the contact");
            return;
        }
        console.log("****",newTodo);
    })
    return res.redirect("back");
})

// Deleting the corresponding tasks have been selected through checkbox
app.post("/delete-activity",function(req,res){
    console.log(req.body);
    id=req.body.arr;
    count=req.body.arr.length;
    for(let i=0; i<count; i++){
        Todo.findByIdAndDelete(id[i],function(err){
            if(err){
                console.log("Error in deleting the Task");
                return;
            }
        })
    }
    return res.redirect("back");
});

// Port listener function to check my server is running fine or not
app.listen(port,function(err){
    if(err){
        console.log("Error in running the server")
    }
    console.log("The server is running successfully on port:",port)
})
