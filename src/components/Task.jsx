import "../assets/styles/task.css";

import React, { useState } from "react";
import AppFormInputText from "./form/AppFormInputText";
import AppDataTime from "./form/AppDataTime";
import AppFormTaskList from "./form/AppFormTaskList";

const ToDoList = () => {
  const [planData, setPlanData] = useState([
    {
      title: "Work out",
      deadline: 1717959600000,
      isCompleted: false,
    },
    {
      title: "Work out",
      deadline: 1717959600000,
      isCompleted: false,
    },
  ]);
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState(0);

  const handleChange = (field, data) => {
    if (field === "title") {
      setTitle(data);
    }
    if (field === "deadline") {
      setDeadline(data);
    }
  };
  return (
    <div className="todo-container">
      <h2>
        To-Do List
        <span role="img" aria-label="emoji">
          📝
        </span>
      </h2>
      <AppFormInputText value={title} onChangeTitle={handleChange} />
      <AppDataTime value={deadline} onChangeDeadline={handleChange} />
      {planData.map((plan, index) => (
        <AppFormTaskList key={index} plan={plan} />
      ))}
    </div>
  );
};

export default ToDoList;
