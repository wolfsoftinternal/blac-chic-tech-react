import React from "react";
import { Logo } from "../../../Utilities/Icons";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="footer-logo">
              <a href="#">
                <img src={Logo.BCT_White} />
              </a>
            </div>
            <div className="footer-navigation">
              <ul>
                <li>
                  <a href="#events">Events</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
                <li>
                  <a href="#">BC-Connect</a>
                </li>
                <li>
                  <a href="#videos">Videos</a>
                </li>
                <li>
                  <a href="#feature">Feature</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-3">
            <div className="footer-social-icon">
              <ul>
                <li>
                  <a href="#">
                    <img src={Logo.Instagram} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={Logo.Twitter} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={Logo.LinkedIn} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
