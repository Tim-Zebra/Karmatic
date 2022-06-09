import React from "react";
import { NeighborhoodCardContainer } from "./NeighborhoodCard.styled";



export default function NeighborhoodCard({data}) {
    return (
        <NeighborhoodCardContainer>
            <img src='./assets/images/neighborhood.png' alt='neighborhood png' />
            <p>{data.groupName}</p>
        </NeighborhoodCardContainer>
    )
}