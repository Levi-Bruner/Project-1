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
        store.commit("todos", res.data.data)
        console.log("pulling from api", store.State.todos)
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
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    todoApi.put(todoId, todo);
    //TODO do you care about this data? or should you go get something else?
  }

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
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
  }
}

const todoService = new TodoService();
export default todoService;
