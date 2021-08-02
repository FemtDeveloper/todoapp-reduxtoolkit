import React, { useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
import AddTodo from "./components/addTodo";
import TodoList from "./components/todoList";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AddTodo />
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
