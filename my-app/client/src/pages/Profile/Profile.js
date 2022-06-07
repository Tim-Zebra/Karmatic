import React from 'react'
import { HomeContainer, StyledHomeLeft, StyledHomeRight } from '../Home/Home.styled'
import { UserContainerWide, UserContainerLong, UserContainer, UserContainerBorder, UserContainerBorderThick } from "../../components/Box/Box.styled"
import { ProfileContainer } from './Profile.styled'


export default function Profile() {
    return (
        <HomeContainer>
            <StyledHomeLeft>
                <UserContainer>
                    <UserContainerBorder>
                        <UserContainerBorderThick>
                            <h1>Neighbors:</h1>
                        </UserContainerBorderThick>
                    </UserContainerBorder>
                </UserContainer>
            </StyledHomeLeft>
            <StyledHomeRight>
                <ProfileContainer>
                    <UserContainerWide>
                        <h1>Hey User!</h1>
                    </UserContainerWide>
                    <UserContainerLong>
                        <h1>Activity:</h1>
                    </UserContainerLong>
                </ProfileContainer>
            </StyledHomeRight>
        </HomeContainer>
    )
}