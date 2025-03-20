const mongoose = require('mongoose');

// Define schema for the contact with validation
const contactSchema = new mongoose.Schema({
    firstName: { 
        type: String, 
        required: [true, 'First name is required'],
        minlength: [2, 'First name should have at least 2 characters'] 
    },
    lastName: { 
        type: String, 
        required: [true, 'Last name is required'],
        minlength: [2, 'Last name should have at least 2 characters'] 
    },
    email: { 
        type: String, 
        required: [true, 'Email is required'],
        unique: true, // Ensures no duplicate emails
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'] // Email format validation
    },
    favoriteColor: { 
        type: String, 
        required: [true, 'Favorite color is required'] 
    },
    birthday: { 
        type: Date, 
        required: [true, 'Birthday is required'] 
    }
});

// Create the model for the Contact
module.exports = mongoose.model('Contact', contactSchema);
