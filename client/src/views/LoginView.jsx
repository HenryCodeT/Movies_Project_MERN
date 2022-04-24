
import axios from 'axios';
import React, { useState } from 'react';
import LoginForm from '../Components/LoginForm';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LoginView = (props) => {
  const navigate = useNavigate();
  const initialUser = {
    email: '',
    password: ''
  };
  const initialUserError = {
    emailMessage: 'Your Email must be at least 6 characters length',
    passwordMessage: 'Your Password must be at least 8 characters length'
  };

  const [user, setUser] = useState(initialUser);
  const [userError, setUserError] = useState(initialUserError);
  const [initialIsErrorEmail, setInitialIsErrorEmail] = useState(false);
  const [initialIsErrorPassword, setInitialIsErrorPassword] = useState(false);
  const [loaded, setLoaded] = useState(true);

  const LoginUser = async (user) => {
    setUser(user);
    setLoaded(false);
    try {
      const response = await axios.post('http://localhost:8000/api/auth/login', user);
      console.log('Response', response.statusText);
      console.log(response.data.user);
      localStorage.setItem('token', JSON.stringify(response.data.user));
      navigate('/home');
    } catch (error) {
      console.log('Error', { error });
      if (error.response?.data.message === 'Invalid') {
        setUserError({ ...userError, emailMessage: 'ivalid Email' });
        setInitialIsErrorPassword(false);
        setInitialIsErrorEmail(true);
      }
      if (error.response?.data.message === 'Invalid password') {
        setInitialIsErrorEmail(false);
        setUserError({ ...userError, passwordMessage: 'Invalid password' });
        setInitialIsErrorPassword(true);
      }
      setLoaded(true);
    }
  };
  return (
    <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
      {
        loaded &&
        <LoginForm initialUser={user} onSubmitCreatedForm={LoginUser} userError={userError} initialIsErrorEmail={initialIsErrorEmail} initialIsErrorPassword={initialIsErrorPassword}/>
      }
    </motion.div>
  );
};
export default LoginView;
