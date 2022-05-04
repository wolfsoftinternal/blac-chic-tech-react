import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { GetUserProfile } from "../../../Store/Reducers/ProfileReducer";
import { BackGround, Icon, Logo } from "../../../Utilities/Icons";

function Header() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { userProfile } = useSelector(({ Profile }) => Profile);
  useEffect(() => {
    dispatch(GetUserProfile());
    return () => {};
  }, []);
  return (
    <header
      className={`main-header ${
        location.pathname === "/" ? "header-home" : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="bct-logo">
              <a href="#">
                <img src={Logo.BCT_Black} className="normal-logo" />
              </a>
            </div>
          </div>
          <div className="col-md-10">
            <div className="navigation">
              <ul>
                <li>
                  <a href="#events">Events</a>
                </li>
                <li>
                  <a href="#community">Community</a>
                </li>
                <li>
                  <a href="#">BC-Connect</a>
                </li>
                <li>
                  <a href="/user/#videos">Videos</a>
                </li>
                <li>
                  <a href="/user/#feature">Feature</a>
                </li>
              </ul>
              <ul>
                <li className="header-profile">
                  <Link to="/profile">
                    <img src={userProfile?.image || BackGround.Upload} />
                    {userProfile?.first_name}
                  </Link>
                </li>
                <li className="header-btn">
                  <a href="#">
                    Marketplace <strong>👋</strong>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
