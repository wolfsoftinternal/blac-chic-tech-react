import axios from "axios";
import { SESSION } from "./Enums";
import { JSONToFormData } from "./Functions";
// const USER = process.env.REACT_APP_VENDOR || process.env.REACT_APP_MANAGER;
export const BASE_URL = process.env.REACT_APP_BASE_URL;
let SessionData;

export async function POST(url, data) {
  let formData = [];
  try {
    if (data) {
      formData = await JSONToFormData(data);
    }
    SessionData = JSON.parse(localStorage.getItem(SESSION));
    let config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Bearer ${SessionData?.token}`,
      },
    };

    return await axios
      .post(url, formData, config)
      .then((result) => {
        if (result && result.data && result.data.status_code !== 200) {
          // eslint-disable-next-line
          throw { hasError: true, message: result.data.message };
        } else {
          return result.data;
        }
      })
      .catch((error) => {
        return error;
      });
  } catch (error) {
    return error;
  }
}

export async function UPLOAD(url, data, onUploadProgress) {
  try {
    let formData = [];
    if (data) {
      formData = await JSONToFormData(data);
    }

    return await axios
      .post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${SessionData?.token}`,
        },
        onUploadProgress,
      })
      .then((result) => {
        if (result && result.data && result.data.status_code !== 200) {
          // eslint-disable-next-line
          throw { hasError: true, message: result?.data?.message };
        } else {
          return result.data;
        }
      })
      .catch((error) => {
        return error;
      });
  } catch (error) {
    return error;
  }
}

export async function GET(url, params) {
  try {
    let config = {
      headers: {
        Accept: "application/json",
      },
      params,
    };

    return await axios
      .get(url, config)
      .then((result) => {
        if (result && result.data && result.data.status === "error") {
          // eslint-disable-next-line
          throw { hasError: true, message: result?.error?.message };
        } else {
          return result.data;
        }
      })
      .catch((error) => {
        return error;
      });
  } catch (error) {
    return error;
  }
}
