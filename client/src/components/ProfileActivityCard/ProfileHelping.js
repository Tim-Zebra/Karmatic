import { CardContainer } from "./ProfileActivityCard.styled";

export default function ProfileHelpingCard({userData}) {

    return (
        userData.karmaHelping.map(karmaHelping => (
            <CardContainer key={karmaHelping._id}>
                <img src='./assets/images/k_logo.png' alt='k logo' />
                Signed up to help with "{karmaHelping.postTitle}" for the user "{karmaHelping.postAuthor}" at the location: {karmaHelping.address}
            </CardContainer>))
    )

}