var express = require('express');
var router = express.Router();

var funcionario = require('../db/funcionario');
var log = require('../db/log');

//Route to get funcionario by id
router.post('/findById', (req, res) => {
  funcionario.findById(req.body.id)
  .then(resp => {
    res.json(resp);
  }).catch((err) => {
    res.status(500).json(err);
  })
})

//Route to get all funcionarios
router.get('/getAll', (req, res) => {
  funcionario.getAll()
  .then(resp => {
    res.json(resp);
  }).catch((err) => {
    res.status(500).json(err);
  })
})

//Route to insert a new funcionario
router.put('/insert', (req, res) => {
  funcionario.insert(req.body).then((insertResult) => {
    var logVal = req.body;
    logVal.acao = 'INSERT';
    logVal.id_funcionario = insertResult[0];
    
    return log.insert(logVal);
  }).then(logResult => {
    res.json(logResult);
  }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
  })
})

//Route to delete a funcionario by id
router.delete('/remove', (req, res) => {
  funcionario.remove(req.body.id).then((removeResult) => {
    var logVal = removeResult[0];
    logVal.id_funcionario = req.body.id;
    logVal.acao = 'REMOVE';

    return log.insert(logVal);
  }).then(logResult => {
    res.json(logResult);
  }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
  })
})

module.exports = router;