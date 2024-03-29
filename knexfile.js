module.exports = {
  // Local connection to DB config
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: '123456',
      database: 'desafio-stone'
    }
  },
  //Heroku connection to DB config
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  },
};
