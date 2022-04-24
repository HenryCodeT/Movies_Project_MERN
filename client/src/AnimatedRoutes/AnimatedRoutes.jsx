import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LoginView from '../views/LoginView';
import RegisterView from '../views/RegisterView';
import Home from '../views/Home';
import SearchView from '../views/SearchView';
import MovieVIew from '../views/MovieVIew';

const AnimatedRoutes = () => {
  const location = useLocation();
  const isLogged = localStorage.getItem('token');
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/login' element={!isLogged ? <LoginView/> : <Navigate to='/home'/> }/>
        <Route path='/register' element={!isLogged ? <RegisterView/> : <Navigate to='/home'/>}/>
        <Route path='/home' element={isLogged ? <Home/> : <Navigate to='/login'/>}/>
        <Route path='/search-movies' element={isLogged ? <SearchView/> : <Navigate to='/login'/>}/>
        <Route path='/movie/:movieId' element={isLogged ? <MovieVIew/> : <Navigate to='/login'/>}/>
      </Routes>
    </AnimatePresence>
  );
};
export default AnimatedRoutes;
