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
    let i = 0;
    const userData = data?.me || {};
    console.log(userData.karmaHelping)

    // Returns null if userdata is not present
    if (!userData) {
        return null;
    }
    // Displays differently during loading
    if (loading) {
        return <h2>LOADING...</h2>;
    }
    for (i = 0; i < userData.karmaPosts.length; i++) {
        if (userData.username === userData.karmaPosts[i].postAuthor) {
            return (userData.karmaPosts.map(karmaPosts => (
                <CardContainer>
                    <img src='./assets/images/k_logo.png' alt='k logo' />
                    You created the job "{karmaPosts.postTitle}" at the location: {karmaPosts.address} , offering {karmaPosts.postValue} karma points. {karmaPosts.karmaHelpers.map(karmaHelpers => (
                        karmaHelpers.helperUsername + " " + "has signed up to help."
                    ))}
                </CardContainer>))
            )
        }
    } return (
        userData.karmaHelping.map(karmaHelping => (
            <CardContainer>
                <img src='./assets/images/k_logo.png' alt='k logo' />
                Signed up to help with "{karmaHelping.postTitle}" for the user "{karmaHelping.postAuthor}" at the location: {karmaHelping.address}
            </CardContainer>))
    )

}