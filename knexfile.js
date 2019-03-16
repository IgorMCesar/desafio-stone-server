module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: '123456',
      database: 'desafio-stone'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  },
};
