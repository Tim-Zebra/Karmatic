import React from 'react'
import { HomeContainer, StyledHomeLeft, StyledHomeRight, StyledLogo } from './Home.styled'
import LoginForm from "../../components/LoginForm/LoginForm"
import HomeInfo from '../../components/HomeInfo/HomeInfo'

export default function Home() {
  return (
    <HomeContainer>
      <StyledHomeLeft>
        <StyledLogo src='./assets/images/full_logo.png' alt='karmatic logo' />
        <LoginForm />
      </StyledHomeLeft>
      <StyledHomeRight>
      <HomeInfo />
      </StyledHomeRight>
    </HomeContainer>
  )
}