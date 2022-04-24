import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../Components/NavigationBar';
import { motion } from 'framer-motion';
import axios from 'axios';
import HomeMovies from '../Components/HomeMovies';

const Home = () => {
  // //// CONSTANTS //////////////////////////
  const navigate = useNavigate();
  const ApiKey = '5d0fde21439ac6f30ff24d5077c8f16c';
  const url = 'https://api.themoviedb.org/3';
  // //// STATES ////////////////////////////////////////////
  const [movies, setMovies] = useState([]);
  // //// LOGOUT FUNTION /////////////////////////////////////
  const logout = () => {
    localStorage.removeItem('token');
    return navigate('/home');
  };
  // //// FETCH //////////////////////////////////////////
  const fetchMovies = async () => {
    try {
      const { data: { results } } = await axios.get(`${url}/trending/movie/week`, {
        params: {
          api_key: ApiKey
        }
      }
      );
      console.log(results);
      setMovies(results);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className='home-view'>
      <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <NavigationBar
          logout={logout}/>
      </motion.div>
      <div>
        <HomeMovies movies={movies}/>
      </div>
    </div>
  );
};
export default Home;
