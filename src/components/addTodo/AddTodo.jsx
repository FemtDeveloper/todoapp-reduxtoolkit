import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveTodo } from "../../features/todoSlice";
import TodoList from "../todoList/TodoList";
import "./AddTodo.css";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const add = () => {
    if (title.trim() === "" || description.trim() === "") {
      setError(true);
    } else {
      console.log(`Adding ${title} and ${description}`);
      dispatch(
        saveTodo({
          title,
          description,
          id: Date.now(),
        })
      );
      setError(false);
      setTitle("");
      setDescription("");
    }
  };
  return (
    <div className="addTodo">
      <div className="addTodo-container">
        <h2>Add Todo</h2>
        {error && (
          <h3 className="noTodos">You must add a title and description</h3>
        )}
        <input
          type="text"
          placeholder="Insert Title"
          onChange={(e) => setTitle(e.target.value)}
          className="addTodo-container--input"
          value={title}
        />
        <textarea
          name="tarea"
          value={description}
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
