import React from "react";
import ProfileActivityCard from "../../ProfileActivityCard/ProfileActivityCard";
import { Container, UserContainerLong } from "./ProfileColumnTwo.styled";



export default function UserActivity() {


    return (
        <>
        <Container>
            <UserContainerLong>
                <ProfileActivityCard />
            </UserContainerLong>
        </Container>
        </>
    )
};