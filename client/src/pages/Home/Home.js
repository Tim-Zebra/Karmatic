import React from 'react'
import { HomeContainer, HomeInfoContainer } from './Home.styled'
import HomeInfo from './components/HomeInfo/HomeInfo'

// Checks user Auth
import Auth from '../../utils/auth';

export default function Home({ handlePageChange }) {
  if (Auth.loggedIn()) {
    handlePageChange('Dashboard');
  }
  return (
    <HomeContainer>

      <HomeInfoContainer>
        <HomeInfo handlePageChange={handlePageChange} />
      </HomeInfoContainer>

    </HomeContainer>
  )
}