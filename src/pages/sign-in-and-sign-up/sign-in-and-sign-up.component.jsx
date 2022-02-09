import React from 'react';
import SignIn from '../shop/sign-in/sign-in.component';
import Signup from '../../components/sign-up/sign-up.component';
import './sign-in-and-sign-up.styles.scss';

export default function SignInAndSignUpPage() {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <Signup />
    </div>
  );
}
