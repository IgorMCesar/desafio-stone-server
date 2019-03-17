var express = require('express');
var router = express.Router();

var funcionario = require('../queries/funcionario');

//Route to get funcionario by id
router.post('/findById', (req, res) => {
  funcionario.findById(req.body.id)
  .then(resp => {
    res.json(resp);
  })
})

//Route to get all funcionarios
router.get('/getAll', (req, res) => {
  funcionario.getAll()
  .then(resp => {
    res.json(resp);
  })
})

//Route to insert a new funcionario
router.put('/insert', (req, res) => {
  funcionario.insert(req.body)
  .then(resp => {
    res.json(resp);
  })
})

//Route to delete a funcionario by id
router.delete('/remove', (req, res) => {
  funcionario.remove(req.body.id)
  .then(resp => {
    res.json(resp);
  })
})

module.exports = router;