import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../Components/NavigationBar';

const SearchView = () => {
  // //// CONSTANTS //////////////////////////
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('token');
    return navigate('/home');
  };
  return (
    <NavigationBar logout={logout}/>
  );
};

export default SearchView;
