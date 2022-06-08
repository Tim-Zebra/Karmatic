import React from 'react'
import Post from '../Post/Post'
import { ColumnContainer, FeedHeaderContainer, CreatePostContainer, FeedContainer, ActivityHeader, PostTextArea, } from './ColumnTwo.styled'
import { AddButton } from '../Buttons/AddButton.styled'

export default function ColumnTwo() {
    return(
        <ColumnContainer>
            <FeedHeaderContainer>
                <CreatePostContainer>
                    <PostTextArea placeholder='Karmatic Post Here!'/>
          
                    <AddButton as='a' href='#'>
                    <img src='./assets/images/addbutton.png' alt='add button' />
                    Create Post
                    </AddButton>

                </CreatePostContainer>
                <ActivityHeader>
                    Activity
                </ActivityHeader>
            </FeedHeaderContainer>
            <FeedContainer>
                <Post></Post>
            </FeedContainer>
        </ColumnContainer>
    )
}