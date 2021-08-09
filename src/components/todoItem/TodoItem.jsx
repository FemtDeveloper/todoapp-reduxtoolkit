import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../../features/todoSlice";
import "./TodoItem.css";

const TodoItem = ({ id, title, description }) => {
  const dispatch = useDispatch();
  const [done, setDone] = useState(false);

  const handleRemove = () => {
    dispatch(removeTodo({ id }));
  };
  return (
    <div className="todo-container">
      <h1>{title}</h1>
      <p>{description}</p>
      <hr />
      <div className="btn-container">
        <button
          className={done ? "btn done" : "btn notDone"}
          onClick={() => setDone(!done)}
        >
          {done ? "Done ✔ " : "Done"}
        </button>
        <button className="btn remove" onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
