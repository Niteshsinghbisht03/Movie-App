import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMBD_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODMzOWI2MTI1OTYyMDgwM2IzOWFlYjhkN2RkYmYyMCIsInN1YiI6IjY0Yzc1YzJhOTVjZTI0MDBlNDExZWI1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Sj42spxjvKpMralFWCKwMH6SNe0KyFPzChWHi_YdcL0";

const headers = {
  Authorization: "bearer " + TMBD_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
