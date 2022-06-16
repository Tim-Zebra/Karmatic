import React, { useState } from 'react';
import { CreatePostButton } from '../../../../GlobalComponents/Buttons/AddButton.styled'
import { PostFormContainer, PostTitleContainer, PostTextArea, PostFormOptions, DeleteButton } from './PostForm.styled'
import { TextInput } from '../../../../GlobalComponents/Forms/Form.Styled';
import { useMutation } from '@apollo/client';
import { EDIT_POST } from '../../../../utils/mutations';
const calcPostValue = require('../../../../utils/helpers');

export default function PostForm({ karmaPostData, setPostsArray, allPosts, deleteKarmaPost, setIsOpen }) {
    const [title, setTitle] = useState(`${karmaPostData.postTitle}`);
    const [description, setDescription] = useState(`${karmaPostData.postDescription}`);
    const [difficulty, setDifficulty] = useState(`${karmaPostData.difficulty}`);
    const [duration, setDuration] = useState(`${karmaPostData.duration}`);
    const [address, setAddress] = useState(`${karmaPostData.address}`);
    const postId = karmaPostData._id;
    const [editPost] = useMutation(EDIT_POST);

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            // Uses calcPostValue helper function to calculate a new postvalue from difficulty and duration and return it
            const currentPostValue = calcPostValue(difficulty, duration);
            const editedPost = await editPost({
                variables: {
                    karmaPostId: postId,
                    postTitle: title,
                    postDescription: description,
                    postValue: parseInt(currentPostValue),
                    duration: parseInt(duration),
                    difficulty: difficulty,
                    address: address
                }
            })
            // newPostsArr contains all of the posts except the one that is being edited, so that when the edited post is added back into the posts array, that id is not duplicated
            const newPostsArr = allPosts.filter(post => post._id !== editedPost.data.editPost._id)

            // Uses set state to refresh the posts feed with the updated post
            setPostsArray([...newPostsArr, editedPost.data.editPost]);
        }
        catch (err) {
            console.error(err);
        }
    }


    return (
        <PostFormContainer onSubmit={onSubmit}>
            <PostTitleContainer>
                <TextInput
                    type='text'
                    maxLength={50}
                    placeholder='Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextInput
                    type='text'
                    maxLength={50}
                    placeholder='Address'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </PostTitleContainer>
            <PostTextArea
                maxLength={140}
                type='text'
                placeholder='What do you need help with?'
                value={description}
                onChange={(e) => setDescription(e.target.value)}

            />
            <PostFormOptions>
                
                <select
                    id="difficulty"
                    name="difficulty"
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)} >

                    <option
                        value="Easy">Easy</option>
                    <option
                        value="Medium">Medium
                    </option>
                    <option
                        value="Hard">Hard
                    </option>
                </select>
   
                
                <select
                    id="duration"
                    name="difficulty"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                >
                    <option value="1">1 Hour</option>
                    <option value="2">2 Hours</option>
                    <option value="3">3 Hours</option>
                    <option value="4">4 Hours</option>
                </select>
            </PostFormOptions>
            <CreatePostButton
                type='submit'>
                Done
            </CreatePostButton>
        </PostFormContainer>
    )
}