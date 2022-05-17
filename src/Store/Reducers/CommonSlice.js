import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  CityList,
  CountryList,
  StateList,
} from "../../Components/Common/Service";
import { UsersList } from "../../Components/Routes/Service";
import { OtherUserProfile } from "../../Components/Routes/Service";
import { AlertEnum } from "../../Utilities/Enums";
const initialState = {
  isLoading: false,
  message: {
    type: "",
    text: "",
    show: false,
  },
  countryList: [],
  stateList: [],
  cityList: [],
  usersList: [],
  otherUserProfile: [],
};

export const LoaderSlice = createSlice({
  name: "Loader",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setMessage: (state, { payload: { type, text, show = true } }) => {
      state.message = { type, text, show };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GetCountryList.fulfilled, (state, action) => {
      state.countryList = action.payload;
    });
    builder.addCase(GetStateList.fulfilled, (state, action) => {
      state.stateList = action.payload;
    });
    builder.addCase(GetCityList.fulfilled, (state, action) => {
      state.cityList = action.payload;
    });
    builder.addCase(GetUsersList.fulfilled, (state, action) => {
      state.usersList = action.payload;
    });
    builder.addCase(GetOtherUserProfile.fulfilled, (state, action) => {
      state.admiresList = action.payload;
    });
  },
});

export const { setLoading, setMessage } = LoaderSlice.actions;
//*ASYNC FUNCTIONS
export const GetCountryList = createAsyncThunk(
  "CountryList",
  async (values, { dispatch }) => {
    try {
      const result = await CountryList(values);
      if (result?.success) {
        let countryArr = result?.data?.map((item) => ({
          label: item?.name,
          value: item?.id,
        }));
        return countryArr;
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
    }
  }
);
export const GetStateList = createAsyncThunk(
  "StateList",
  async (values, { dispatch }) => {
    try {
      const result = await StateList({ country_id: values });
      if (result?.success) {
        let stateArr = result?.data?.map((item) => ({
          label: item?.name,
          value: item?.id,
        }));
        return stateArr;
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
    }
  }
);
export const GetCityList = createAsyncThunk(
  "CityList",
  async (values, { dispatch }) => {
    try {
      const result = await CityList({ state_id: values });
      if (result?.success) {
        let cityArr = result?.data?.map((item) => ({
          label: item?.name,
          value: item?.id,
        }));
        return cityArr;
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
    }
  }
);
export const GetUsersList = createAsyncThunk(
  "GetUsersList",
  async (values, { dispatch }) => {
    try {
      const result = await UsersList(values);
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
    }
  }
);

export const GetOtherUserProfile = createAsyncThunk(
  "GetOtherUserProfile",
  async (user_id, { dispatch }) => {
    try {
      const result = await OtherUserProfile( {user_id}  );
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
    }
  }
);

export default LoaderSlice.reducer;
