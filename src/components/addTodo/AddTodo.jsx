import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveTodo } from "../../features/todoSlice";
import "./AddTodo.css";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const add = () => {
    console.log(`Adding ${title} and ${description}`);

    dispatch(
      saveTodo({
        title,
        description,
        id: Date.now(),
      })
    );
  };

  return (
    <div className="addTodo">
      <div className="addTodo-container">
        <h2>Add Todo</h2>
        <input
          type="text"
          placeholder="Insert Title"
          onChange={(e) => setTitle(e.target.value)}
          className="addTodo-container--input"
        />
        <textarea
          name="tarea"
          id=""
          cols="30"
          rows="5"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          className="addTodo-container--textarea"
        ></textarea>
        <button onClick={add} className="btn">
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
