import React from "react";
import ProfileActivityCard from "../ProfileActivityCard/ProfileActivityCard";
import ProfileHelpingCard from "../ProfileActivityCard/ProfileHelping";
import { Container, UserContainerLong } from "./UserActivityInfo.styled";


export default function UserActivity({ userData, setCurrentUserData }) {

    return (
        <>
            <Container>
                <UserContainerLong>
                    <hr />
                    <ProfileActivityCard userData={userData} />
                    <hr />
                    <ProfileHelpingCard userData={userData} setCurrentUserData={setCurrentUserData} />
                </UserContainerLong>
            </Container>
        </>
    )
};