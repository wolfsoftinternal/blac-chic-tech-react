// import LoaderSVG from "../../../Assets/svg/loader.svg";
import LoaderSVG from "../../../Assets/image/379.gif";

// import "../style.scss";
import React, { createContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AlertEnum } from "../../../Utilities/Enums";
import { setMessage } from "../../../Store/Reducers/CommonSlice";
const LayoutContext = createContext({ isLoading: false });

function LayoutProvider({ children }) {
  return (
    <LayoutContext.Provider value={{}}>
      <Loader />
      <SnackBar />
      {children}
    </LayoutContext.Provider>
  );
}

function Loader() {
  const { isLoading } = useSelector(({ Loader }) => Loader);
  return isLoading ? (
    <div className="loader-container">
      <div>
        <div class="cssload-dots">
          <div class="cssload-dot"></div>
          <div class="cssload-dot"></div>
          <div class="cssload-dot"></div>
          <div class="cssload-dot"></div>
          <div class="cssload-dot"></div>
        </div>

        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                result="blur"
                stdDeviation="12"
              ></feGaussianBlur>
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0	0 1 0 0 0	0 0 1 0 0	0 0 0 18 -7"
                result="goo"
              ></feColorMatrix>
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  ) : (
    <></>
  );
}

function SnackBar() {
  const { type, show, text } = useSelector(({ Loader }) => Loader.message);
  const dispatch = useDispatch();
  useEffect(() => {
    show &&
      setTimeout(() => {
        dispatch(setMessage({ type: "", text: "", show: false }));
      }, 3000);
  });

  switch (type) {
    case AlertEnum.Success:
      return (
        <div
          className={`alert alert-success ${
            show ? "alert-shown" : "alert-hidden"
          }`}
        >
          {text}
        </div>
      );
    case AlertEnum.Error:
      return (
        <div
          className={`alert alert-danger ${
            show ? "alert-shown" : "alert-hidden"
          }`}
        >
          {text}
        </div>
      );
    case AlertEnum.Warning:
      return (
        <div
          className={`alert alert-warning ${
            show ? "alert-shown" : "alert-hidden"
          }`}
        >
          {text}
        </div>
      );
    default:
      return (
        <div
          className={`alert alert-primary ${
            show ? "alert-shown" : "alert-hidden"
          }`}
        >
          {text}
        </div>
      );
  }
}

export default LayoutProvider;
