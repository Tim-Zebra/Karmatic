import React from "react";
//Styled Components

import { UserContainer, UserContainerBorder, UserContainerBorderThick } from '../../Box/Box.styled'
import NeighborhoodCard from "../../NeighborCard/NeighborhoodCard";
import { Container } from "./ProfileColumnOne.styled";

const data = [
    {
    groupName: 'The Oaks'
    },
    {
    groupName: 'The Springs'
    },
    {
    groupName: 'The End'
}]

export default function ProfileColumnOne() {
    return (
        <Container>
        <>Neighborhoods</>
        <UserContainer>
            <UserContainerBorder>
                <UserContainerBorderThick>

                    {data.map((group) => 
                    <NeighborhoodCard data={ group } />
                    )}
                    
                </UserContainerBorderThick>
            </UserContainerBorder>
        </UserContainer>
        </Container>
    )
}