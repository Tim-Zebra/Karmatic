import React, { useState } from 'react';
import { CreatePostButton } from '../Buttons/AddButton.styled'
import { PostFormContainer, PostTitleContainer, PostTextArea, PostFormOptions } from './PostForm.styled'

import { useMutation, useQuery } from '@apollo/client';
import { CREATE_POST } from '../../utils/mutations';
import { GET_ME } from '../../utils/queries';

export default function PostForm() {

    const [postTitle, setTitle] = useState('');
    const [postDescription, setDescription] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [duration, setDuration] = useState('');
    const [address, setAddress] = useState('');
    const [createPost] = useMutation(CREATE_POST);

    const { loading, data } = useQuery(GET_ME);
    const username = data?.me.username || [];
    console.log(username)
    if (!username) {
        return null;
    } if (loading) {
        return <h2>LOADING...</h2>;
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await createPost({
                variables: {
                    username: username,
                    postTitle: postTitle,
                    postDescription: postDescription,
                    duration: parseInt(duration),
                    difficulty: difficulty,
                    address: address
                }
            });
            console.log('post created!', typeof postTitle, typeof postDescription, difficulty, typeof duration, address)
            setTitle('');
            setDescription('');
        } catch (err) {
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
                    value={postTitle}
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
                value={postDescription}
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
                    >Select Difficulty</option>
                    <option
                        value="Easy">Easy-Peasy</option>
                    <option
                        value="Medium">Medium-Shmedium
                    </option>
                    <option
                        value="Hard">Very Difficult
                    </option>
                </select>
                <hr />
                <label>Duration:</label>
                <select
                    id="duration"
                    name="difficulty"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}>
                    <option>Select Duration</option>
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
        </PostFormContainer>
    )
}