import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeSession, VerifySession } from "../../Store/Reducers/AuthReducer";
import { isEmpty } from "../../Utilities/Functions";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

function RootRoute() {
  const token = useSelector(({ Authenticate }) => Authenticate.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(VerifySession()).then((res) => {
        if (res?.hasError) {
          dispatch(removeSession());
          navigate("/");
        }
      });
    }
    return () => {};
  }, [token]);

  return !isEmpty(token) ? <PrivateRoutes /> : <PublicRoutes />;
}

export default RootRoute;
