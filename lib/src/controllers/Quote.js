import QuoteServices from '../services/QuoteServices';

function isEmpty(obj) {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
  }
  return true;
}

const Quote = {
    /**
   * @param {Object} req
   * @param {Object} res
   */
  async getAllQuotes(req, res) {
    const query = req.query;
    if(isEmpty(query)) {
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
          const response = res.status(400).send(error);
          return response;
      }
    } else {
      const character = query.character;
      try {
        const responseObject = await QuoteServices.getQuotesFromCharacterService(character);
        let response;
        if (responseObject.status === 'success') {
          response = res.status(200).send(responseObject);
        }
        if (responseObject.status === 'error') {
          response = res.status(400).send(responseObject);
        }
        return response;
      } catch (error) {
        const response = res.status(400).send(error);
        return response;
      }
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
        const response = res.status(400).send(error);
        return response;
    }
  },

  /**
   * @param {Object} req
   * @param {Object} res
   */
  async getSpecificQuote(req, res) {
    try {
        const quoteId = Number(req.params.quoteId)
        const responseObject = await QuoteServices.getSpecificQuoteService(quoteId);
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
        const response = res.status(400).send(error);
        return response;
    }
  },

  
}

export default Quote;
