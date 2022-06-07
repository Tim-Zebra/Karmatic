import React, {useState} from 'react'
import SignUpButton from '../../components/Buttons/SignupButton'
import LoginButton from '../../components/Buttons/LoginButton'

import { StyledHome } from './Home.styled'
import LoginForm from "../../components/LoginForm/LoginForm"
import SignupForm from "../../components/LoginForm/LoginForm"

export default function Home() {
  // Displays either login or sign up form depending on which button (login or sign up) the user clicked on
  // Sets hook to render form
  const [currentLoginSignupForm, setcurrentLoginSignupForm] = useState(true);
  // Simple toggle between either form
  // Can be more complex once adding  called to render whichever form depending on login
  const renderLoginSignupFormSection = () => {
    // Renders login form if true
    if (currentLoginSignupForm) {
      return <LoginForm />;
    }
    // Renders sign up form if false
    return <SignupForm />
  }

  const handleLoginSignupToggle = (value) => setcurrentLoginSignupForm(value);
  
  return (
    <StyledHome theme>
      {renderLoginSignupFormSection()}
      <SignUpButton />
    </StyledHome>
  )
}