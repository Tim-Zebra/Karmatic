import React from "react";
import { CardContainer, LogoImage } from "./ProfileActivityCard.styled";
// import ProfileHelpingCard from "./ProfileHelping";
// Allows use for both queries and mutations from our utils folder
import { useQuery } from '@apollo/client';

// Gets Queries
import { GET_ME } from '../../utils/queries';
// import { DELETE_POST, CHANGE_KARMA } from "../../utils/mutations";

export default function ProfileActivityCard() {
    // const [deletePost, { error, post }] = useMutation(DELETE_POST);
    const { loading, data } = useQuery(GET_ME);
    const userData = data?.me || {};
    // const [refundKarma] = useMutation(CHANGE_KARMA);

    // const deleteKarmaPost = async (userData, karmaPosts) => {
    //     try {
    //         console.log(userData)
    //         await deletePost({
    //             variables: { karmaPostId: karmaPosts._id, },
    //         });
    //         const refundedUserKarma = userData.karma + karmaPosts.postValue;
    //         await refundKarma({
    //             variables: {
    //                 username: userData.username,
    //                 karma: refundedUserKarma,
    //             }
    //         })
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };;

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
            <LogoImage src='./assets/images/k_logo.png' alt='k logo' />
            You created the job "{karmaPosts.postTitle}" at the location: {karmaPosts.address} , offering {karmaPosts.postValue} karma points. {karmaPosts.karmaHelpers.map(karmaHelpers => (
                karmaHelpers.helperUsername + " " + "has signed up to help."
            ))}
            {/* <DeleteImage src="./assets/images/delete.png" onClick={() => deleteKarmaPost(userData, karmaPosts)} /> */}
        </CardContainer>))
    )
}
