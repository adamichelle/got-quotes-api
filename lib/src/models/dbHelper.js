// db/dbHelper.js
// a method to for querying the DB
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.NODE_ENV === 'test' ? process.env.TEST_DB_URL : process.env.DB_URL;

const pool = new Pool({
  connectionString,
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


export default queryBuilder;
