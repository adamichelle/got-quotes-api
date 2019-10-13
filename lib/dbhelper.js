// dbHelper.js - create an drop all necessary tables
fs = require('fs');
const moment = require('moment')

const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const connectionString = process.env.NODE_ENV === 'dev' ? process.env.DB_URL : process.env.DATABASE_URL;
const ssl = process.env.NODE_ENV === 'dev' ? false : true;

const pool = new Pool({
  connectionString,
  ssl,
});

pool.on('connect', () => {
  console.log('connected to the db'); //eslint-disable-line
});

function queryBuilder(queryText, values) {
  return new Promise((resolve, reject) => {
    pool.query(queryText, values)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

/**
 * Create users table
 */
const createQuotesTable = () => {
  const createQuotesTableQuery = 'CREATE TABLE IF NOT EXISTS '
  + 'quotes( '
  + 'id SERIAL PRIMARY KEY NOT NULL, '
  + 'character VARCHAR(128) NOT NULL, '
  + 'quote TEXT NOT NULL, '
  + 'created_on TIMESTAMP'
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
  const dropQuotesTableQuery = 'DROP TABLE IF EXISTS quotes';
  pool.query(dropQuotesTableQuery)
    .then((res) => {
      console.log(res) //eslint-disable-line
      pool.end();
    })
    .catch((err) => {
      console.log(err)
      pool.end();
    });
};

const addQuotesFromFile = async () => {
  let rawdata = fs.readFileSync('./quotes.json');
  let quotes = JSON.parse(rawdata);
  for (let quote of quotes) {
    const addQuotesQuery = 'INSERT INTO quotes(character, quote, created_on) '
                          + 'VALUES($1, $2, $3) '
                          + 'returning *';
    const values = [
      quote.character,
      quote.quote,
      moment(new Date()),
    ];

    try {
      const { rows } = await queryBuilder(addQuotesQuery, values)
      console.log(rows)
      
    } catch (error) {
      const response = { status: 'error', error };
      console.log(response); 
    }

  }
}

pool.on('remove', () => {
  console.log('client removed');
  process.exit(0);
});

module.exports = {
  createQuotesTable,
  dropQuotesTable,
  addQuotesFromFile
};

require('make-runnable');
