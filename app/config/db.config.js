require('dotenv').config();

module.exports = {
  HOST: 'localhost',
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  DB: 'testdb',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

// Pool is for sequelize. 
// max: max number of connections in pool
// min: min number of connections in pool
// idle: max time, in ms, that a connection can be idle before released
// acquire: max time, in ms, that a pool will try to get connection before error
