import React from 'react'
import { HomeContainer, StyledHomeLeft, StyledHomeRight, StyledLogo } from './Home.styled'
import HomeInfo from '../../components/HomeInfo/HomeInfo'
import LoginSignupForm from "../../components/Forms/index"

export default function Home() {
  return (
    <HomeContainer>
      <StyledHomeLeft>
        <StyledLogo src='./assets/images/full_logo.png' alt='karmatic logo' />
        <LoginSignupForm />
      </StyledHomeLeft>
      <StyledHomeRight>
      <HomeInfo />
      </StyledHomeRight>
    </HomeContainer>
  )
}