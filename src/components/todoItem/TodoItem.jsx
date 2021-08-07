import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../../features/todoSlice";

const TodoItem = ({ id, title, description }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeTodo({ id }));
  };
  return (
    <div key={id} className="todo-container">
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="btn-container">
        <button className="btn done">Done</button>
        <button className="btn edit">Edit</button>
        <button className="btn remove" onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
