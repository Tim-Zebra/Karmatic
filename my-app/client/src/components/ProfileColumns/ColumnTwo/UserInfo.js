import React, { useState } from "react";

import { Container, ContainerSubRowOne, ContainerSubColumnOne, ContainerSubColumnTwo, UserContainerWide } from './ProfileColumnTwo.styled'
// import { CreatePostButtonProfile } from "../../Buttons/AddButton.styled";
import StatusBanner from '../../StatusBanner/StatusBanner'
// import CreatePostModal from "../../Modals/CreatePostModal";

export default function UserInfo({userData}) {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <Container>
            <UserContainerWide>
                <ContainerSubRowOne>
                    <ContainerSubColumnOne>
                        <h1>{userData.username}'s Profile</h1>
                    </ContainerSubColumnOne>
                    {/* <CreatePostButtonProfile onClick={() => setIsOpen(true)}>
                        Create Post
                    </CreatePostButtonProfile>
                    {isOpen && <CreatePostModal setIsOpen={setIsOpen} />} */}
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