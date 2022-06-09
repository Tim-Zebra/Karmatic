import React from 'react'
import Post from '../Post/Post'
import { ColumnContainer, FeedHeaderContainer, CreatePostContainer, FeedContainer, ActivityHeader  } from './ColumnTwo.styled'
import PostForm from '../Forms/PostForm'

export default function ColumnTwo() {
    return(
        <ColumnContainer>
            <FeedHeaderContainer>
                <CreatePostContainer>
                    <PostForm />
                </CreatePostContainer>
                <ActivityHeader>
                    Activity
                </ActivityHeader>
            </FeedHeaderContainer>
            <FeedContainer>
                <Post />
            </FeedContainer>
        </ColumnContainer>
    )
}