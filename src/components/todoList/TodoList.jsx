import React from "react";
import { useSelector } from "react-redux";
import "./TodoList.css";

const TodoList = () => {
  const todoList = useSelector((state) => state.todos.todoList);

  return (
    <div className="todoList--container">
      {todoList.map((todo) => {
        return (
          <div key={todo.id} className="todo-container">
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
            <div className="btn-container">
              <button className="btn done">Done</button>
              <button className="btn edit">Edit</button>
              <button className="btn remove">Remove</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
