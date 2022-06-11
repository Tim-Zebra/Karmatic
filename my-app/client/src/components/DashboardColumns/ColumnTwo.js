import React, { useState } from 'react'
import Post from '../Post/Post'
import { ColumnContainer, FeedHeaderContainer, CreatePostContainer, FeedContainer, ActivityHeader } from './ColumnTwo.styled'
import PostForm from '../Forms/PostForm'

// Allows use for both queries and mutations from our utils folder
import { useMutation, useQuery } from '@apollo/client';

// Gets Queries
// Gets the Karma Post
import { GET_ALL_KARMAPOSTS } from '../../utils/queries';

export default function ColumnTwo({usersKarma}) {
    // Queries users to get karma for each user, so it can be passed to Post as prop and displayed on their posts
console.log('column2 data',usersKarma)
    // Queries Karma Post data
    // Sets hooks for data loading
    const { loading, data } = useQuery(GET_ALL_KARMAPOSTS);

    const karmaPosts = data?.allKarmaPosts || [];

    if (!karmaPosts) {
        return null;
    }

    // Displays differently during loading
    if (loading) {
        return <h2>LOADING...</h2>;
    }

    return (
        <ColumnContainer>
            <FeedHeaderContainer>
                <CreatePostContainer>
                    <PostForm />
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