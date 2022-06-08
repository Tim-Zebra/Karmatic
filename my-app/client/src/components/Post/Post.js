import React from 'react'
import { PostOutterContainer, PostContainer, PostBody, ImageContainer, PostHeader, PostMessage, PostFooter, } from './Post.styled'
import { PrettyButton } from '../Buttons/PrettyButton.styled'

export default function Post() {
    return (
        <PostOutterContainer>
        <PostContainer>
            <ImageContainer>
                <img src='./assets/images/user.png' alt='profile pic' />
            </ImageContainer>
            <PostBody>
            <PostHeader>
            <h3>Mary Marie</h3>
            <p>June 2, 2022</p>
            </PostHeader>
            <PostMessage>
                Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters. Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. 
            </PostMessage>
            <PrettyButton>Help Mary</PrettyButton>
            </PostBody>
        </PostContainer>
        <PostFooter>
            <button as='a' href='#'>Comment</button>
        </PostFooter>
        </PostOutterContainer>
    )
}