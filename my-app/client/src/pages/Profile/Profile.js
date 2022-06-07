import React from 'react'
import { HomeContainer, StyledHomeLeft, StyledHomeRight } from '../Home/Home.styled'
import { UserContainerWide, UserContainerLong, UserContainer, UserContainerBorder, UserContainerBorderThick } from "../../components/Box/Box.styled"
import { ProfileContainer } from './Profile.styled'

import { useQuery } from '@apollo/client';
import { QUERY_USER } from "../../utils/queries"




export default function Profile() {
    const { data } = useQuery(QUERY_USER);
    const user = data?.users[0].username
    console.log(data)
    console.log(user)

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
                        <h1>{user}</h1>
                    </UserContainerWide>
                    <UserContainerLong>
                    </UserContainerLong>
                </ProfileContainer>
            </StyledHomeRight>
        </HomeContainer>
    )
}