/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { validEmail } from '../helpers/Regrex';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import GroupWork from '@mui/icons-material/GroupWork';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { validateRegister } from '../helpers/Validations';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00acc1'
    },
    secondary: {
      main: '#00acc1'
    }
  }
});

const RegisterForm = (props) => {
  const { userView, onSubmitCreatedFormView, userErrorMessagesView, isUserErrorsView } = props;
  const [user, setUser] = useState(userView);
  const [userErrorMessages, setuserErrorMessages] = useState(userErrorMessagesView);
  const [isUserErrors, setIsUserErrors] = useState(isUserErrorsView);

  const handleOnChange = (e) => {
    if (e.target.name === 'userName' && e.target.value.length < 6) {
      setIsUserErrors({ ...isUserErrors, isErrorUserName: true });
      setuserErrorMessages({ ...userErrorMessages, userNameMessage: 'Your username must be at least 6 characters length.' });
    } else if (e.target.name === 'userName') {
      setIsUserErrors({ ...isUserErrors, isErrorUserName: false });
      setuserErrorMessages({ ...userErrorMessages, userNameMessage: '' });
    }
    if (e.target.name === 'email' && e.target.value.length < 6) {
      setIsUserErrors({ ...isUserErrors, isErrorEmail: true });
      setuserErrorMessages({ ...userErrorMessages, emailMessage: 'Your username must be at least 6 characters length.' });
    } else if (e.target.name === 'email') {
      setIsUserErrors({ ...isUserErrors, isErrorEmail: false });
      setuserErrorMessages({ ...userErrorMessages, emailMessage: '' });
    }
    if (e.target.name === 'password' && e.target.value.length < 8) {
      setIsUserErrors({ ...isUserErrors, isErrorPassword: true });
      setuserErrorMessages({ ...userErrorMessages, passwordMessage: 'Your password must be at least 8 characters length.' });
    } else if (e.target.name === 'password') {
      setIsUserErrors({ ...isUserErrors, isErrorPassword: false });
      setuserErrorMessages({ ...userErrorMessages, passwordMessage: '' });
    }
    if (e.target.name === 'confirmPassword' && e.target.value.length < 8) {
      setIsUserErrors({ ...isUserErrors, isErrorConfirmPassword: true });
      setuserErrorMessages({ ...userErrorMessages, confirmPasswordMessage: 'Your username must be at least 8 characters length.' });
    } else if (e.target.name === 'confirmPassword' && e.target.value !== user.password) {
      setIsUserErrors({ ...isUserErrors, isErrorConfirmPassword: true });
      setuserErrorMessages({ ...userErrorMessages, confirmPasswordMessage: 'Your confirm password must be match with Password.' });
    } else if (e.target.name === 'confirmPassword') {
      setIsUserErrors({ ...isUserErrors, isErrorConfirmPassword: false });
      setuserErrorMessages({ ...userErrorMessages, confirmPasswordMessage: '' });
    }
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { isValidUser, uservalidation, userErrorMessagesValid } = validateRegister(user);
    if (isValidUser) {
      onSubmitCreatedFormView(user);
    } else {
      setuserErrorMessages(userErrorMessagesValid);
      setIsUserErrors({
        isErrorUserName: !uservalidation.isUserNameValid,
        isErrorEmail: !uservalidation.isEmailValid,
        isErrorPassword: !uservalidation.isPasswordValid,
        isErrorConfirmPassword: !uservalidation.isConfirmPasswordValid
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <Grid item xs={12} sm={8} md={5} sx={{
          backgroundColor: '#eeeeee',
          '&:hover': {
            backgroundColor: '#ffffff'
          }
        }} component={Paper} elevation={6} square >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <GroupWork />
            </Avatar>
            <Typography component="h1" variant="h5">
            Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    error={isUserErrors.isErrorUserName}
                    name="userName"
                    required
                    fullWidth
                    id="userName"
                    label="User Name"
                    value={user.userName}
                    helperText={isUserErrors.isErrorUserName ? userErrorMessages.userNameMessage : ''}
                    onChange={handleOnChange}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={isUserErrors.isErrorEmail}
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={user.email}
                    helperText={isUserErrors.isErrorEmail ? userErrorMessages.emailMessage : ''}
                    onChange={handleOnChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={isUserErrors.isErrorPassword}
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    type="password"
                    name="password"
                    value={user.password}
                    helperText={isUserErrors.isErrorPassword ? userErrorMessages.passwordMessage : ''}
                    onChange={handleOnChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={isUserErrors.isErrorConfirmPassword}
                    required
                    fullWidth
                    id="confirmPassword"
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    value={user.confirmPassword}
                    helperText={isUserErrors.isErrorConfirmPassword ? userErrorMessages.confirmPasswordMessage : ''}
                    onChange={handleOnChange}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
              Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                  Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default RegisterForm;
