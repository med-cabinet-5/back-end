module.exports = {
  development: {
    client: 'sqlite3',
    connection: { 
      filename: './database/medcab-dev.db3' 
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
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
  test: {
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
