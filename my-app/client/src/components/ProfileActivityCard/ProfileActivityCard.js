import React from "react";
import { CardContainer } from "./ProfileActivityCard.styled";

// Allows use for both queries and mutations from our utils folder
import { useMutation, useQuery } from '@apollo/client';

// Gets Queries
import { GET_ME } from '../../utils/queries';
import { DELETE_POST } from "../../utils/mutations";

export default function ProfileActivityCard(handleDelete) {
    const [deletePost, { error, post }] = useMutation(DELETE_POST);
    const { loading, data } = useQuery(GET_ME);
    let i = 0;
    const userData = data?.me || {};

    const handleFormDelete = async (event) => {
        event.preventDefault();
        console.log('we got here')
        try {
            // Updates user data. Need to do a "if passwords match" Option
            const postData = {
                _id: userData.karmaPosts._id,
                username: userData.username,
            }
            console.log(postData)

            const { post } = await deletePost({
                variables: { ...postData },
            });
        } catch (err) {
            console.error(err);
        }
    };

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
                <CardContainer onSubmit={handleFormDelete}>
                    <img src='./assets/images/k_logo.png' alt='k logo' />
                    You created the job "{karmaPosts.postTitle}" at the location: {karmaPosts.address} , offering {karmaPosts.postValue} karma points. {karmaPosts.karmaHelpers.map(karmaHelpers => (
                        karmaHelpers.helperUsername + " " + "has signed up to help."
                    ))}
                    <button submit={handleDelete}>Delete Post</button>
                </CardContainer>))
            )
        }
    }
}