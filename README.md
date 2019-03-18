# https://desafio-stone.now.sh/#/

## Desfio Stone Server

### How to run:

#### Set up DB
1. Create a new database using Postgres
2. Go inside knexfile.js and change connection info to your host, user, password and database.
```js
development: {
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: '123456',
    database: 'desafio-stone'
  }
},
```
3. Install knex globally 
```sh
npm i -g knex
```
4. Run knex to migrate DB Schemas
```sh
knex migrate:latest
```

#### Set up and run server
```sh
npm install
npm run dev
```
