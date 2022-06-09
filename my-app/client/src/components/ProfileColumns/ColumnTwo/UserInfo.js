import React, {useState} from "react";

import { Container, ContainerSubRowOne, ContainerSubColumnOne, ContainerSubColumnTwo, UserContainerWide } from './ProfileColumnTwo.styled'
import { CreatePostButtonProfile } from "../../Buttons/AddButton.styled";
import StatusBanner from '../../StatusBanner/StatusBanner'
import CreatePostModal from "../../CreatePostModal/CreatePostModal";

// import { useQuery } from '@apollo/client';
// import { GET_USER } from "../../../utils/queries"

const data = 
{
    username: 'Bob',
    karma: 2000,
}


export default function UserInfo() {
    // const { data } = useQuery(GET_USER);
    // const user = data?.users[0].username
const [isOpen, setIsOpen] = useState(false);

    return (
        <Container>
            <UserContainerWide>
                <ContainerSubRowOne>
                    <ContainerSubColumnOne>
                        <h1>{data.username}'s Profile</h1>
                    </ContainerSubColumnOne>
                    <CreatePostButtonProfile onClick={() => setIsOpen(true)}>
                        Create Post
                    </CreatePostButtonProfile>
                    {isOpen && <CreatePostModal setIsOpen={setIsOpen} />}
                </ContainerSubRowOne>
                <ContainerSubColumnTwo>
                    <h2>Current:</h2>
                    <img src='./assets/images/karma_coin.png' alt='coin logo' />
                    <p>{data.karma} Karma Coins</p>
                    <h2>Overall:</h2>
                    <StatusBanner data={data} width={50} />
                </ContainerSubColumnTwo>
            </UserContainerWide>
        </Container>
    )
}