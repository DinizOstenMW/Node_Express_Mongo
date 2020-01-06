const express = require('express')
var router = express.Router();
const mongoose = require('mongoose')
const Employee = mongoose.model('Employee') //accessing the Employee schema from employee.model.js

// when we enter data in the front end form, it goes to back end and from there the GET function fetches it, and then uses POST to send it to the DB
router.get('/', (req,res)=>{
    res.render("employee/addOrEdit",{ //rendering addorEdits
        viewTitle: "Insert Employee"
    });
});

router.post('/', (req,res) => {
    //console.log(req.body) // will display data in json format
    insertRecord(req,res);
});

function insertRecord(req,res){
    var employee = new Employee();
    employee.fullName = req.body.fullName;
    employee.email = req.body.email;
    employee.mobile = req.body.mobile;
    employee.city = req.body.city;
    employee.save((err,doc) => {
        if (!err) {
            res.redirect('/employee/list');
        } else {
            if (err.name == ValidationError) {
                handleValidationError(err, req.body);
                res.render("employee/addOrEdit",{
                    viewTitle: "Insert Employee",
                    employee:req.body
                });

            }
            else    
            console.log('Error during record insertion: ' + err)
        }
    });
}

router.get('/list',(req,res) => {
   Employee.find((err, docs) => {
       if(!err) {
           res.render("employee/list",{
               list:docs
           });
       }
       else{
           console.log('Error retrieving employee details: ' + err)
       }
   });
});

function handleValidationError(err, body){
    for(fields in err.errors){
         switch(err.errors[fields].path){
             case 'fullName':
                 body['fullNameError'] = err.errors[fields].message;
                 break;
            case 'emailError':
                 body['emailError'] = err.errors[fields].message;
                 break;
            default:
                break;
         }
    }
}

module.exports = router;