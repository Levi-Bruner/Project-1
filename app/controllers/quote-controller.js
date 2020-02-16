import store from "../store.js"
import quoteService from "../services/quote-service.js";

function _drawQuote() {
  let quote = store.State.quotes;
  document.getElementById("quote").innerHTML = `${quote.Template}`
}

export default class QuoteController {
  constructor() {
    store.subscribe("quotes", _drawQuote)
    quoteService.getQuote();
  }
}
