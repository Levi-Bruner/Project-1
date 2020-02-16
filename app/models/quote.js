export default class Quote {
  constructor(data) {
    this.text = data.quote.body
    this.author = data.quote.author
  }

  get Template() {
    return `
    <h5>"${this.text}"</h5><p>-${this.author}</p>`
  }
}