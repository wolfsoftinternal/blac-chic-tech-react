import { configureStore } from "@reduxjs/toolkit";
import SignInReducer from "./Reducers/SignInSlice";
import AuthReducer from "./Reducers/AuthReducer";
import LoaderReducer from "./Reducers/CommonSlice";
import ProfileReducer from "./Reducers/ProfileReducer";

export const store = configureStore({
  reducer: {
    Authenticate: AuthReducer,
    SignIn: SignInReducer,
    Loader: LoaderReducer,
    Profile: ProfileReducer,
  },
});
