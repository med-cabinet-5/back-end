module.exports = {
  development: {
    client: 'sqlite3',
    connection: { 
      filename: './database/medcab-dev.db3' 
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { 
      directory: './database/seeds' 
    },
  },
  testing: {
    client: 'sqlite3',
    connection: { 
      filename: './database/medcab-test.db3' 
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { 
      directory: './database/seeds' 
    },
  },
};