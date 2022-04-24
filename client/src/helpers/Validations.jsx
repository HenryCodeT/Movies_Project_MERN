import { validEmail } from './Regrex';

export const validateLogin = (user) => {
  // //// INITIAL VALUES /////////////
  const userErrorMessajeValid = {
    emailMessage: '',
    passwordMessage: ''
  };
  const uservalidation = {
    isEmailValid: true,
    isPasswordValid: true
  };

  let isValidUser = true;

  // //// LOGIG //////////////////////
  if (user.email.length === 0) {
    isValidUser = false;
    uservalidation.isEmailValid = false;
    userErrorMessajeValid.emailMessage = 'Email must not be empty.';
  } else if (user.email.length < 6) {
    isValidUser = false;
    uservalidation.isEmailValid = false;
    userErrorMessajeValid.emailMessage = 'Your Email must be at least 6 characters length.';
  } else if (!validEmail.test(user.email)) {
    isValidUser = false;
    uservalidation.isEmailValid = false;
    userErrorMessajeValid.emailMessage = 'Your email needs to be in the proper format.';
  }
  if ((user.password.length === 0)) {
    isValidUser = false;
    uservalidation.isPasswordValid = false;
    userErrorMessajeValid.passwordMessage = 'Password must not be empty.';
  } else if (user.password.length < 8) {
    isValidUser = false;
    uservalidation.isPasswordValid = false;
    userErrorMessajeValid.passwordMessage = 'Your Email must be at least 6 characters length.';
  }

  const validateReturn = {
    isValidUser,
    uservalidation,
    userErrorMessajeValid
  };
  return validateReturn;
};
export const validateRegister = (user) => {
  // //// INITIAL VALUES /////////////
  const userErrorMessagesValid = {
    userNameMessage: '',
    emailMessage: '',
    passwordMessage: '',
    confirmPasswordMessage: ''
  };
  const uservalidation = {
    isUserNameValid: true,
    isEmailValid: true,
    isPasswordValid: true,
    isConfirmPasswordValid: true
  };

  let isValidUser = true;

  // //// LOGIG ////////////////////////
  // **** valid username ****************
  if (user.userName.length === 0) {
    isValidUser = false;
    uservalidation.isUserNameValid = false;
    userErrorMessagesValid.userNameMessage = 'UserName must not be empty.';
  } else if (user.userName.length < 6) {
    isValidUser = false;
    uservalidation.isUserNameValid = false;
    userErrorMessagesValid.emailMessage = 'Your username must be at least 6 characters length.';
  }
  // **** Valid Email *******************
  if (user.email.length === 0) {
    isValidUser = false;
    uservalidation.isEmailValid = false;
    userErrorMessagesValid.emailMessage = 'Email must not be empty.';
  } else if (user.email.length < 6) {
    isValidUser = false;
    uservalidation.isEmailValid = false;
    userErrorMessagesValid.emailMessage = 'Your Email must be at least 6 characters length.';
  } else if (!validEmail.test(user.email)) {
    isValidUser = false;
    uservalidation.isEmailValid = false;
    userErrorMessagesValid.emailMessage = 'Your email needs to be in the proper format.';
  }
  // **** Valid Password *********************************
  if ((user.password.length === 0)) {
    isValidUser = false;
    uservalidation.isPasswordValid = false;
    userErrorMessagesValid.passwordMessage = 'Password must not be empty.';
  } else if (user.password.length < 8) {
    isValidUser = false;
    uservalidation.isPasswordValid = false;
    userErrorMessagesValid.passwordMessage = 'Your Email must be at least 8 characters length.';
  }
  // **** Valid Confirm Password *********************************
  if ((user.confirmPassword.length === 0)) {
    isValidUser = false;
    uservalidation.isConfirmPasswordValid = false;
    userErrorMessagesValid.confirmPasswordMessage = 'Confirm password must not be empty.';
  } else if (user.password !== user.confirmPassword) {
    isValidUser = false;
    uservalidation.isConfirmPasswordValid = false;
    userErrorMessagesValid.confirmPasswordMessage = 'Your confirm password must be match with Password.';
  }
  const validateReturn = {
    isValidUser,
    uservalidation,
    userErrorMessagesValid
  };
  return validateReturn;
};
