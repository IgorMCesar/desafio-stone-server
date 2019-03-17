var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var logger = require('morgan');

const { notFound, errorHandler} = require('./middlewares');
const funcionario = require('./routes/funcionario.js');

var app = express();

//Block browser access to this server with the wrong origin
var corsOptions = {
  origin: process.env.NODE_ENV ? 'https://desafio-stone.now.sh' : 'http://localhost:8080',
  optionsSuccessStatus: 200
}

//Use cors with config
app.use(cors(corsOptions));

// EXPRESS INITIAL SETUP
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// EXPRESS INITIAL SETUP

// Simple route to verify if the server is up
app.get('/', (req, res) => {
  res.json({
    message: 'Hello World! Server Here =D'
  })
})

//Use all routes from funcionario, so all routes inside here are /funcionario/~something~
app.use('/funcionario', funcionario);

//If the route requested doesnt match with any route notFound is invoked
app.use(notFound);
//After notFound is invoked it calls errorHandler with next and erroHandler threats the error
app.use(errorHandler);

module.exports = app;
