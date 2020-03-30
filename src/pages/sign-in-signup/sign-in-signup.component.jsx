import React from 'react';
import './sign-in-signup.styles.scss';
import SignInForm from '../../components/sign-in/sign-in.component';
import SignupForm from '../../components/sign-up/sign-up.component';
const SignInAndSignUpPage = () => (
  <div className='sign-in-and-signup'>
    <SignInForm />
    <SignupForm />
  </div>
);

export default SignInAndSignUpPage;
