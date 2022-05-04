import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UpdateProfile } from "../../../Store/Reducers/ProfileReducer";
import { BackGround, Icon, Logo } from "../../../Utilities/Icons";

import { PersonalDetails, SocialDetails } from "../Profiles/ProfileModules";

function ProfileSetting() {
  const dispatch = useDispatch();
  const { userProfile } = useSelector(({ Profile }) => Profile);
  const imageRef = useRef();
  const handleImage = (e) => {
    try {
      let image = e.target.files[0];
      dispatch(UpdateProfile({ image }));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div class="tab-pane fade show active" id="tab1" role="tabpanel">
      <div className="row">
        <div className="col-md-12">
          <div className="setting-content-box">
            <div className="row">
              <div className="col-md-2">
                <div className="setting-img">
                  <img
                    src={userProfile?.image || BackGround.Upload}
                    onClick={(e) => {
                      e.preventDefault();
                      imageRef.current && imageRef.current.click();
                    }}
                  />
                  <img
                    className="edit-image"
                    height={25}
                    width={25}
                    src={Icon.Pencil}
                  />
                  <input
                    ref={imageRef}
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleImage}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="setting-user-name">
                  <h5 className="check">{userProfile?.full_name}</h5>
                  <p>
                    <a href={`mailto:${userProfile?.email}`}>
                      {userProfile?.email}
                    </a>
                  </p>
                  <address>
                    {userProfile?.city_details?.name},
                    {userProfile?.country_details?.name}
                  </address>
                  <ul>
                    <li>
                      <a href={userProfile?.instagram_url}>
                        <img src={Logo.Instagram} />
                      </a>
                    </li>
                    <li>
                      <a href={userProfile?.twitter_url}>
                        <img src={Logo.Twitter} />
                      </a>
                    </li>
                    <li>
                      <a href={userProfile?.linkedin_url}>
                        <img src={Logo.LinkedIn} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="preview-profile">
                  <Link to="/profile" className="preview-profile-btn">
                    <img src={Icon.Preview_Profile} /> Preview profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <PersonalDetails />
        <SocialDetails />
      </div>
    </div>
  );
}

export default ProfileSetting;
