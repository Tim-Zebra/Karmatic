import React from "react";
import ProfileActivityCard from "../../ProfileActivityCard/ProfileActivityCard";
import { Container, UserContainerLong } from "./ProfileColumnTwo.styled";

const data = [
{
    postAuthor: 'Mary',
    postValue: 100,
    createdAt: 'June 2, 2020'
},
{
    postAuthor: 'Joe',
    postValue: 200,
    createdAt: 'June 5, 2020'
}
]

export default function UserActivity() {
    return (
        <>
        <Container>
            <UserContainerLong>
                {data.map((activity) => 
                <ProfileActivityCard data={activity} />
                )}
            </UserContainerLong>
        </Container>
        </>
    )
};