const db = require('../db');

module.exports = {

  //Insert a new log on the DB
  insert(log) {
    return db('log').insert(log);
  },
}
