import React, { useState } from 'react';
import { CreatePostButton } from '../Buttons/AddButton.styled'
import { PostFormContainer, PostTitleContainer, PostTextArea, PostFormOptions, DeleteButton } from './PostForm.styled'

import { useMutation } from '@apollo/client';
import { EDIT_POST } from '../../utils/mutations';

export default function PostForm({karmaPostData}) {
    const [title, setTitle] = useState(`${karmaPostData.postTitle}`);
    const [description, setDescription] = useState(`${karmaPostData.postDescription}`);
    const [difficulty, setDifficulty] = useState(`${karmaPostData.difficulty}`);
    const [duration, setDuration] = useState(`${karmaPostData.duration}`);
    const [address, setAddress] = useState(`${karmaPostData.address}`);
    const postId = karmaPostData._id;
    const [editPost] = useMutation(EDIT_POST);

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(postId, title, description, duration, difficulty, address)
        try {
            await editPost({
                variables: {
                    karmaPostId: postId,
                    postTitle: title,
                    postDescription: description,
                    duration: parseInt(duration),
                    difficulty: difficulty,
                    address: address
                }
            })
        }
        catch (err) {
            console.error(err);
        }
    }

    return (
        <PostFormContainer onSubmit={onSubmit}>
            <PostTitleContainer>
                <input
                    type='text'
                    maxLength={50}
                    placeholder='Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
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
                <label>Difficulty:</label>
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
                <hr />
                <label>Duration:</label>
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
                Create Post
            </CreatePostButton>
            <DeleteButton>
                delete
            </DeleteButton>
        </PostFormContainer>
    )
}