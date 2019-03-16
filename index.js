const express = require('express');

const app = express();

// Simple route to verify if the DB is up
app.get('/', (req, res) => {
  res.send('Hello World! DB Here =P');
})

//Set the port on a conditional statement
//If its on heroku port will be set to process.env 
//else port is 4000
const port = process.env.PORT || 4000;

app.listen(port);