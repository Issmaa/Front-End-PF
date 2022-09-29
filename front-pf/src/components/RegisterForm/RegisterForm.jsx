import { Link } from "react-router-dom";
import s from "./Register.module.css";

export default function Login() {
  return (
    <div className={s.container}>
      <div className={s.registerFormMainContainer}>
        <div className={s.formContainer}>
          <div className={s.forms}>
            <div className={s.formLogin}>
              <span className={s.title}>Registration</span>
              <form action="#">
                <div className={s.inputField}>
                  <input
                    type="text"
                    placeholder="Username"
                    autoComplete="off"
                    required
                  />
                  <i class="uil uil-user"></i>
                </div>
                <div className={s.inputField}>
                  <input
                    type="text"
                    placeholder="Email"
                    autoCapitalize="off"
                    required
                  />
                  <i class="uil uil-envelope icon"></i>
                </div>
                <div className={s.inputField}>
                  <input
                    type="password"
                    placeholder="Password"
                    autoCapitalize="off"
                    required
                  />
                  <i class="uil uil-lock"></i>
                </div>

                {/* Phone and PIN numbers */}
                <div className={s.line}></div>

                <div className={s.phoneContainer}>
                  <div className={s.phoneCountryCode}>+54</div>
                  <div className={s.phoneInput}>
                    <input
                      type="text"
                      placeholder="Phone Number"
                      autoCapitalize="off"
                      required
                    />
                  </div>
                </div>

                <div className={s.pinContainer}>
                  <div className={s.pinInput}>
                    <i class="uil uil-shield-check"></i>
                    <input
                      type="text"
                      placeholder="PIN Code"
                      autoCapitalize="off"
                      required
                    />
                    <button className={s.pinBtn}>SEND</button>
                  </div>
                </div>
                <div className={s.line}></div>

                <div className={s.firstLastNameContainer}>
                  <div className={`${s.nameContainer} ${s.inputField}`}>
                    <input
                      id="name"
                      type="text"
                      placeholder="First Name"
                      autoCapitalize="off"
                      required
                    />
                    <i class="uil uilUser"></i>
                  </div>
                  <div className={s.lastnameContainer}>
                    <input
                      id="lastname"
                      type="text"
                      placeholder="Last Name"
                      autoCapitalize="off"
                      required
                    />
                    <i class="uil uil-user lni"></i>
                  </div>
                </div>

                <div className={s.firstLastNameContainer}>
                  <div className={`${s.nameContainer} ${s.inputField}`}>
                    <input
                      id="name"
                      type="text"
                      placeholder="City"
                      autoCapitalize="off"
                      required
                    />
                    <i class="uil uil-map "></i>
                  </div>
                  <div className={s.lastnameContainer}>
                    <input
                      id="lastname"
                      type="text"
                      placeholder="Zip Code"
                      autoCapitalize="off"
                      required
                    />
                    <i class="uil uil-home lni"></i>
                  </div>
                </div>

                <div className={s.inputField}>
                  <input
                    type="text"
                    placeholder="Address"
                    autoCapitalize="off"
                    required
                  />
                  <i class="uil uil-map-marker"></i>
                </div>
                {/* Button */}

                <div className={s.loginButton}>
                  <input type="button" value="Create Account" />
                </div>
              </form>
              <div className={s.loginSignup}>
                <span className="text">
                  Already have an account? <Link to="/login">Login</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
