export default class ToDo {
  constructor(data) {
    this.id = data._id
    this.completed = data.completed
    this.user = data.user
    this.description = data.description
  }

  get Template() {
    return `
    <li>${this.description} <button onclick="app.todoController.removeTodo('${this.id}')" class="btn btn-danger">x</button><button type="button" onclick="app.todoController.toggleTodoStatus('${this.id}')" name="" title="Mark as completed"
		id="" class="btn btn-secondary" btn-lg btn-block></button>
    </li>
    `
  }
}