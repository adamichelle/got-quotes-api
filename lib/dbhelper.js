// dbHelper.js - create an drop all necessary tables
const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const connectionString = process.env.NODE_ENV === 'test' ? process.env.TEST_DB_URL : process.env.DB_URL;

const pool = new Pool({
  connectionString,
});

pool.on('connect', () => {
  console.log('connected to the db'); //eslint-disable-line
});

/**
 * Create users table
 */
const createQuotesTable = () => {
  const createQuotesTableQuery = 'CREATE TABLE IF NOT EXISTS '
  + 'quotes( '
  + 'id SERIAL PRIMARY KEY NOT NULL, '
  + 'character VARCHAR(128) NOT NULL, '
  + 'quote TEXT NOT NULL, '
  + 'created_on TIMESTAMP, '
  + ')';

  pool.query(createQuotesTableQuery)
    .then((res) => {
      console.log(res); //eslint-disable-line
      pool.end();
    })
    .catch((err) => {
      console.log(err) //eslint-disable-line
      pool.end();
    });
};

/**
 * Drop users table
 */
const dropQuotesTable = () => {
  const dropUsersTableQuery = 'DROP TABLE IF EXISTS quotes';
  pool.query(dropUsersTableQuery)
    .then((res) => {
      console.log(res) //eslint-disable-line
      pool.end();
    })
    .catch((err) => {
      console.log(err)
      pool.end();
    });
};

const createAllTables = () => {
  createQuotesTable();
};

const dropAllTables = () => {
  dropQuotesTable();
};

pool.on('remove', () => {
  console.log('client removed');
  process.exit(0);
});

module.exports = {
  createQuotesTable,
  dropQuotesTable,
  createAllTables,
  dropAllTables,
};

require('make-runnable');
