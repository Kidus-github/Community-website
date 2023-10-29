import React from "react";
import Todo from "./Todo";
function TodoList({ todos, setTodo }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            setTodo={setTodo}
            todos={todos}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
