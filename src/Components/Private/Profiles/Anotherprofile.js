import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GetOtherUserProfile } from "../../../Store/Reducers/CommonSlice";
import {
  GetImagePosts,
  GetVideoPosts,
} from "../../../Store/Reducers/ProfileReducer";
import { BackGround, Icon, Logo } from "../../../Utilities/Icons";
import PostEvent from "./PostEvent";
import PostImage from "./PostImage";
import PostVideo from "./PostVideo";
import { Birthdate, Education, Jobs, Question } from "./ProfileModules";

function OtherUserProfile() {
  const dispatch = useDispatch();
  const { userProfile, profilePosts, profileVideos } = useSelector(
    ({ Profile }) => Profile
  );
  const { OtherUserProfile } = useSelector(({ Loader }) => Loader);

  useEffect(() => {
    dispatch(GetImagePosts());
    dispatch(GetVideoPosts());
    dispatch(GetOtherUserProfile()).then((response) => {
      console.log(response);
    });
    return () => {};
  }, []);

  return (
    <div className="main-profile-wrapper">
      <div className="profile-wrapper">
        <div className="lg-container">
          <div className="row">
            <div className="col-md-4">
              {/* {console.log(userProfile)} */}
              <div className="left-profile-content-wrapper">
                <img src={userProfile?.image || BackGround.Upload} />
                <div className="left-profile-content">
                  <h2>{userProfile?.full_name}</h2>
                  <p>
                    {userProfile?.current_jobs?.title} @
                    {userProfile?.current_jobs?.company_name}
                  </p>
                  <p>
                    <a href="#">{userProfile?.website}</a>
                  </p>
                  <address>
                    {userProfile?.city_details?.name},
                    {userProfile?.country_details?.name}
                  </address>
                  <p>
                    {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi
                    varius ipsum at aliquet risus justo. Consectetur vel eget
                    egestas sem dignissim. Cursus tellus tellus neque vestibulum
                    quisque eu, nam dui. Et at laoreet amet, senectus iaculis
                    pellentesque. */}
                  </p>
                </div>
                <div className="footer-social-icon">
                  <h5>SOCIAL MEDIA ACCOUNT</h5>
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
            </div>
            <div className="col-md-8">
              <div className="right-profile-content-wrapper">
                <div className="user-profile-wrapper">
                  <div className="profile-content-title">
                    <div className="user-name">
                      <img src={userProfile?.image || BackGround.Upload} />
                      <h5 className="check">{userProfile?.full_name}</h5>
                      <p>
                        {userProfile?.current_jobs?.title} @
                        {userProfile?.current_jobs?.company_name}
                      </p>
                    </div>

                    <Link to="/settings" className="admire-btn">
                      <img src={Icon.UserIcon} /> 
                      ADMIRE
                    </Link>
                  </div>
                  <div className="demi-admires">
                    <h5>
                      {userProfile?.first_name} Admires
                      <a href="#" className="see_all_admires admire-show">
                        SEE ALL
                      </a>
                    </h5>
                    <div className="container">
                      {OtherUserProfile?.length ? (
                        OtherUserProfile?.map((data, id) => {
                          return (
                            <ul key={id}>
                              <li className="zoom-effect-container">
                                <div className="image-card">
                                  <img src={data.image} />
                                  <h6>{data.full_name}</h6>
                                </div>
                              </li>
                            </ul>
                          );
                        })
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div class="profile-details-wrapper">
                <ul class="tabs nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item">
                    <p
                      class="nav-link active"
                      data-bs-toggle="tab"
                      data-bs-target="#tab1"
                      role="tab"
                      aria-selected="true"
                    >
                      <strong>PROFILE</strong>
                    </p>
                  </li>
                  <li class="nav-item">
                    <p
                      class="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#tab2"
                      role="tab"
                      aria-selected="false"
                    >
                      <strong>POSTS ({profilePosts?.length || 0})</strong>
                    </p>
                    <a
                      href="javascript:void(0)"
                      class="create_new"
                      data-bs-toggle="modal"
                      data-bs-target="#create-new-post"
                    >
                      CREATE NEW POST<span>+</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <p
                      class="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#tab3"
                      role="tab"
                      aria-selected="false"
                    >
                      <strong>VIDEOS ({profileVideos?.length || 0})</strong>
                    </p>
                    <a
                      href="javascript:void(0)"
                      class="create_new"
                      data-bs-toggle="modal"
                      data-bs-target="#create-new-post-video"
                    >
                      CREATE NEW VIDEOS<span>+</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <p
                      class="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#tab4"
                      role="tab"
                      aria-selected="false"
                    >
                      <strong>EVENTS</strong>
                    </p>
                    <a
                      href="javascript:void(0)"
                      class="create_new"
                      data-bs-toggle="modal"
                      data-bs-target="#create-new-post-events"
                    >
                      CREATE NEW EVENT<span>+</span>
                    </a>
                  </li>
                </ul>

                <div class="tab-content tab_container" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="tab1"
                    role="tabpanel"
                  >
                    {/* Jobs To Add/Edit  */}
                    <Jobs />
                    {/* Education To Add/Edit  */}
                    <Education />
                    {/* Date of birth To Add/Edit  */}
                    <Birthdate />
                    {/* Questions To Add/Edit  */}
                    {userProfile?.questions?.map((item, index) => (
                      <React.Fragment key={index}>
                        <Question item={item} />
                      </React.Fragment>
                    ))}
                  </div>
                  {/* List Of Images Post */}
                  <div class="tab-pane fade" id="tab2" role="tabpanel">
                    <div class="post-wrapper">
                      <div class="row">
                        {profilePosts?.length &&
                          profilePosts?.map((item) => (
                            <div class="col-md-4" key={item?.id}>
                              <div class="post-content-wrapper">
                                <a href="#">
                                  <img src={item?.image} />
                                  <div class="post-content">
                                    <p>{item?.caption}</p>
                                  </div>
                                </a>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                  {/* List Of Video Post */}
                  <div class="tab-pane fade" id="tab3" role="tabpanel">
                    <div class="post-wrapper video-post-wrapper">
                      <div class="row">
                        {profileVideos?.length &&
                          profileVideos?.map((item) => (
                            <div class="col-md-4" key={item?.id}>
                              <div class="post-content-wrapper">
                                <a href="#">
                                  <p class="timer">14:38</p>
                                  <img src="img/post-img1.jpg" />
                                  <div class="post-content">
                                    <p>{item?.caption}</p>
                                  </div>
                                </a>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="tab4" role="tabpanel">
                    <div class="user-event-wrapper">
                      <div class="upcoming-events-box">
                        <div class="upcoming-events-img">
                          <img src="img/event-img.png" />
                          <div class="btn-wrapper">
                            <a
                              href="#"
                              class="btn"
                              data-toggle="modal"
                              data-target="#confirmation"
                            >
                              $999
                            </a>
                            <a href="#" class="btn">
                              <img src="img/slider-author-img.png" />
                              Hosted by <strong>Ria Rich</strong>
                            </a>
                          </div>
                        </div>
                        <div class="upcoming-events-content">
                          <div class="events-content">
                            <div class="date">
                              <h6>Jan</h6>
                              <p>18</p>
                            </div>
                            <h6>Startup Bootcamp 2020</h6>
                            <ul>
                              <li>
                                <img src="img/Calendar-blue-icon.svg" /> January
                                18, 2021 at 14:00 PM
                              </li>
                              <li>
                                <img src="img/Location-icon.svg" /> Royal Avenue
                              </li>
                            </ul>
                          </div>
                          <div class="events-btn">
                            <ul>
                              <li>
                                <a href="#">VIEW EVENT</a>
                              </li>
                              <li>
                                <a href="#">
                                  <img src="img/share-icon.svg" />
                                  SHARE EVENT
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="upcoming-events-box">
                        <div class="upcoming-events-img">
                          <img src="img/event-img.png" />
                          <div class="btn-wrapper">
                            <a
                              href="#"
                              class="btn"
                              data-toggle="modal"
                              data-target="#confirmation"
                            >
                              $999
                            </a>
                            <a href="#" class="btn">
                              <img src="img/slider-author-img.png" />
                              Hosted by <strong>Ria Rich</strong>
                            </a>
                          </div>
                        </div>
                        <div class="upcoming-events-content">
                          <div class="events-content">
                            <div class="date">
                              <h6>Jan</h6>
                              <p>18</p>
                            </div>
                            <h6>Startup Bootcamp 2020</h6>
                            <ul>
                              <li>
                                <img src="img/Calendar-blue-icon.svg" /> January
                                18, 2021 at 14:00 PM
                              </li>
                              <li>
                                <img src="img/Location-icon.svg" /> Royal Avenue
                              </li>
                            </ul>
                          </div>
                          <div class="events-btn">
                            <ul>
                              <li>
                                <a href="#">VIEW EVENT</a>
                              </li>
                              <li>
                                <a href="#">
                                  <img src="img/share-icon.svg" />
                                  SHARE EVENT
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="upcoming-events-box">
                        <div class="upcoming-events-img">
                          <img src="img/event-img.png" />
                          <div class="btn-wrapper">
                            <a
                              href="#"
                              class="btn"
                              data-toggle="modal"
                              data-target="#confirmation"
                            >
                              $999
                            </a>
                            <a href="#" class="btn">
                              <img src="img/slider-author-img.png" />
                              Hosted by <strong>Ria Rich</strong>
                            </a>
                          </div>
                        </div>
                        <div class="upcoming-events-content">
                          <div class="events-content">
                            <div class="date">
                              <h6>Jan</h6>
                              <p>18</p>
                            </div>
                            <h6>Startup Bootcamp 2020</h6>
                            <ul>
                              <li>
                                <img src="img/Calendar-blue-icon.svg" /> January
                                18, 2021 at 14:00 PM
                              </li>
                              <li>
                                <img src="img/Location-icon.svg" /> Royal Avenue
                              </li>
                            </ul>
                          </div>
                          <div class="events-btn">
                            <ul>
                              <li>
                                <a href="#">VIEW EVENT</a>
                              </li>
                              <li>
                                <a href="#">
                                  <img src="img/share-icon.svg" />
                                  SHARE EVENT
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="upcoming-events-box">
                        <div class="upcoming-events-img">
                          <img src="img/event-img.png" />
                          <div class="btn-wrapper">
                            <a
                              href="#"
                              class="btn"
                              data-toggle="modal"
                              data-target="#confirmation"
                            >
                              $999
                            </a>
                            <a href="#" class="btn">
                              <img src="img/slider-author-img.png" />
                              Hosted by <strong>Ria Rich</strong>
                            </a>
                          </div>
                        </div>
                        <div class="upcoming-events-content">
                          <div class="events-content">
                            <div class="date">
                              <h6>Jan</h6>
                              <p>18</p>
                            </div>
                            <h6>Startup Bootcamp 2020</h6>
                            <ul>
                              <li>
                                <img src="img/Calendar-blue-icon.svg" /> January
                                18, 2021 at 14:00 PM
                              </li>
                              <li>
                                <img src="img/Location-icon.svg" /> Royal Avenue
                              </li>
                            </ul>
                          </div>
                          <div class="events-btn">
                            <ul>
                              <li>
                                <a href="#">VIEW EVENT</a>
                              </li>
                              <li>
                                <a href="#">
                                  <img src="img/share-icon.svg" />
                                  SHARE EVENT
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <PostImage />
            <PostVideo />
            <PostEvent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtherUserProfile;
