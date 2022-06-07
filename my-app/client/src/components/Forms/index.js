import React, {useState} from 'react';
import {
    UserContainer, UserContainerBorder, UserContainerBorderThick
} from "./index.styled"

import LoginForm from './LoginForm/LoginForm';
import SignupForm from './SignupForm/SignupForm';

export default function LoginSignupForm() {
  // Displays either login or sign up form depending on which button (login or sign up) the user clicked on
  // Sets hook to render form
  const [currentLoginSignupForm, setcurrentLoginSignupForm] = useState(true);
  // Simple toggle between either form
  // Can be more complex once adding  called to render whichever form depending on login
  const renderLoginSignupFormSection = () => {
    // Renders login form if true
    if (currentLoginSignupForm) {
      return <LoginForm handleLoginSignupToggle={handleLoginSignupToggle}/>;
    }
    // Renders sign up form if false
    return <SignupForm handleLoginSignupToggle={handleLoginSignupToggle}/>
  }

  const handleLoginSignupToggle = () => setcurrentLoginSignupForm(!currentLoginSignupForm);

    return (
        <UserContainer>
            <UserContainerBorder>
                <UserContainerBorderThick>
                  {renderLoginSignupFormSection()}
                </UserContainerBorderThick>
            </UserContainerBorder>
        </UserContainer >
    );
}