require('dotenv').config()
var mongoose = require('mongoose');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();
var routes = require('./routes');
var host = process.env.SERVER_HOST || 'localhost'
var port = process.env.SERVER_PORT || 3001

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404, 'Sorry, we cannot find that!'));
});

// error handler
app.use(function (error, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = error.message;
  res.locals.error = req.app.get('env') === 'development' ? error : {};

  // render the error page
  res.status(error.status || 500);
  res.send(error.message)
});

const connectDb = async () => {
  //Set up default mongoose connection
  var mongoDB = process.env.DATABASE_URL || 'mongodb://127.0.0.1/posSystem';
  mongoose.connect(mongoDB, { useNewUrlParser: true });

  //Get the default connection
  var db = mongoose.connection;
  //Bind connection to error event (to get notification of connection errors)
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
};

connectDb().then(async () => {
  // console.log that your server is up and running
  var server = app.listen(port, () => console.log(`Listening on port ${port}`));
  /* TBD - Handle Timeout More Properly */
  server.setTimeout(10000);
});

