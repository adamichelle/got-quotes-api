// db/dbHelper.js
// a method to for querying the DB
const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const connectionString = process.env.NODE_ENV === 'dev' ? process.env.DB_URL : process.env.DATABASE_URL;
const ssl = process.env.NODE_ENV === 'dev' ? false : true;

const pool = new Pool({
  connectionString,
  ssl,
});

const queryBuilder = {
  /**
   * @param {Object} queryText
   * @param {Object} values
   * @returns {Promise} res or err
   */
  insertQueryBuilder(queryText, values) {
    return new Promise((resolve, reject) => {
      pool.query(queryText, values)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  /**
   * @param {Object} queryText
   * @returns {Promise} res or err
   */
  selectQueryBuilder(queryText) {
    return new Promise((resolve, reject) => {
      pool.query(queryText)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

};


module.exports = queryBuilder;
