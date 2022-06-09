import React from "react";
import { CardContainer } from "./ProfileActivityCard.styled";

export default function ProfileActivityCard() {
    return (
        <CardContainer>
            <img src='./assets/images/k_logo.png' alt='k logo' />
            <p>You helped Mary and received 100 Karma Coins on June 2, 2020</p>
        </CardContainer>
    )
}