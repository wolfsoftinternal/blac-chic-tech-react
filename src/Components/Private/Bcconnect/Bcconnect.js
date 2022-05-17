import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../Profiles/Anotherprofile";
import { useDispatch, useSelector } from "react-redux";
import { GetUsersList } from "../../../Store/Reducers/CommonSlice";
import { BackGround, Icon, Logo } from "../../../Utilities/Icons";
import { GetCreateAdmires } from "../../../Store/Reducers/ProfileReducer";

const Bcconnect = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const { usersList } = useSelector(({ Loader }) => Loader);

  // handleClick = ()=>{
  //   console.log(admire_id);
  // }

  useEffect(() => {
    dispatch(GetUsersList()).then((response) => {
      console.log(response);
    });
    return () => {};
  }, [id]);

  return (
    <>
      <div className="title">
        <div className="titleword">
          <h2>
            BlackChicTech
            <span className="titlespan">Speakers</span>
          </h2>
        </div>
        <div>
          <p className="titlecont">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-4 ser">
            <input
              className="search"
              type="search"
              placeholder="Search Speakers..."
              aria-label="Search"
            />
          </div>
          <div className="col-lg-4 ser1">
            <div className="dropdown">
              <button
                className="dropbtn"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Topics
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="dropdown">
              <button
                className="dropbtn"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Topics
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container content">
        <div className="row">
          <div className="col-lg-9">
            <h5 className="bctitle"> BC-CONNECT</h5>
          </div>
          <div className="col-lg-3">
            <div className="row">
              <div className="col-lg-4 ser">
                <div className="icon">
                  <i className="fa fa-sort-amount-desc" aria-hidden="true"></i>
                </div>
              </div>
              <div className="col-lg-8">
                <select
                  className="form-select shadow-none"
                  aria-label="Default select example"
                >
                  <option className="productword">By Trending</option>
                  <option className="productword" value="1">
                    By Popular
                  </option>
                  <option className="productword" value="2">
                    By Newly
                  </option>
                  <option className="productword" value="3">
                    By oldly
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {usersList?.length &&
            usersList?.map((data, id) => {
              return (
                <div className="col-lg-3" key={id}>
                  <div className="box">
                    <Link to={`/Anotherprofile/${data.id}`}>
                      {/* <Link to="/Profile"> */}
                      <img className="cover" src={data.image} />
                    </Link>
                    <div className="row">
                      <div className="col-lg-8">
                        <h6 className="firstname">
                          {data.first_name}
                          <span className="secondname"> {data.last_name} </span>
                        </h6>
                        <p className="subtitle">
                          Product manager and brand strategist @capitalone
                        </p>
                      </div>
                      <div className="col-lg-4">
                        <div className="circle">
                          <Link to="#">
                            <img
                              src={Icon.UserIcon}
                              className="image-fit"
                              alt="img"
                            />
                          </Link>
                        </div>
                      </div>
                      <h6 className="titledown"> Come to me for</h6>
                      <p className="jobdes">
                        UI/UX Design | Venture Capital Funding | Life Advice
                        Kubernetes Talk
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
export default Bcconnect;
