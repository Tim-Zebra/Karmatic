import React from "react";
import { UserContainerWide } from '../../Box/Box.styled'
import { ContainerSubRowOne, ContainerSubColumnOne, ContainerSubRowTwo, ContainerSubColumnTwo } from './ProfileColumnTwo.styled'
import { Container } from "./ProfileColumnTwo.styled";
import { AddButtonWhite } from "../../Buttons/AddButton.styled";

import { useQuery } from '@apollo/client';
import { QUERY_USER } from "../../../utils/queries"

export default function UserBox() {
    const { data } = useQuery(QUERY_USER);
    const user = data?.users[0].username

    return (
        <Container>
            <UserContainerWide>
                <ContainerSubRowOne>
                    <ContainerSubColumnOne>
                        <h1>Hey {user}</h1>
                    </ContainerSubColumnOne>
                    <AddButtonWhite>
                        <img src='./assets/images/addbutton.png' alt='add button' />
                        Neighbor</AddButtonWhite>
                    <AddButtonWhite>
                        <img src='./assets/images/addbutton.png' alt='add button' />
                        Create Post</AddButtonWhite>
                </ContainerSubRowOne>
                <ContainerSubColumnTwo>
                    <h3>Current Karma</h3>
                    <p>-------------</p>
                    <h3>Overall: GRRRRRRRREAT</h3>
                </ContainerSubColumnTwo>
                <ContainerSubRowTwo>
                    <img height="60px" src='./assets/images/karma_coin.png'></img>
                </ContainerSubRowTwo>
            </UserContainerWide>
        </Container>
    )
}