
exports.up = function(knex, Promise) {
  //  Id , Idade , Nome e Cargo
  return knex.schema.createTable('funcionario', (table) => {
    table.increments('id');
    table.integer('idade').notNullable();
    table.text('nome').notNullable();
    table.text('cargo').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('funcionario'); 
};
