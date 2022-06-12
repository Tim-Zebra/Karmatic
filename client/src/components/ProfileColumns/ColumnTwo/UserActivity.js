import React from "react";
import ProfileActivityCard from "../../ProfileActivityCard/ProfileActivityCard";
import ProfileHelpingCard from "../../ProfileActivityCard/ProfileHelping";
import { Container, UserContainerLong } from "./ProfileColumnTwo.styled";


export default function UserActivity({userData, setCurrentUserData}) {

    return (
        <>
            <Container>
                <UserContainerLong>

                    <ProfileActivityCard />
                    <ProfileHelpingCard userData={userData} setCurrentUserData={setCurrentUserData}/>
                </UserContainerLong>
            </Container>
        </>
    )
};