const db = require('../db');

module.exports = {

  //Insert a new log on the DB
  insert(log) {
    return db('log').insert(log);
  },

  //Query the DB for all logs
  getAll() {
    return db('log');
  },
}
