const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const routes = require('./routes/index');

const app = express();

// middleware 
// app.set('views', path.join(__dirname, 'views')); 
// app.set('view engine', 'pug');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

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