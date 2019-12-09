const QuoteDb = require('../models/QuoteDb')

const QuoteServices = {
    /**
     *
     * @returns {Promise}
     */
    async getAllQuotesService() {
      try {
        return await QuoteDb.getAllQuotes();
      } catch (error) {
        throw new Error(error.message);
      }
    },
  
    /**
     * 
     * @returns {Promise}
     */
    async getRandomQuoteService() {
      try {
        return await QuoteDb.getRandomQuote();
      } catch (error) {
        throw new Error(error.message)
      }
    },

    /**
     * 
     * @returns {Promise}
     */
    async getSpecificQuoteService(quoteId) {
      try {
        return await QuoteDb.getSpecificQuote(quoteId);
      } catch (error) {
        throw new Error(error.message)
      }
    },

    /**
     * 
     * @returns {Promise}
     */
    async getQuotesFromCharacterService(character) {
      try {
        return await QuoteDb.getQuotesFromCharacter(character);
      } catch (error) {
        throw new Error(error.message)
      }
    },

};
  
module.exports = QuoteServices;
