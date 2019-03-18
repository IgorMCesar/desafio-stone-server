const Joi = require('joi');
const db = require('../db');

// Schema of funcionario to./funcionarioto be inserted on the DB follows
// the correct pattern 
const funcionarioSchema = Joi.object().keys({
  idade: Joi.number().integer().min(0).max(120).required(),
  nome: Joi.string().regex(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/).min(2).max(30).required(),
  cargo: Joi.string().min(2).max(30).required()
});

module.exports = {

  //Query the DB for a funcionario with the specified id
  findById(id) {
    return db('funcionario').where('id', id).first();
  },

  //Insert a new funcionario on the DB
  insert(funcionario) {
    const result = Joi.validate(funcionario, funcionarioSchema);
    console.log(result);
    if( result.error == null) return db('funcionario').returning('id').insert(funcionario);
    else return Promise.reject(result.error);
  },

  //Query the DB for all the funcionarios
  getAll() {
    return db('funcionario');
  },

  //Query the DB for a funcionario with the specified id
  remove(id) {
    return db('funcionario').where('id', id).returning(['nome','idade','cargo']).del();
  },
}
