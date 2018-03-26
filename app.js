const bodyParser = require('body-parser');
const express = require('express');
var favicon = require('serve-favicon')
const flash = require('connect-flash');
const path = require('path');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);

// const helpers = require('./helpers');
const routes = require('./routes/index');


const app = express();


// middleware 
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));

// app.set('views', path.join(__dirname, 'views')); 
// app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(session({
    secret: process.env.SECRET,
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

app.use(flash());

app.use((req, res, next) => {
    // res.locals.h = helpers;
    res.locals.flashes = req.flash();
    res.locals.user = req.user || null;
    res.locals.currentPath = req.path;
    next();
});

app.use('/', routes);

// // If that above routes didnt work, we 404 them and forward to error handler
// app.use(errorHandlers.notFound);

// // One of our error handlers will see if these errors are just validation errors
// app.use(errorHandlers.flashValidationErrors);

// // Otherwise this was a really bad error we didn't expect! Shoot eh
// if (app.get('env') === 'development') {
//     /* Development Error Handler - Prints stack trace */
//     app.use(errorHandlers.developmentErrors);
// }

// // production error handler
// app.use(errorHandlers.productionErrors);

module.exports = app;