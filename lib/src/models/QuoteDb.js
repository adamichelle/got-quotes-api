import moment from 'moment';
import queryBuilder from './dbHelper';

const QuoteDb = {
    /**
     * Create a user
     * @param {object} userDetails
     * @returns {Promise} rows
     */
    async getAllQuotes() {
      const createUserQuery = 'SELECT id, character, quote FROM quotes';
      try {
        const { rows } = await queryBuilder.selectQueryBuilder(createUserQuery);
        const response = {status: 'success', data: rows}
        // console.log(rows)
        return response;
      } catch (error) {
        const response = { status: 'error', error };
        console.log(response);
      }
    },
  
};

export default QuoteDb;
