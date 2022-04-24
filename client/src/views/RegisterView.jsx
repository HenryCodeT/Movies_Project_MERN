import React, { useState } from 'react';
import RegisterForm from '../Components/RegisterForm';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterView = () => {
  const navigate = useNavigate();
  const initialUser =
    {
      userName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  const initialUserErrorMessages = {
    userNameMessage: '',
    emailMessage: '',
    passwordMessage: '',
    confirmPasswordMessage: ''
  };
  const initialIsUserErrors = {
    isErrorUserName: false,
    isErrorEmail: false,
    isErrorPassword: false,
    isErrorConfirmPassword: false
  };
  const [user, setUser] = useState(initialUser);
  const [userErrorMessages, setuserErrorMessages] = useState(initialUserErrorMessages);
  const [isUserErrors, setIsUserErrors] = useState(initialIsUserErrors);
  const [loaded, setLoaded] = useState(true);

  const createUser = (userForm) => {
    setLoaded(false);
    setUser(userForm);
    createUserPost(userForm);
  };

  const createUserPost = async (userForm) => {
    setLoaded(false);
    try {
      const response = await axios.post('http://localhost:8000/api/auth/register', userForm);
      console.log('Response', response.statusText);
      navigate('/home');
    } catch (error) {
      console.log('Error', { error });
      if (error.response?.data.error.keyValue?.userName === userForm.userName) {
        setuserErrorMessages({ ...userErrorMessages, userNameMessage: `the user name ${userForm?.userName} already exists` });
        setIsUserErrors({ ...isUserErrors, isErrorUserName: true, isErrorEmail: false });
      } else if (error.response?.data.error.keyValue?.email === userForm.email) {
        setuserErrorMessages({ ...userErrorMessages, emailMessage: `the user name ${userForm?.email} already exists` });
        setIsUserErrors({ ...isUserErrors, isErrorEmail: true, isErrorUserName: false });
      }
      setLoaded(true);
    }
  };
  return (
    <motion.div initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{
        x: window.innerWidth,
        transition: { duration: 0.1 }
      }}>
      {
        loaded &&
        <RegisterForm userView={user}
          onSubmitCreatedFormView={createUser}
          userErrorMessagesView={userErrorMessages}
          isUserErrorsView={isUserErrors}/>
      }
    </motion.div>
  );
};
export default RegisterView;
