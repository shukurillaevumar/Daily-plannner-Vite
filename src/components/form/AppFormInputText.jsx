import { useState } from "react";
import "../../assets/styles/inputAndButton.css";

function AppFormInputText({ value, onChangeTitle }) {
  const [text, setText] = useState(value);
  const onChangeHandler = (e) => {
    setText(e.target.value);
    onChangeTitle("title", e.target.value);
  };
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Add your task"
        className="task-input"
        value={text}
        onChange={onChangeHandler}
      />
      <button className="add-btn">ADD</button>
    </div>
  );
}

export default AppFormInputText;
