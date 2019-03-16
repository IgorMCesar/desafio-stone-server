
exports.seed = async function(knex, Promise) {
  // Wait until ALL existing funcionarios are deleted
  await knex('funcionario').del();
  
  // Wait for the sequence of the id iteration to be restarted to 1
  await knex.raw('ALTER SEQUENCE funcionario_id_seq restart with 1');
  
  // Insert seed entries
  return knex('funcionario').insert([{
    idade: 27,
    nome: 'Igor',
    cargo: 'Dev'
  }]);
};
