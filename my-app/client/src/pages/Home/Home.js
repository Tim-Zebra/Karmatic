import React from 'react'
import { HomeContainer, StyledHomeLeft, StyledHomeRight, StyledLogo } from './Home.styled'
import ToggleForm from "../../components/Forms/ToggleForm"
import HomeInfo from '../../components/HomeInfo/HomeInfo'

// Checks user Auth
import Auth from '../../utils/auth';

export default function Home({ handlePageChange }) {
  if(Auth.loggedIn()) {
    handlePageChange('Dashboard');
  }
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