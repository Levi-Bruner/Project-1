import Quote from "../models/quote.js"
import store from "../store.js"

// @ts-ignore
const _quoteApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/quotes",
  timeout: 3000
});


class QuoteService {
  getQuote() {
    _quoteApi
      .get("")
      .then(res => {
        let newQuote = new Quote(res.data);
        store.commit("quotes", newQuote)
      })
      .catch(error => {
        console.error(error);
      })
  }
}

const quoteService = new QuoteService();
export default quoteService;
