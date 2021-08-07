import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "../todoItem/TodoItem";
import "./TodoList.css";

const TodoList = () => {
  const todoList = useSelector((state) => state.todos);

  console.log(todoList);

  return (
    <div className="todoList--container">
      {todoList.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            description={todo.description}
          />
        );
        X;
      })}
    </div>
  );
};

export default TodoList;
