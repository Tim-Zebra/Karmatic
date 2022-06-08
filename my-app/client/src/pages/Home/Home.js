import React from 'react'
import { HomeContainer, StyledHomeLeft, StyledHomeRight, StyledLogo } from './Home.styled'
import ToggleForm from "../../components/Forms/ToggleForm"
import HomeInfo from '../../components/HomeInfo/HomeInfo'

export default function Home() {
  return (
    <HomeContainer>

      <StyledHomeLeft>
        <StyledLogo src='./assets/images/full_logo.png' alt='karmatic logo' />
        <ToggleForm />
      </StyledHomeLeft>

      <StyledHomeRight>
        <HomeInfo />
      </StyledHomeRight>
      
    </HomeContainer>
  )
}