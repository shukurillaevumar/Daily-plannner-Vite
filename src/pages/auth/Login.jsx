import "../../assets/styles/auth.css";

function Login() {
  return (
    <div className="app-register-page">
      <h2>Login</h2>
      <form>
        <div className="form-field">
          <label htmlFor="userName">Username</label>
          <input type="text" id="userName" name="userName" />
        </div>
        <div className="form-field">
          <label htmlFor="Password">Password</label>
          <input type="password" id="Password" name="Password" />
        </div>
        <button>Login</button>
      </form>
      <p>
        If you do not have an account, <a href="#">Register</a> here
      </p>
    </div>
  );
}

export default Login;
