import React from "react";
import { CardContainer } from "./ProfileActivityCard.styled";

// Imports Authorization
import Auth from '../../utils/auth';

// Allows use for both queries and mutations from our utils folder
import { useMutation, useQuery } from '@apollo/client';

// Gets Queries
// Gets the Karma PostGET_USER
import { GET_ME } from '../../utils/queries';

export default function ProfileActivityCard() {
    const { loading, data } = useQuery(GET_ME);

    const userData = data?.me || {};
    console.log(userData)
    // Returns null if userdata is not present
    if (!userData) {
        return null;
    }
    // Displays differently during loading
    if (loading) {
        return <h2>LOADING...</h2>;
    }

    if (userData.username === userData.karmaPosts.postAuthor) {
        return (userData.karmaPosts.map(karmaPosts => (
            <CardContainer>
                <img src='./assets/images/k_logo.png' alt='k logo' />
                You created the job "{karmaPosts.postTitle}" at the location: {karmaPosts.address} , offering {karmaPosts.postValue}
            </CardContainer>))

        )
    } else return (

        userData.karmaPosts.map(karmaPosts => (
            <CardContainer>
                <img src='./assets/images/k_logo.png' alt='k logo' />
                Completed the job "{karmaPosts.postTitle}" for the user "{karmaPosts.postAuthor}" at the location: {karmaPosts.address}
            </CardContainer>))
    )
}