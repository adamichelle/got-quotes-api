import moment from 'moment';
import queryBuilder from './dbHelper';

const QuoteDb = {
    /**
     * Get all quotes
     * @returns {Promise} response
     */
    async getAllQuotes() {
      const getAllQuotesQuery = 'SELECT id, character, quote FROM quotes';
      try {
        const { rows } = await queryBuilder.selectQueryBuilder(getAllQuotesQuery);
        const response = {status: 'success', data: rows}
        return response;
      } catch (error) {
        const response = { status: 'error', error };
        return response;
      }
    },

    /**
     * Get Random quote
     * @returns {Promise} response 
     */
    async getRandomQuote() {
      const getAllQuotesQuery = 'SELECT id, character, quote FROM quotes';
      try {
        const { rows } = await queryBuilder.selectQueryBuilder(getAllQuotesQuery);
        const maximum = rows.length;
        const minimum = rows[0].id;
        const randomId = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        const response = {status: 'success', data: rows[randomId]}
        return response;
      } catch (error) {
        const response = {status: 'error', error}
        return response
      }
    }
  
};

export default QuoteDb;
