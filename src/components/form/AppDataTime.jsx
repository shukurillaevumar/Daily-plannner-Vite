import { useState } from "react";
import "../../assets/styles/dateTime.css";
function AppDataTime(value, onChangeDeadline) {
  const [date, setDate] = useState(value);
  const handleChange = (e) => {
    setDate(e.target.value);
  };
  return (
    <div className="app-date-time">
      <input
        type="datetime-local"
        value={date}
        onChange={handleChange}
        className="date-time"
        name="date-time"
      />
    </div>
  );
}

export default AppDataTime;
