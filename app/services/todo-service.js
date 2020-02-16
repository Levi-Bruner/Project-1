import store from "../store.js";
import ToDo from "../models/to-do.js"

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/Levi/todos/",
  timeout: 8000
});

class TodoService {
  getTodos() {
    todoApi
      .get("")
      .then(res => {
        let myTodos = res.data.data.map(t => new ToDo(t));
        store.commit("todos", myTodos)
      })
      .catch(error => {
        console.error(error);
      });
  }

  addTodoAsync(newToDo) {
    todoApi.post("", newToDo)
      .then(res => {
        let newApiToDo = new ToDo(res.data.data);
        let todos = [...store.State.todos, newApiToDo];
        store.commit("todos", todos)
      })
      .catch(error => {
        console.error(error);
      });
  }

  toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo.id == todoId);
    if (todo.completed = "false") {
      todo.completed = "true";
    } else if (todo.completed = "true") {
      todo.completed = "false"
    }
    console.log(todo.completed)
  }

  // todoApi.put(todoId, todo);
  //TODO do you care about this data? or should you go get something else?

  removeTodoAsync(id) {
    todoApi
      .delete(id)
      .then(() => {
        let filteredToDos = store.State.todos.filter(t => t.id != id);
        store.commit("todos", filteredToDos);
      })
      .catch(error => {
        console.error(error);
      });
  }
}


const todoService = new TodoService();
export default todoService;
