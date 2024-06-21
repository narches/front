const express = require('express');
const mongodb = require('./database/monge');
const bodyParser = require('body-parser');
const env = require("dotenv").config()
const expressLayouts = require('express-ejs-layouts');
const usersController = require('./controllers/usersController');



const app = express();
/* ***********************
 * View Engine
 *************************/
app.set("view engine", "ejs")
app.use(expressLayouts)
app.set("layout", "./layouts/layout") 



// Parse JSON bodies
app.use(bodyParser.json());



app.use('/', require('./routes'));



const port = process.env.PORT
const host = process.env.HOST

mongodb.initDb((err) => {
  if(err) {
    console.log(err);
  }
  else {
    app.listen(process.env.PORT || port);
    console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
  }
});
