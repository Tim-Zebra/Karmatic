import React from 'react'
import { ColumnContainer, FeedHeaderContainer, CreatePostContainer, FeedContainer, ActivityHeader } from './ColumnTwo.styled'

export default function ColumnTwo() {
    return(
        <ColumnContainer>
            <FeedHeaderContainer>
                <CreatePostContainer>
                    <button as='a' href='#'>
                    <img src='./assets/images/addbutton.png' alt='add button' />
                    Create Post
                    </button>
                </CreatePostContainer>
                <ActivityHeader>
                    Activity
                </ActivityHeader>
            </FeedHeaderContainer>
            <FeedContainer>
                YO
            </FeedContainer>
        </ColumnContainer>
    )
}