import "../../assets/styles/tasklist.css";
import AppFormCheckBoxInput from "./AppFormCheckBoxInput";

function AppFormTaskList() {
  return (
    <ul className="task-list">
      <AppFormCheckBoxInput />
      <p>2024/06/09 21:00</p>
      <li>Learn JavaScript projects</li>
    </ul>
  );
}

export default AppFormTaskList;
