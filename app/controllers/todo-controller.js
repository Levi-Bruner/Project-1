import TodoService from "../services/todo-service.js";
import store from "../store.js";

//TODO Create the render function
function _drawTodos() { }

export default class TodoController {
  constructor() {
    store.subscribe("todos", _drawTodos)
    //TODO Remember to register your subscribers
    TodoService.getTodos();
  }

  addTodo(event) {
    debugger
    event.preventDefault();
    var form = event.target;
    var newToDo = {
      description: form.description.value,
      completed: false,
    };
    // console.log("controller Todo", newToDo)
    TodoService.addTodoAsync(newToDo);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatusAsync(todoId);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    TodoService.removeTodoAsync(todoId);
  }
}
