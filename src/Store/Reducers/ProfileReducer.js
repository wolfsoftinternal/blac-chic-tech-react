import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  CreateImagePostAPI,
  CreateVideoPostAPI,
  EditProfile,
  GetImagePostsAPI,
  GetVideoPostsAPI,
  MyProfile,
} from "../../Components/Routes/Service";
import { AlertEnum } from "../../Utilities/Enums";
import { setLoading, setMessage } from "./CommonSlice";

const initialState = {
  userProfile: undefined,
  profilEvents: [],
  profilePosts: [],
  profileVideos: [],
  admiresList: [],
};

export const GetUserProfile = createAsyncThunk(
  "GetUserProfile",
  async (values, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const result = await MyProfile(values);
      if (result?.success) {
        dispatch(setLoading(false));
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
      dispatch(setLoading(false));
      return error;
    }
  }
);

export const UpdateProfile = createAsyncThunk(
  "UpdateUserProfile",
  async (values, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const result = await EditProfile(values);
      if (result?.success) {
        dispatch(
          setMessage({
            text: result?.message,
            type: AlertEnum.Success,
          })
        );
        dispatch(setLoading(false));
        dispatch(GetUserProfile());
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

export const CreateVideoPost = createAsyncThunk(
  "CreateVideoPost",
  async (values, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const result = await CreateVideoPostAPI(values);
      if (result?.success) {
        dispatch(setLoading(false));
      } else {
        throw result;
      }
      dispatch(GetImagePosts());
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
export const CreateImagePost = createAsyncThunk(
  "CreateImagePost",
  async (values, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const result = await CreateImagePostAPI(values);
      if (result?.success) {
        dispatch(setLoading(false));
      } else {
        throw result;
      }
      dispatch(GetImagePosts());
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

export const GetVideoPosts = createAsyncThunk(
  "GetVideoPosts",
  async (values, { dispatch }) => {
    try {
      const result = await GetVideoPostsAPI(values);
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
      dispatch(setLoading(false));
      return error;
    }
  }
);
export const GetImagePosts = createAsyncThunk(
  "GetImagePosts",
  async (values, { dispatch }) => {
    try {
      const result = await GetImagePostsAPI(values);
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
      dispatch(setLoading(false));
      return error;
    }
  }
);

export const ProfileSlice = createSlice({
  name: "Profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetUserProfile.fulfilled, (state, action) => {
      state.userProfile = action.payload;
    });
    builder.addCase(GetImagePosts.fulfilled, (state, action) => {
      state.profilePosts = action.payload;
    });
    builder.addCase(GetVideoPosts.fulfilled, (state, action) => {
      state.profileVideos = action.payload;
    });
  },
});

export const {} = ProfileSlice.actions;

export default ProfileSlice.reducer;
