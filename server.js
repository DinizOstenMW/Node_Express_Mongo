//https://www.quora.com/What-is-the-purpose-and-difference-between-AngularJS-Expressjs-and-Node-js-What-role-will-each-one-of-these-play-in-a-web-app
//https://stackoverflow.com/questions/18817630/what-are-the-basic-differences-and-similarities-between-angular-js-and-express-j

 require('./models/db')


 const express = require('express');
 const path = require('path');
 const exphbs = require('express-handlebars');
 const bodyParser = require('body-parser');

 const employeeController = require('./controllers/employeeController')

var app = express()
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json())

//hbs is a express.js wrapper for the handlebars.js javascript template engine.
 app.set('views', path.join(__dirname,'/views/')); // /views/ is a folder where the express-handlebars views files will be stored.
 app.engine('hbs', exphbs({extname:'hbs', defaultLayout:'mainLayout', layoutsDir: __dirname + '/views/layouts/'})) //layouts will be used to create the layouts for the application
 app.set('view engine', 'hbs')

 app.listen(3000, () => { 
     console.log('Express server started at port number 3000')
 });

// from the app will start i.e. localhost:3000/employee and not localhost:3000
 app.use('/employee',employeeController) 

