
//  Create the migration schema for the log table
exports.up = function(knex, Promise) {
  return knex.schema.createTable('log', (table) => {
    table.increments();
    table.integer('id_funcionario').notNullable();
    table.text('acao').notNullable();
    table.timestamp('timestamp').defaultTo(knex.fn.now());
    table.integer('idade').notNullable();
    table.text('nome').notNullable();
    table.text('cargo').notNullable();
  })
};

// Drops log table/schemas if the migrated schema is different from what is on the DB
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('log'); 
};
