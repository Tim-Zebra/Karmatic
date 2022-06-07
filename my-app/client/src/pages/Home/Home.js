import React from 'react'
import SignUpButton from '../../components/Buttons/SignupButton'

import { StyledHome } from './Home.styled'
import LoginSignupForm from "../../components/Forms/index"

export default function Home() {
  return (
    <StyledHome theme>
      <LoginSignupForm />
      <SignUpButton />
    </StyledHome>
  )
}