import React from "react";

function Form({ todotext, setTodotext, todo, setTodo, status, setStatus }) {
  function onsubmit(e) {
    e.preventDefault();
    setTodo([
      ...todo,
      { text: todotext, completed: "uncompleted", id: Math.random() * 1000 },
    ]);
    setTodotext("");
  }
  return (
    <div>
      <form>
        <input
          type="text"
          className="todo-input"
          value={todotext}
          onChange={(e) => {
            setTodotext(e.target.value);
          }}
        />
        <button type="submit" className="todo-button" onClick={onsubmit}>
          <i className="fas fa-plus-square"></i>
        </button>
        <select
          name="todos"
          className="filter-todo"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </form>
    </div>
  );
}

export default Form;
