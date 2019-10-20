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
    },
    
    /**
     * Get specific quote using id
     * @param {string} quoteId
     * @returns {Promise}
     */
    async getSpecificQuote(quoteId) {
      const getSpecificQuoteQuery = `SELECT id, character, quote FROM quotes WHERE id = ${quoteId}`;
      try {
        const { rows } = await queryBuilder.selectQueryBuilder(getSpecificQuoteQuery);
        if (rows.length > 0) {
          const response = {status: 'success', data: rows[0]};
          return response;
        } else {
          const response = {
            status: 'error', 
            error: `No quote with id of ${quoteId} found`
          };
          return response;
        }
      } catch (error) {
        const response = {status: 'error', error}
        return response;
      }
    },

    /**
     * Get array of quotes from a character
     * @param {string} character
     * @returns {Promise}
     */
    async getQuotesFromCharacter(characterString) {
      let getQuotesFromCharacterQuery = '';

      if (characterString.indexOf(',') > -1) {
        const characters = characterString.split(',');

        getQuotesFromCharacterQuery = 'SELECT id, character, quote FROM quotes where character = '
        for (let i=0; i<characters.length; i++) {
          const subQueryString = characters[i];
          if(i === 0) getQuotesFromCharacterQuery += `' ${subQueryString}'`;
          else getQuotesFromCharacterQuery += ` OR character = ' ${subQueryString}'`;
        }
      } else {
        getQuotesFromCharacterQuery = `SELECT id, quote FROM quotes WHERE character = ' ${characterString}'`;
      }

      try {
        const { rows } = await queryBuilder.selectQueryBuilder(getQuotesFromCharacterQuery);
        if (rows.length > 0) {
          const response = {status: 'success', data: rows};
          return response;
        } else {
          const response = {
            status: 'error', 
            error: `No quote with id of ${character} found`
          };
          console.log("error2")
          return response;
        }
      } catch (error) {
        const response = {status: 'error', error}
        console.log("error1")
        return response;
      }
    },

};

export default QuoteDb;
