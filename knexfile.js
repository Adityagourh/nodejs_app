// knexfile.js

module.exports = {
    development: {
      client: 'pg',
      connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'bitcot',
        database: 'sql_demo',
      },
      migrations: {
        directory: './db/migrations', // Path to your migrations directory
      },
      seeds: {
        directory: './db/seeds', // Path to your seeds directory
      },
    },
  
    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL, // Heroku-style database URL
      migrations: {
        directory: './db/migrations', // Path to your migrations directory
      },
      seeds: {
        directory: './db/seeds', // Path to your seeds directory
      },
    },
  };
  