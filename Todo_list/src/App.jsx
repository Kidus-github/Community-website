import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./componets/Form";
import TodoList from "./componets/TodoList";
function App() {
  const [todotext, setTodotext] = useState("");
  const [status, setStatus] = useState("all");
  const [todo, setTodo] = useState(
    [] &&
      function () {
        const TodoList = JSON.parse(localStorage.getItem("todo"));
        if (!TodoList) localStorage.setItem("todo", JSON.stringify([]));
        return TodoList;
      }
  );
  const [filtertodos, setFilterTodos] = useState([]);

  function filterHandler() {
    switch (status) {
      case "completed":
        setFilterTodos(todo.filter((todo) => todo.completed === "completed"));
        break;
      case "uncompleted":
        setFilterTodos(todo.filter((todo) => todo.completed === "uncompleted"));
        break;
      case "pending":
        setFilterTodos(todo.filter((todo) => todo.completed === "pending"));
        break;
      default:
        setFilterTodos(todo);
        break;
    }
  }

  function saveLocalTodos() {
    localStorage.setItem("todo", JSON.stringify(todo));
  }
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify([]));
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [status, todo]);

  return (
    <>
      <header>
        <h1>Hello React</h1>
      </header>
      <Form
        todotext={todotext}
        setTodotext={setTodotext}
        todo={todo}
        setTodo={setTodo}
        setStatus={setStatus}
        status={status}
      />
      <TodoList todos={filtertodos} setTodo={setTodo} />
    </>
  );
}

export default App;
