import React from 'react'
import { StyledHome } from './Home.styled'
import LoginForm from "../../components/LoginForm/LoginForm"

export default function Home() {
  return (
    <StyledHome theme>
      <LoginForm />
    </StyledHome>
  )
}