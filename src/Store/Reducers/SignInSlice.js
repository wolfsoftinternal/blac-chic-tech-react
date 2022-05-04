import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  Forgot,
  IsEmailExist,
  IsUsernameExist,
  SignIn,
  SignUp,
} from "../../Components/Routes/Service";
import { AlertEnum } from "../../Utilities/Enums";
import { setSession } from "./AuthReducer";
import { setLoading, setMessage } from "./CommonSlice";

const initialState = {
  currentStep: 1,
};

export const SignInAPI = createAsyncThunk(
  "SignIn",
  async (values, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const result = await SignIn(values);
      if (result?.success) {
        dispatch(setSession(result?.data));
        dispatch(setLoading(false));
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
      dispatch(setLoading(false));
      return error;
    }
  }
);
export const SignUpAPI = createAsyncThunk(
  "SignUp",
  async (values, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const result = await SignUp(values);
      if (result?.success) {
        dispatch(setSession(result?.data));
        dispatch(setLoading(false));
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
      dispatch(setLoading(false));
      return error;
    }
  }
);
export const ForgotPasswordAPI = createAsyncThunk(
  "ForgotPassword",
  async (values, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const result = await Forgot(values);
      if (result?.success) {
        dispatch(setLoading(false));
        dispatch(
          setMessage({
            text: result?.message,
            type: AlertEnum.Success,
          })
        );
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
      dispatch(setLoading(false));
      return error;
    }
  }
);

export const VerifyEmail = createAsyncThunk("VerifyEmail", async (values) => {
  try {
    const result = await IsEmailExist(values);

    if (result?.success) {
      return result;
    } else {
      throw result;
    }
  } catch (error) {
    return error;
  }
});
export const VerifyUsername = createAsyncThunk(
  "VerifyUsername",
  async (values) => {
    try {
      const result = await IsUsernameExist(values);

      if (result?.success) {
      } else {
        throw result;
      }
    } catch (error) {
      return error;
    }
  }
);

export const SignInSlice = createSlice({
  name: "SignIn",
  initialState,
  reducers: {
    nextStep: (state) => {
      state.currentStep++;
    },
    prevStep: (state) => {
      state.currentStep--;
    },
  },
  extraReducers: (builder) => {},
});

export const { nextStep, prevStep } = SignInSlice.actions;

export default SignInSlice.reducer;
