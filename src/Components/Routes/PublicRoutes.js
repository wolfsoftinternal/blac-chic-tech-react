import React from "react";
import { Route, Routes } from "react-router-dom";
import { Logo } from "../../Utilities/Icons";
import Forgot from "../Public/Forgot";
import SignIn from "../Public/SignIn";

function PublicRoutes() {
  return (
    <div className="log-in-wrapper">
      <div className="container">
        <div className="row">
          <Routes>
            <Route index path="/" element={<SignIn />} />
            <Route path="/forgot" element={<Forgot />} />
          </Routes>
          <div className="col-md-6">
            <div className="form-logo">
              <a href="#">
                <img src={Logo.BCT_White} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublicRoutes;
