export const APP_NAME = "MovFlix";

// App
export const SKELETON_PLACEHOLDER_SIZE = 20;
// API (just shortcuts for rapid development)
export const API_URL = "https://api.themoviedb.org/3/";
export const API_ENDPOINTS = {
  "Now playing movies": { type: "movie", value: "movie/now_playing" },
  "Top rated movies": { type: "movie", value: "movie/top_rated" },
  "Upcoming movies": { type: "movie", value: "movie/upcoming" },
  "Popular movies": { type: "movie", value: "movie/popular" },
  "Popular TV shows": { type: "tv", value: "tv/popular" },
  "Top rated TV shows": { type: "tv", value: "tv/top_rated" },
  "On the air TV shows": { type: "tv", value: "tv/on_the_air" },
  "Airing today TV shows": { type: "tv", value: "tv/airing_today" },
};
