import QuoteServices from '../services/QuoteServices';

const Quote = {
    /**
   * @param {Object} req
   * @param {Object} res
   */
  async getAllQuotes(req, res) {
    try {
        const responseObject = await QuoteServices.getAllQuotesService()
        let response;
        if (responseObject.status === 'success') {
          response = res.status(200).send(responseObject);
        }
        if (responseObject.status === 'error') {
          response = res.status(400).send(responseObject);
        }
        return response;
    } catch (error) {
        console.log(error);
    }
  },

  /**
   * @param {Object} req
   * @param {Object} res
   */
  async getRandomQuote(req, res) {
    try {
        const responseObject = await QuoteServices.getRandomQuoteService();
        let response;
        if (responseObject.status === 'success') {
          response = res.status(200).send(responseObject);
        }
        if (responseObject.status === 'error') {
          response = res.status(400).send(responseObject);
        }
        return response;
    } catch (error) {
        console.log(error);
    }
  },
  
}

export default Quote;
