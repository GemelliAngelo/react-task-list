import { useState } from "react";
import { tasks } from "../data/tasksData";
import "./App.css";

function App() {
  const filteredList = tasks.filter((task) => {
    if (task.state != "completed") {
      return task;
    }
  });

  return (
    <>
      <div>
        <h1>Task Manager</h1>
      </div>
      <div>
        <h2>Current Tasks</h2>
        <ul>
          {filteredList.forEach((task) => {
            <li>{task.title}</li>;
          })}
        </ul>
      </div>
      <hr />
      <div>
        <h2>Current Tasks</h2>
        <ul></ul>
      </div>
    </>
  );
}

export default App;
