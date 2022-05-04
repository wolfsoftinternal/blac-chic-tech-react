import { Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ForgotPasswordAPI } from "../../Store/Reducers/SignInSlice";
import { Logo } from "../../Utilities/Icons";
import { ForgotPaswordSchema } from "../../Utilities/Schema";
import FormControl from "../Common/Forms/FormControl";

function Forgot() {
  const dispatch = useDispatch();
  return (
    <div className="col-md-6">
      <div className="form-wrapper">
        <div className="logo">
          <a href="#">
            <img src={Logo.BCT_Transparent} />
          </a>
        </div>
        <div className="log-in-form-wrapper">
          <h5 href="#" className="forgot-password-title">
            Forgot Password
          </h5>
          {/* <h6>Enter your email id here for receive your password</h6> */}
          <div className="log-in-form">
            <Formik
              initialValues={{ email: "" }}
              validationSchema={ForgotPaswordSchema}
              enableReinitialize={true}
              onSubmit={(values) => {
                dispatch(ForgotPasswordAPI(values));
              }}
            >
              {({ values, handleBlur, handleChange, handleSubmit }) => (
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

                  <div className="form-group submit">
                    <input type="submit" value="Send Reset Password Link" />
                  </div>
                </form>
              )}
            </Formik>
            <Link to="/" className="forgot-password">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgot;
