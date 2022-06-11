import { useMutation, useQuery } from '@apollo/client';
import { CardContainer } from "./ProfileActivityCard.styled";

// Gets Queries
// Gets the Karma PostGET_USER
import { GET_ME } from '../../utils/queries';

export default function ProfileHelpingCard() {
    const { loading, data } = useQuery(GET_ME);
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
    return (
        userData.karmaHelping.map(karmaHelping => (
            <CardContainer>
                <img src='./assets/images/k_logo.png' alt='k logo' />
                Signed up to help with "{karmaHelping.postTitle}" for the user "{karmaHelping.postAuthor}" at the location: {karmaHelping.address}
            </CardContainer>))
    )

}