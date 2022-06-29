import React from "react";

import { Container, ContainerSubRowOne, ContainerSubColumnOne, ContainerSubColumnTwo, UserContainerWide } from './UserActivityInfo.styled'
import StatusBanner from '../../../../GlobalComponents/StatusBanner/StatusBanner'

export default function UserInfo({ userData }) {
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
                    <img src='./assets/images/karma_coin.png' alt='coin logo' />
                    <h2>{userData.karma}</h2>
                </ContainerSubColumnTwo>
                <ContainerSubColumnOne>
                    <h2>Status</h2>
                <StatusBanner data={userData} width='100px' />
                </ContainerSubColumnOne>
            </UserContainerWide>
        </Container>
    )
}