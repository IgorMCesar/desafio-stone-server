
//  Create the migration schema for the funcionario table
exports.up = function(knex, Promise) {
  return knex.schema.createTable('funcionario', (table) => {
    table.increments();
    table.integer('idade').notNullable();
    table.text('nome').notNullable();
    table.text('cargo').notNullable();
  })
};

// Drops funcionario table/schemas if the migrated schema is different from what is on the DB
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('funcionario'); 
};
