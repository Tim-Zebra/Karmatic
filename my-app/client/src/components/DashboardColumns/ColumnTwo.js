import React, { useState } from 'react'
import Post from '../Post/Post'
import { ColumnContainer, FeedHeaderContainer, CreatePostContainer, FeedContainer, ActivityHeader } from './ColumnTwo.styled'
import PostForm from '../Forms/PostForm'


export default function ColumnTwo({usersKarma, karmaPosts, handlePageChange}) {

    return (
        <ColumnContainer>
            <FeedHeaderContainer>
                <CreatePostContainer>
                    <PostForm handlePageChange={handlePageChange} />
                </CreatePostContainer>
                <ActivityHeader>
                    <p>Activity</p>
                </ActivityHeader>
            </FeedHeaderContainer>
            <FeedContainer>

                {karmaPosts.map((post) =>
                    <Post karmaPostData={post} usersKarma={usersKarma} key={post.id}/>
                )}

            </FeedContainer>
        </ColumnContainer>
    )
}