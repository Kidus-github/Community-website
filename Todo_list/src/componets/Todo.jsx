import React from "react";

function Todo({ text, completed, todos, todo, setTodo }) {
  function onDelete() {
    setTodo(todos.filter((el) => el.id !== todo.id));
  }
  function onComplete() {
    setTodo(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: "completed" };
        }
        return item;
      })
    );
  }
  return (
    <div>
      <li>{text}</li>
      <button onClick={onComplete}>
        <i className="fas fa-check"></i>
      </button>
      <button onClick={onDelete}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
