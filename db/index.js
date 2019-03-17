// Get the environment the DB is on, if NODE_ENV is null dev is set
const environment = process.env.NODE_ENV || 'development';

// Import knex config file
const knexConfig = require('../knexfile');

// Set the config to the environment selected
const envConfig = knexConfig[environment];
const knex = require('knex');

// Connect to the right environment
const connection = knex(envConfig);

module.exports = connection;