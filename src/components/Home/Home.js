import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
//import axios from 'axios';
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
const Home = () => {
  const dispatch = useDispatch();
  const movietext = "fast";
  const showtext = "spartacus";
  useEffect(() => {
    // axios.get(`https://www.omdbapi.com?apiKey=ab5c5424&s=friends&type=series`)
    // .then((res) => console.log(res))
    // .catch( (err) => console.log(err) );
    dispatch(fetchAsyncMovies(movietext));
    dispatch(fetchAsyncShows(showtext));
  // } , [] );
  }, [dispatch]);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
