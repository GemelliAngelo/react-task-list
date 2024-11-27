import { useState } from "react";
import { tasks } from "../data/tasksData";
import "./App.css";

function App() {
  const filteredList = tasks.filter((task) => {
    if (task.state != "completed") {
      return task;
    }
  });

  const renderFilteredTasks = () => {
    return filteredList.map((task, index) => {
      return (
        <li>
          <ul>
            <li>
              <h3>{task.title}</h3>
            </li>
            <li>Priority:{task.priority}</li>
            <li>Est.Time:{task.estimatedTime}</li>
          </ul>
        </li>
      );
    });
  };

  return (
    <>
      <div>
        <h1>Task Manager</h1>
      </div>
      <div>
        <h2>Current Tasks</h2>
        <ul>{renderFilteredTasks()}</ul>
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
