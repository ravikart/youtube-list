import axios from "axios";

const KEY = "AIzaSyA4YqkdqSze7S5TzNMU_8gBLCG6DjprK24";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
