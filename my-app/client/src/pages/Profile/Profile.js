import React from 'react'
import { HomeContainer, StyledHomeLeft, StyledHomeRight, StyledLogo } from './Home.styled'
import LoginForm from "../../components/Forms/LoginForm"
import HomeInfo from '../../components/HomeInfo/HomeInfo'
import SignupForm from '../../components/Forms/SignupForm'

export default function Home() {
    return (
        <HomeContainer>
            <StyledHomeLeft>
                <StyledLogo src='./assets/images/full_logo.png' alt='karmatic logo' />
                <LoginForm />
                <SignupForm />
            </StyledHomeLeft>
            <StyledHomeRight>
                <HomeInfo />
            </StyledHomeRight>
        </HomeContainer>
    )
}