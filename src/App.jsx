import React, { useState } from "react";
import "./App.css";
import Data from "./Data";
import Todos from "./Components/Todos";

const App = () => {
  //states
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(Data);
  const handleChange = (e) => {
    // console.log(e.target.value);
    setTask(e.target.value);
  };
  const handleClick = () => {
    setTodos([...todos, { task: task }]);
    setTask("");
  };
  return (
    <div className="main">
      <div className="container">
        <h1>To-do List</h1>
        <div className="inp-holder">
          <input
            value={task}
            type="text"
            className="inp"
            placeholder="Add tasks here"
            onChange={handleChange}
          />
          <button className="btn" onClick={handleClick}>
            +
          </button>
        </div>
        <Todos todoArr={todos} />
      </div>
    </div>
  );
};

export default App;
