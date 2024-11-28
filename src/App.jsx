import { useState } from "react";
import { tasks } from "./data/tasksData";
import "./App.css";

function App() {
  const toDoList = tasks.filter((task) => task.state != "completed");

  const completedList = tasks.filter((task) => task.state == "completed");

  function getBadgeStyle(state) {
    if (state === "completed") return "text-bg-success";
    if (state === "backlog") return "text-bg-danger";
    if (state === "in_progress") return "text-bg-warning";
  }

  const renderTasks = (tasks) => {
    return tasks.map((task) => (
      <li key={task.id}>
        <ul className="list-unstyled py-2">
          <li className="fw-bold">
            {task.title}
            <span className={"mx-2 p-2 badge " + getBadgeStyle(task.state)}>
              {task.state}
            </span>
          </li>
          <li>Priority: {task.priority}</li>
          <li>Est. Time: {task.estimatedTime}</li>
        </ul>
      </li>
    ));
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
