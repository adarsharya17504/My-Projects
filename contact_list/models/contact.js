//import library
const mongoose = require('mongoose')

//create the db schema
const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true   //make the name filling mandatory
    },
    phone: {
        type: String,
        required: true
    }

});

// create collection model "Contact"

const Contact = mongoose.model('Contact',ContactSchema)
//export our collection

module.exports = Contact;