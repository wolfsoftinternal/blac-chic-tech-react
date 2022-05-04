import { BASE_URL, POST } from "../../Utilities/HTTP";

//* SIGNIN/SIGNUP API REQUEST
export const SignIn = (data) => POST(`${BASE_URL}/login`, data);
export const SignUp = (data) => POST(`${BASE_URL}/web/register`, data);
export const Forgot = (data) => POST(`${BASE_URL}/forgot-password`, data);
export const IsEmailExist = (data) =>
  POST(`${BASE_URL}/check-email-exist`, data);
export const IsUsernameExist = (data) =>
  POST(`${BASE_URL}/check-username-exist`, data);

//* USER PROFILE API REQUEST
export const MyProfile = (data) => POST(`${BASE_URL}/user-profile`, data);
export const EditProfile = (data) => POST(`${BASE_URL}/edit-profile`, data);

//* IMAGE POST APIs
export const CreateImagePostAPI = (data) =>
  POST(`${BASE_URL}/post-create`, data);
export const GetImagePostsAPI = (data) => POST(`${BASE_URL}/post-list`, data);
export const UpdateImagePostAPI = (data) => POST(`${BASE_URL}/post-edit`, data);
export const GetImageDetailAPI = (data) =>
  POST(`${BASE_URL}/post-details`, data);
export const DeleteImagePostAPI = (data) =>
  POST(`${BASE_URL}/post-delete`, data);

//* VIDEO POST APIs
export const CreateVideoPostAPI = (data) =>
  POST(`${BASE_URL}/video-create`, data);
export const GetVideoPostsAPI = (data) => POST(`${BASE_URL}/video-list`, data);
export const UpdateVideoPostAPI = (data) =>
  POST(`${BASE_URL}/video-edit`, data);
export const GetVideoDetailAPI = (data) =>
  POST(`${BASE_URL}/video-details`, data);
export const DeleteVideoPostAPI = (data) =>
  POST(`${BASE_URL}/video-delete`, data);
