const express = require('express');
const path = require('path');
const port = 8000;

//database setup
const db = require('./config/mongoose');
//schema will be used to create entries

const Contact = require("./models/contact");

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());

//middlewares

app.use(function(req,res,next){
    next();
})
app.use(function(req,res,next){
    next();
})

app.use(express.static('assets'));

var contactList = [
    {
        name: "Arpan",
        phone: "1111111111"
    },
    {
        name: "Tony Stark",
        phone: "1234567890"
    },
    {
        name: "Coding Ninjas",
        phone: "12131321321"
    }
]

// to delete the contacts on screen
app.get("/delete-contact",function(req,res){
    //get the id by use of query

    let id = req.query.id;
    Contact.findByIdAndDelete(id,function(err){
        if(err){
            console.log("Some error in deleting an object from database");
            return;

        }
        return res.redirect("back");
    })
  
})


app.get('/practice', function(req, res){
  
    return res.render('practice', {
        title: "Let us play with ejs"
    });
});

// to get the contents of contactlist array on screen
app.get('/', function(req, res){
    Contact.find({},function(err,conatact){
        if(err){
            console.log("Error in fetching the contacts")
        }
        return res.render('home',{
            title: "Contact List",
            contact_list: conatact
        })
    })
})

//to post the particular inout on screen
app.post('/create-contact', function(req, res){
    
    // contactList.push({
        
    //     name: req.body.name,
    //     phone: req.body.phone,
    // })
    //contactList.push(req.body);

    //using database push entries
    Contact.create({
        name:req.body.name,
        phone: req.body.phone
    },function(err,contact){ //to check if contact is created or not
        if(err){
            console.log("error in creating contact");
            return;
        }
        console.log("********",contact);
        return res.redirect('back');
    })
    

});

app.listen(port, function(err){
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log('Yup!My Server is running on Port', port);
})