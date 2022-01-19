import { API_URL } from "./constraints";

export const getAPIURL = (endpoint, language = "en-US") => {
  return (
    API_URL +
    endpoint +
    `?api_key=${process.env.REACT_APP_TMDB_APIKEY}` +
    `&language=${language}`
  );
};
