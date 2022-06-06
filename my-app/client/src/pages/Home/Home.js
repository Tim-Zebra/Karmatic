import React from 'react'
import SignUpButton from '../../components/Buttons/SignupButton'
import LoginButton from '../../components/Buttons/LoginButton'

import { StyledHome } from './Home.styled'
import LoginForm from "../../components/LoginForm/LoginForm"

export default function Home() {
  return (
    <StyledHome theme>
      <h1>Hello World!</h1>
      <SignUpButton />
      <LoginButton />
    </StyledHome>
  )
}