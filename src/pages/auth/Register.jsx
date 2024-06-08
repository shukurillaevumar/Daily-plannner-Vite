import { useState } from "react";
import "../../assets/styles/auth.css";

function Register() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const sendRequest = (url, method = "POST", data) => {
    const baseUrl = "https://daily-planner-aq5u.onrender.com/";
    fetch(baseUrl + url, {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  };

  const handleInputChange = (e) => {
    if (e.target.name === "userName") {
      setUserName(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  function handleClick(e) {
    e.preventDefault();
    const authData = {
      userName: userName,
      password: password,
    };
    sendRequest("auth/register", "POST", authData);
  }
  return (
    <div className="app-register-page">
      <h2>Register</h2>

      <form>
        <div className="form-field">
          <label htmlFor="userName">Username</label>
          <input
            onChange={handleInputChange}
            type="text"
            id="userName"
            name="userName"
            value={userName}
          />
        </div>
        <div className="form-field">
          <label htmlFor="password">Password</label>
          <input
            onChange={handleInputChange}
            type="password"
            id="password"
            name="password"
            value={password}
          />
        </div>
        <button type="submit" onClick={handleClick}>
          Register
        </button>
      </form>
      <p>
        If you have an account, <a href="#">Login</a> here
      </p>
    </div>
  );
}

export default Register;
