import { Link } from "react-router-dom";
import { useState } from "react";
import s from "./Login.module.css";
import validate from "./validator";

export default function Login() {
  const [passEye, setPassEye] = useState("password");

  const toggleEye = () => {
    if (passEye === "password") setPassEye("text");
    if (passEye === "text") setPassEye("password");
  };

  const [input, setInput] = useState({
    email_or_username: "",
    password: "",
  });

  const [error, setError] = useState({});

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
                    value={input.email_or_username}
                    name="email_or_username"
                    onChange={handleInputChange}
                    placeholder="Email or Username"
                    required
                  />
                  <i class="uil uil-envelope icon"></i>
                  {error.email_or_username && <p className={s.error}>{error.email_or_username}</p>}
                </div>
                <div className={s.inputField}>
                  <input
                    type={passEye}
                    placeholder="Password"
                    name="password"
                    onChange={handleInputChange}
                    value={input.password}
                    required
                  />
                  <i class="uil uil-lock"></i>
                  {error.password && <p className={s.error}>{error.password}</p>}
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
                  <input type="button" value="Login Now" />
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
