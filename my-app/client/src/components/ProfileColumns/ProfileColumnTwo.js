import React from "react";
import { UserContainerWide, UserContainerLong } from '../Box/Box.styled'
import { Container } from "./ProfileColumnTwo.styled";
import { useQuery } from '@apollo/client';
import { QUERY_USER } from "../../utils/queries"

export default function ProfileColumnTwo() {
    const { data } = useQuery(QUERY_USER);
    const user = data?.users[0].username

    return (
        <Container>
            <UserContainerWide>
                <p>Hey {user}</p>
                <img height="44px" src='./assets/images/karma_coin.png'></img>
            </UserContainerWide>
            <UserContainerLong>
                <p>Activity:</p>
            </UserContainerLong>
        </Container>
    )
}