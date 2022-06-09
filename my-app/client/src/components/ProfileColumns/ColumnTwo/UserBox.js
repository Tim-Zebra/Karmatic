import React from "react";
import { UserContainerWide } from '../../Box/Box.styled'
import { ContainerSubRowOne, ContainerSubColumnOne, ContainerSubRowTwo, ContainerSubColumnTwo } from './ProfileColumnTwo.styled'
import { Container } from "./ProfileColumnTwo.styled";
import { AddButtonWhite } from "../../Buttons/AddButton.styled";
import StatusBanner from '../../StatusBanner/StatusBanner'

import { useQuery } from '@apollo/client';
import { GET_USER } from "../../../utils/queries"

const data = 
{
    username: 'Bob',
    karma: 2000,
}

export default function UserBox() {
    // const { data } = useQuery(GET_USER);
    // const user = data?.users[0].username

    return (
        <Container>
            <UserContainerWide>
                <ContainerSubRowOne>
                    <ContainerSubColumnOne>
                        <h1>{data.username}'s Profile</h1>
                    </ContainerSubColumnOne>
                    <AddButtonWhite>
                        <img src='./assets/images/addbutton.png' alt='add neighborbutton' />
                        Neighbor</AddButtonWhite>
                    <AddButtonWhite>
                        <img src='./assets/images/addbutton.png' alt='add post button' />
                        Create Post</AddButtonWhite>
                </ContainerSubRowOne>
                <ContainerSubColumnTwo>
                    <h3>Current Karma</h3>
                    <p>{data.karma}</p>
                    <h3>Overall: GRRRRRRRREAT</h3>
                    <StatusBanner data={data} />
                </ContainerSubColumnTwo>
                <ContainerSubRowTwo>
                    <img height="60px" src='./assets/images/karma_coin.png' alt='coin logo'></img>
                </ContainerSubRowTwo>
            </UserContainerWide>
        </Container>
    )
}