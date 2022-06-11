import React, { useState } from "react";

import { Container, ContainerSubRowOne, ContainerSubColumnOne, ContainerSubColumnTwo, UserContainerWide } from './ProfileColumnTwo.styled'
import { CreatePostButtonProfile } from "../../Buttons/AddButton.styled";
import StatusBanner from '../../StatusBanner/StatusBanner'
import CreatePostModal from "../../Modals/CreatePostModal";

// Allows use for both queries and mutations from our utils folder
import { useQuery } from '@apollo/client';

// Gets Queries
import { GET_ME } from '../../../utils/queries';


export default function UserInfo() {

    const [isOpen, setIsOpen] = useState(false);
    // Querys username and karma
    // Sets hooks for data loading
    const { loading, data } = useQuery(GET_ME);

    const userData = data?.me || {};
    // Returns null if userdata is not present
    if (!userData) {
        return null;
    }

    // Displays differently during loading
    if (loading) {
        return <h2>LOADING...</h2>;
    }
    return (
        <Container>
            <UserContainerWide>
                <ContainerSubRowOne>
                    <ContainerSubColumnOne>
                        <h1>{userData.username}'s Profile</h1>
                    </ContainerSubColumnOne>
                    <CreatePostButtonProfile onClick={() => setIsOpen(true)}>
                        Create Post
                    </CreatePostButtonProfile>
                    {isOpen && <CreatePostModal setIsOpen={setIsOpen} />}
                </ContainerSubRowOne>
                <ContainerSubColumnTwo>
                    <h2>Current:</h2>
                    <img src='./assets/images/karma_coin.png' alt='coin logo' />
                    <p>{userData.karma} Karma Coins</p>
                    <h2>Overall:</h2>
                    <StatusBanner data={userData} width={50} />
                </ContainerSubColumnTwo>
            </UserContainerWide>
        </Container>
    )
}