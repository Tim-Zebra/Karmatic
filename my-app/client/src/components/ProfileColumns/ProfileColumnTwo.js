import React from "react";
import { UserContainerWide, UserContainerLong } from '../Box/Box.styled'
import { Container } from "./ProfileColumnTwo.styled";

export default function ProfileColumnTwo() {
    return (
        <Container>
            <UserContainerWide>
                <p>Hey User!</p>
            </UserContainerWide>
            <UserContainerLong>
                <p>Activity:</p>
            </UserContainerLong>
        </Container>
    )
}