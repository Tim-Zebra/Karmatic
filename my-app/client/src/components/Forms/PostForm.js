import React, { useState } from 'react';
import { CreatePostButton } from '../Buttons/AddButton.styled'
import { PostFormContainer, PostTitleContainer, PostTextArea, PostFormOptions } from './PostForm.styled'

import { useMutation } from '@apollo/client';
import { CREATE_POST } from '../../utils/mutations';

export default function PostForm(handleSubmit) {

    const [postFormData, setpostFormData] = useState({ difficulty: '', title: '', description: '', duration: '' });
    const [createPost, { error, data }] = useMutation(CREATE_POST);
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setpostFormData({
            ...postFormData,
            [name]: value
        });
    };
    const handlePostFormSubmit = async (event) => {
        console.log('HANDLE FORM SUBMIT HAPPENED');
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        try {
            const postData = {
                title: postFormData.title,
                description: postFormData.description,
                difficulty: postFormData.difficulty,
                duration: postFormData.duration,
            }
            const { data } = await createPost({
                variables: { ...postData },
            });
        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }
        setpostFormData({
            difficulty: '',
            title: '',
            description: '',
        });
    }
    return (
        <PostFormContainer onSubmit={handlePostFormSubmit}>
            <PostTitleContainer>
                <input
                    type='text'
                    maxLength={50}
                    placeholder='Title'
                    value={postFormData.title}
                />
            </PostTitleContainer>
            <PostTextArea
                maxLength={140}
                type='text'
                placeholder='What do you need help with?' value={postFormData.description}
            />
            <PostFormOptions>
                <label>Difficulty:</label>
                <select
                    id="difficulty"
                    name="difficulty"
                    value={postFormData.difficulty} onChange={handleInputChange}>
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
                    value={postFormData.duration}
                    onChange={handleInputChange}>
                    <option value="1">1 Hour</option>
                    <option value="2">2 Hours</option>
                    <option value="3">3 Hours</option>
                    <option value="4">4 Hours</option>
                </select>
            </PostFormOptions>
            <CreatePostButton
                as='a'
                href='#'
                type='submit'
                submit={handleSubmit}>
                Create Post
            </CreatePostButton>
        </PostFormContainer>
    )
}