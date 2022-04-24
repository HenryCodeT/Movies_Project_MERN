import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MovieDetails from '../Components/MovieDetails';
import NavigationBar from '../Components/NavigationBar';

const MovieVIew = (props) => {
  // //// CONSTANTS ///////////////////////////////////////
  const { movieId } = useParams();
  console.log(movieId);
  const navigate = useNavigate();
  const [movie, setMovie] = useState({});
  const [loaded, setLoaded] = useState(false);
  const ApiKey = '5d0fde21439ac6f30ff24d5077c8f16c';
  const url = 'https://api.themoviedb.org/3';
  // //// LOGOUT FUNTION /////////////////////////////////////
  const logout = () => {
    localStorage.removeItem('token');
    return navigate('/home');
  };
  // //// FETCH //////////////////////////////////////////////
  // //// FETCH //////////////////////////////////////////
  const fetchMovie = async () => {
    try {
      const { data } = await axios.get(`${url}/movie/${movieId}`, {
        params: {
          api_key: ApiKey,
          append_to_response: 'videos'
        }
      }
      );
      console.log(data);
      setMovie(data);
      setLoaded(true);
    } catch (error) {
      console.log({ error });
    }
  };
  useEffect(() => {
    fetchMovie();
  }, []);

  useEffect(() => {
    if (movie !== null) {
      console.log(movie);
    }
  }, [movie]);
  return (
    loaded &&
    <div className='nav-bar'>
      <NavigationBar logout={logout}/>
      <MovieDetails movie={movie}/>
    </div>
  );
};

export default MovieVIew;
