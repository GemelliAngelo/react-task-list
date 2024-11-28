import { useState } from "react";
import { tasks } from "./data/tasksData";
import "./App.css";

function App() {
  const toDoList = tasks.filter((task) => {
    if (task.state != "completed") {
      return task;
    }
  });

  const completedList = tasks.filter((task) => {
    if (task.state == "completed") {
      return task;
    }
  });

  const renderTasks = (tasks) => {
    return tasks.map((task) => {
      return (
        <li key={task.id}>
          <ul className="list-unstyled py-2">
            <li className="fw-bold">
              {task.title}
              <span className="badge text-bg-warning mx-2 p-2">
                {task.state}
              </span>
            </li>
            <li>Priority: {task.priority}</li>
            <li>Est.Time: {task.estimatedTime}</li>
          </ul>
        </li>
      );
    });
  };

  return (
    <>
      <div id="header" className="px-3 py-3">
        <h1 className="h2">Task Manager</h1>
      </div>
      <div className="px-3">
        <h2 className="h4 py-4">Current Tasks({toDoList.length})</h2>
        <ul className="list-unstyled">{renderTasks(toDoList)}</ul>
      </div>
      <hr />
      <div className="px-3">
        <h2 className="h4 py-4">Current Tasks({completedList.length})</h2>
        <ul className="list-unstyled">{renderTasks(completedList)}</ul>
      </div>
    </>
  );
}

export default App;
