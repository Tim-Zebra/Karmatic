import React from "react";
//Styled Components

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
        groupName: 'Copper Spring'
    }]

export default function ProfileColumnOne() {
    return (
        <Container>
            <>Neighborhoods</>
            <>
                <NeighborhoodCard data={data[0]} />
                <NeighborhoodCard data={data[1]} />
                <NeighborhoodCard data={data[2]} />
        
            </>
        </Container>
    )
}