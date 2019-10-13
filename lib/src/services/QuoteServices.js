import QuoteDb from '../models/QuoteDb'

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
    }

};
  
export default QuoteServices;
  