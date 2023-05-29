const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        minlength: [2, 'min length must be at least 2'],
        maxlength: [200, 'max length must be at least 200']
    },
    lname: {
        type: String,
        required: true,
        minlength: [2, 'min length must be at least 2'],
        maxlength: [200, 'max length must be at least 200']
    },
    phone: {
        type: String,
        required: true,
        minlength: [9, 'min length must be at least 9'],
        maxlength: [20, 'max length must be at least 200']
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        minlength: [2, 'min length must be at least 2'],
        maxlength: [200, 'max length must be at least 200']
        
        
        
    },
});

exports.Customer = mongoose.model("customer", customerSchema);