
exports.up = function(knex, Promise) {
  //  Id , Idade , Nome e Cargo
  return knex.schema.createTable('funcionario', (table) => {
    table.increments('Id');
    table.integer('Idade').notNullable();
    table.text('Nome').notNullable();
    table.text('Cargo').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('funcionario'); 
};
