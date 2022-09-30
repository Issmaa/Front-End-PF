import { Link } from "react-router-dom";
import { useState } from "react";
import s from "./Login.module.css";
import validate from "./validator";

export default function Login() {
  const [passEye, setPassEye] = useState(false);

  const toggleEye = () => {
    setPassEye(!passEye);
  };

  console.log(passEye);

  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [click, setClick] = useState({
    username: false,
    email: false,
    password: false,
  });

  const [error, setError] = useState({});

  const handleClick = (e) => {
    if (!click[`${e.target.name}`]) {
      setClick({
        ...click,
        [e.target.name]: !click[`${e.target.name}`],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      (!error.password && !error.email) && !error.email ||
      (!error.password && !error.username && !error.email)
    ) {
      // dispatch();
      console.log("login");
    }
  };

  console.log(error);

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  return (
    <div className={s.container}>
      <div className={s.formMainContainer}>
        <div className={s.formContainer}>
          <div className={s.forms}>
            <div className={s.formLogin}>
              <span className={s.title}>Login</span>
              <form action="#">
                <div className={s.inputField}>
                  <input
                    type="text"
                    value={input.username}
                    name="username"
                    onChange={handleInputChange}
                    placeholder="Username"
                    onClick={handleClick}
                    required
                  />
                  <i class="uil uil-envelope icon"></i>
                  {click.username && error.username && (
                    <p className={s.error}>{error.username}</p>
                  )}
                </div>
                <p className={s.Or}>Or</p>
                <div id={s.id} className={s.inputField}>
                  <input
                    type="text"
                    value={input.email}
                    name="email"
                    onChange={handleInputChange}
                    placeholder="Email"
                    onClick={handleClick}
                    required
                  />
                  <i class="uil uil-envelope icon"></i>
                  {click.email && error.email && (
                    <p className={s.error}>{error.email}</p>
                  )}
                </div>
                <div className={s.inputField}>
                  <input
                    type={!passEye && "password"}
                    placeholder="Password"
                    name="password"
                    onChange={handleInputChange}
                    onClick={handleClick}
                    value={input.password}
                    required
                  />
                  <i class="uil uil-lock"></i>
                  <i
                    id={s.eye}
                    class={!passEye ? "uil uil-eye-slash" : "uil uil-eye"}
                    onClick={toggleEye}
                  ></i>
                  {click.password && error.password && (
                    <p className={s.error}>{error.password}</p>
                  )}
                </div>
                <div className={s.checkboxText}>
                  <div className={s.checkboxContent}>
                    <input type="checkbox" id="logCheck" />
                    <label for="logCheck" className="text">
                      Remember me
                    </label>
                  </div>

                  <a href="#" className={s.text}>
                    Forgot password?
                  </a>
                </div>

                <div className={s.loginButton}>
                  <input
                    type="button"
                    value="Login Now"
                    onClick={handleSubmit}
                  />
                </div>
              </form>

              <div className={s.loginSignup}>
                <span className="text">
                  Not a member? <Link to="/register">SignUp Now</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
