import React, { useState } from 'react';
import { CreatePostButton } from '../Buttons/AddButton.styled'
import { PostFormContainer, PostTitleContainer, PostTextArea, PostFormOptions } from './PostForm.styled'

import { useMutation } from '@apollo/client';
import { CREATE_POST } from '../../utils/mutations';

export default function PostForm() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [duration, setDuration] = useState('');
    const [address, setAddress] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(title, description, difficulty, duration, address)
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
        </PostFormContainer>
    )
}