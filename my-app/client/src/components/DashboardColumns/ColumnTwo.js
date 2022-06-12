import React, { useState } from 'react'
import Post from '../Post/Post'
import { ColumnContainer, FeedHeaderContainer, CreatePostContainer, FeedContainer, ActivityHeader } from './ColumnTwo.styled'
import PostForm from '../Forms/PostForm'


export default function ColumnTwo({usersKarma, karmaPosts }) {
    // posts array usestate is passed down to child components so they can update the post feed when new posts are created or edited
const [postsArray, setPostsArray] = useState(karmaPosts);

    return (
        <ColumnContainer>
            <FeedHeaderContainer>
                <CreatePostContainer>
                    <PostForm  setPostsArray={setPostsArray} allPosts={karmaPosts}/>
                </CreatePostContainer>
                <ActivityHeader>
                    <p>Activity</p>
                </ActivityHeader>
            </FeedHeaderContainer>
            <FeedContainer>
                {postsArray.map((post) =>
                    <Post karmaPostData={post} key={post._id} setPostsArray={setPostsArray} allPosts={postsArray} usersKarma={usersKarma}/>
                )}

            </FeedContainer>
        </ColumnContainer>
    )
}