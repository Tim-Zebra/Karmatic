import React from 'react'
import { HomeContainer, StyledHomeLeft, StyledHomeRight } from '../Home/Home.styled'
import UserContainer from "../../components/Forms/LoginForm.styled"
import HomeInfo from '../../components/HomeInfo/HomeInfo'

export default function Profile() {
    return (
        <HomeContainer>
            <StyledHomeLeft>
                <UserContainer />
            </StyledHomeLeft>
            <StyledHomeRight>
                <HomeInfo />
            </StyledHomeRight>
        </HomeContainer>
    )
}