
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('funcionario').del()
    .then(function () {
      // Inserts seed entries
      return knex('funcionario').insert([
        {Id: 1, Idade: 27, Nome: 'Igor', Cargo: 'Dev'},
      ]);
    });
};
