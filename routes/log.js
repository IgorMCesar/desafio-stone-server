var express = require('express');
var router = express.Router();

var log = require('../db/log');

//Route to get all logs
router.get('/getAll', (req, res) => {
  log.getAll()
  .then(resp => {
    res.json(resp);
  }).catch((err) => {
    res.status(500).json(err);
  })
})

module.exports = router;