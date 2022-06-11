import React from "react";
import { CardContainer } from "./ProfileActivityCard.styled";
import ProfileHelpingCard from "./ProfileHelping";
// Allows use for both queries and mutations from our utils folder
import { useMutation, useQuery } from '@apollo/client';

// Gets Queries
import { GET_ME } from '../../utils/queries';
import { DELETE_POST } from "../../utils/mutations";

export default function ProfileActivityCard() {
    const [deletePost, { error, post }] = useMutation(DELETE_POST);
    const { loading, data } = useQuery(GET_ME);
    let i = 0;
    const userData = data?.me || {};

    const deleteKarmaPost = async (data) => {
        console.log('I AM THE DELETE. ALL YOUR KARMA EFFORT IS NULL');
        try {
            await deletePost({
                variables: { karmaPostId: data, },
            });
        } catch (err) {
            console.error(err);
        }
    };;

    // Returns null if userdata is not present
    if (!userData) {
        return null;
    }
    // Displays differently during loading
    if (loading) {
        return <h2>LOADING...</h2>;
    }



    return (userData.karmaPosts.map(karmaPosts => (
        <CardContainer>
            <img src='./assets/images/k_logo.png' alt='k logo' />
            You created the job "{karmaPosts.postTitle}" at the location: {karmaPosts.address} , offering {karmaPosts.postValue} karma points. {karmaPosts.karmaHelpers.map(karmaHelpers => (
                karmaHelpers.helperUsername + " " + "has signed up to help."
            ))}
            <button onClick={() => deleteKarmaPost(karmaPosts._id)}>Delete Post</button>
        </CardContainer>))
    )


}
