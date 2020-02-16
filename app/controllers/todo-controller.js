import TodoService from "../services/todo-service.js";
import store from "../store.js";

function _drawTodos() {
  let todos = store.State.todos;
  let todosElem = document.getElementById("list");
  let todosCountElem = document.getElementById("counter");
  let template = "";

  todos.forEach(t => {
    template += t.Template;
  })
  todosElem.innerHTML = template;
  todosCountElem.innerHTML = store.State.todos.length.toString();
}

export default class TodoController {
  constructor() {
    store.subscribe("todos", _drawTodos)
    //TODO Remember to register your subscribers
    TodoService.getTodos();
  }

  addTodo(event) {
    event.preventDefault();
    var form = event.target;
    var newToDo = {
      description: form.description.value,
      completed: false,
    };
    TodoService.addTodoAsync(newToDo);
    form.reset()
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatusAsync(todoId);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(id) {
    TodoService.removeTodoAsync(id);
  }
}
