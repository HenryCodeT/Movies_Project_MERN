import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GroupWork from '@mui/icons-material/GroupWork';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { validateLogin } from '../helpers/Validations';

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

const LoginForm = (props) => {
  const { initialUser, onSubmitCreatedForm, userError, initialIsErrorEmail, initialIsErrorPassword } = props;
  const [user, setUser] = useState(initialUser);
  const [userErrorMessages, setUserErrorMessages] = useState(userError);
  const [isErrorEmail, setIsErrorEmail] = useState(initialIsErrorEmail);
  const [isErrorPassword, setIsErrorPassword] = useState(initialIsErrorPassword);

  const handleOnChange = (e) => {
    if (e.target.name === 'email' && e.target.value.length < 6) {
      setIsErrorEmail(true);
    } else {
      setIsErrorEmail(false);
    }

    if (e.target.name === 'password' && e.target.value.length < 8) {
      setIsErrorPassword(true);
    } else {
      setIsErrorPassword(false);
    }

    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { isValidUser, uservalidation, userErrorMessajeValid } = validateLogin(user);
    if (isValidUser) {
      onSubmitCreatedForm(user);
    } else {
      setUserErrorMessages(userErrorMessajeValid);
      setIsErrorEmail(!uservalidation.isEmailValid);
      setIsErrorPassword(!uservalidation.isPasswordValid);
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
        <Grid item xs={12} sm={8} md={5} component={Paper} sx={{
          backgroundColor: '#eeeeee',
          '&:hover': {
            backgroundColor: '#ffffff'
          }
        }} elevation={6} square>
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
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    error={isErrorEmail}
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={user.email}
                    onChange={handleOnChange}
                    helperText={ isErrorEmail ? userErrorMessages.emailMessage : ''}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={isErrorPassword}
                    fullWidth
                    id="password"
                    label="Password"
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleOnChange}
                    helperText={isErrorPassword ? userErrorMessages.passwordMessage : ''}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
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
export default LoginForm;
