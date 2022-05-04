import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeSession } from "../../../Store/Reducers/AuthReducer";
import { Icon } from "../../../Utilities/Icons";
import AboutSettings from "./AboutSettings";
import ProfileSetting from "./ProfileSetting";
import VisibilitySettings from "./VisibilitySettings";

function Settings() {
  const dispatch = useDispatch();

  return (
    <div className="setting-wrapper">
      <div className="lg-container">
        <div className="row">
          <div className="col-md-4">
            <div className="left-settng-content-wrapper">
              <h5>
                SETTINGS
                <img src={Icon.Setting} />
              </h5>
              <nav>
                <ul className="nav nav-tabs tabs" id="nav-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      data-bs-toggle="tab"
                      data-bs-target="#tab1"
                      role="tab"
                      aria-selected="true"
                    >
                      <div className="tabs-img">
                        <img src={Icon.Profile} />
                        <img src={Icon.Profile_White} />
                      </div>
                      <strong>Profile Information</strong>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#tab2"
                      role="tab"
                      aria-selected="false"
                      aria-controls="tab2"
                    >
                      <div className="tabs-img">
                        <img src={Icon.Hide} />
                        <img src={Icon.Hide_White} />
                      </div>
                      <strong>Visibility</strong>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#tab3"
                      aria-controls="tab3"
                      role="tab"
                      aria-selected="false"
                    >
                      <div className="tabs-img">
                        <img src={Icon.Document} />
                        <img src={Icon.Document_White} />
                      </div>
                      <strong>About me</strong>
                    </button>
                  </li>
                </ul>
              </nav>
              <div className="logout-wrapper">
                <Link to="/" onClick={() => dispatch(removeSession())}>
                  <img src={Icon.Logout} /> Logout Account
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="right-setting-content-wrapper profile-details-wrapper">
              <div className="tab_container">
                <div className="tab-content" id="nav-tabContent">
                  <ProfileSetting />
                  <VisibilitySettings />
                  <AboutSettings />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
