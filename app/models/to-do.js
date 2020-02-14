export default class ToDo {
  constructor(data) {
    this.id = data._id
    this.completed = data.completed
    this.user = data.user
    this.description = data.description
  }

  get Template() {
    return `
    
    `
  }
}