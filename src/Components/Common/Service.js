import { BASE_URL, POST } from "../../Utilities/HTTP";

//* SIGNIN/SIGNUP API REQUEST
export const CountryList = (data) => POST(`${BASE_URL}/country-list`, data);
export const StateList = (data) => POST(`${BASE_URL}/state-list`, data);
export const CityList = (data) => POST(`${BASE_URL}/city-list`, data);

//* AUTHENTICATE USER SESSION API REQUEST
export const AuthenticateAPI = (data) => POST(`${BASE_URL}/check-auth-token`);
