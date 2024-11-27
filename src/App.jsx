import { useState } from "react";
import { tasks } from "../data/tasksData";
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

  const rendertoDoTasks = () => {
    return toDoList.map((task, index) => {
      return (
        <li>
          <ul className="list-unstyled">
            <li key={task.id}>
              <h3 className="h5">{task.title}</h3>
            </li>
            <li>Priority: {task.priority}</li>
            <li>Est.Time: {task.estimatedTime}</li>
          </ul>
        </li>
      );
    });
  };

  const renderCompletedTasks = () => {
    return completedList.map((task) => {
      return (
        <li>
          <ul className="list-unstyled">
            <li key={task.id}>
              <h3 className="h5">{task.title}</h3>
            </li>
            <li key={task.id + "c"}>Priority: {task.priority}</li>
            <li key={task.id + "d"}>Est.Time: {task.estimatedTime}</li>
          </ul>
        </li>
      );
    });
  };

  return (
    <>
      <div className="container py-3">
        <h1 className="h2">Task Manager</h1>
      </div>
      <div className="container">
        <h2 className="h4 py-4">Current Tasks({toDoList.length})</h2>
        <ul>{rendertoDoTasks()}</ul>
      </div>
      <hr />
      <div className="container">
        <h2 className="h4 py-4">Current Tasks({completedList.length})</h2>
        <ul>{renderCompletedTasks()}</ul>
      </div>
    </>
  );
}

export default App;
