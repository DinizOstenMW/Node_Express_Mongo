//Database connection file

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/EmployeeDB', {useNewUrlParser:true}, (err) => { // to connect the MongoDB database
    if(!err){
        console.log('Database connection successful')
    }else{
        console.log('Error coneecting to the Database')
    }
});

require('./employee.model')

