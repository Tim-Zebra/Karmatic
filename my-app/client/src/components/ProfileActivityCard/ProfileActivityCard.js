import React from "react";
import { CardContainer } from "./ProfileActivityCard.styled";

export default function ProfileActivityCard({data}) {
    return (
        <CardContainer>
            <img src='./assets/images/k_logo.png' alt='k logo' />
            <p>You helped {data.postAuthor} and received {data.postValue} Karma Coins on {data.createdAt}</p>
        </CardContainer>
    )
}