// to define the schema or structure of employee document 

const mongoose = require('mongoose')

var employeeSchema = new mongoose.Schema({
    fullName: {
        type:String,
        required: 'This field is required.'
    },
    email: {
        type:String
        
    },
    mobile: {
        type:String,
        required: 'This field is required.'
    },
    city: {
        type: String,
        required: 'This field is required.'
    }
}); 


employeeSchema.path('email').validate((val) => {
    emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    return emailRegex.test(val);
}, 'Invalid Email' );

mongoose.model('Employee', employeeSchema); //('name of model', the schema created on top)
