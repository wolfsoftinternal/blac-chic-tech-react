import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthenticateAPI } from "../../Components/Common/Service";
import { AlertEnum, SESSION, TOKEN } from "../../Utilities/Enums";
import { setMessage } from "./CommonSlice";
import { SignInAPI } from "./SignInSlice";

const initialState = {
  token: `${localStorage.getItem(TOKEN) || ""}`,
  session: JSON.parse(localStorage.getItem(SESSION)) || "",
};
export const VerifySession = createAsyncThunk(
  "VerifySession",
  async (values, { dispatch }) => {
    try {
      const result = await AuthenticateAPI(values);
      if (result?.success) {
        return result?.data;
      } else {
        throw result;
      }
    } catch (error) {
      dispatch(
        setMessage({
          text: error?.message,
          type: AlertEnum.Error,
        })
      );
      return error;
    }
  }
);

export const AuthSlice = createSlice({
  name: "Authenticate",
  initialState,
  reducers: {
    setSession: (state, action) => {
      state.session = action?.payload;
      state.token = action?.payload?.token;
      localStorage.setItem(SESSION, JSON.stringify(action?.payload));
      localStorage.setItem(TOKEN, action?.payload?.token);
    },
    removeSession: (state) => {
      localStorage.removeItem(SESSION);
      localStorage.removeItem(TOKEN);
      state.session = "";
      state.token = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(SignInAPI.fulfilled, (state, action) => {});
  },
});

export const GetToken = (state) => {
  return state?.Authenticate?.token;
};
export const { setSession, removeSession } = AuthSlice.actions;

export default AuthSlice.reducer;
