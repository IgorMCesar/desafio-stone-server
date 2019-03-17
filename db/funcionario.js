const Joi = require('joi');
const db = require('../db');

// Schema of funcionario to./funcionarioto be inserted on the DB follows
// the correct pattern 
const funcionarioSchema = Joi.object().keys({
  idade: Joi.number().integer().min(0).max(120).required(),
  nome: Joi.string().alphanum().min(2).max(30).required(),
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
    //Validates if the data on the obj funcionario is correct, if it is insert it on the DB
    if( result.error == null) return db('funcionario').insert(funcionario);
    // Returns the error if the pattern is not correct
    else return Promise.reject(result.error);
  },

  //Query the DB for all the funcionarios
  getAll() {
    return db('funcionario');
  },

  //Query the DB for a funcionario with the specified id
  remove(id) {
    console.log(id);
    return db('funcionario').where('id', id).del();
  },
}
