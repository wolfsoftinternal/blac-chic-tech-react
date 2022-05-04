import { Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { SignInEnum } from "../../Utilities/Enums";
import { Logo } from "../../Utilities/Icons";
import { SignInSchema } from "../../Utilities/Schema";
import FormControl from "../Common/Forms/FormControl";
import { SignInAPI } from "../../Store/Reducers/SignInSlice";
import SignUp from "./SignUp";
import { Link } from "react-router-dom";

function SignIn() {
  const dispatch = useDispatch();

  return (
    <div className="col-md-6">
      <div className="form-wrapper">
        <div className="logo">
          <a href="#">
            <img src={Logo.BCT_Transparent} />
          </a>
        </div>
        <div className="login-or-signup">
          <ul>
            <li>
              <a href="#" className="login-btn">
                Log In
              </a>
            </li>
            <li>
              <a href="#" className="signup-btn">
                Create Account
              </a>
            </li>
          </ul>
        </div>
        <div className="log-in-form-wrapper">
          <div className="using-account">
            <ul>
              <li>
                <a href="#">
                  <img src={Logo.Google} />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={Logo.Apple} />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={Logo.Facebook} />
                </a>
              </li>
            </ul>
          </div>
          <div className="better-yet-option">
            <p>Or better yet...</p>
          </div>
          <div className="log-in-form">
            <Formik
              initialValues={SignInEnum}
              validationSchema={SignInSchema}
              enableReinitialize={true}
              onSubmit={(values) => {
                dispatch(SignInAPI(values));
              }}
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit}>
                  <FormControl
                    type="email"
                    control="input"
                    placeholder=""
                    id="email"
                    name="email"
                    label="Email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <FormControl
                    type="password"
                    control="input"
                    outerClass="password"
                    placeholder=""
                    id="password"
                    name="password"
                    label="Password"
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <Link to="/forgot" className="forgot-password">
                    Forgot password?
                  </Link>
                  <div className="form-group submit">
                    <input type="submit" value="Login in with Blackchictech" />
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
        <SignUp />
      </div>
    </div>
  );
}

export default SignIn;
