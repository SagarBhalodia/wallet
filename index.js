//
process.env.tz = 'Asia/Kolkata';
process.env.TZ = 'Asia/Kolkata';

var express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    dateUtils = require('date-utils'),
    app = express();


//
mongoose.connect('mongodb://localhost/wallet');


// Setting View
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);
app.set('views', process.cwd() + '/app/views');

// Setup static access folder
app.use(express.static(path.join(__dirname, 'public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());




//
require('./app/models/default');

//
var route = require('./app/routes/route');

//
route.init(app);


//
app.listen(5050, function () {
  console.log('Ready port http://localhost:5050');
});
