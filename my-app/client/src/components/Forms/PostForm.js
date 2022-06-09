import React from "react";
import { CreatePostButton } from '../Buttons/AddButton.styled'
import { PostFormContainer, PostTitleContainer, PostTextArea, PostFormOptions } from './PostForm.styled'

export default function PostForm() {
    return (
        <PostFormContainer>
            <PostTitleContainer>
            <input type='text' maxLength={50} placeholder='Title' />
            </PostTitleContainer>
            <PostTextArea maxLength={140} placeholder='What do you need help with?'/>
                <PostFormOptions>
                    <label>Difficulty:</label>
                        <select id="difficulty" name="difficulty">
                            <option value="Easy">Easy-Peasy</option>
                            <option value="Medium">Medium-Shmedium</option>
                            <option value="Hard">Very Difficult</option>
                        </select>
                    <hr />
                    <label>Duration:</label>
                        <select id="difficulty" name="difficulty">
                            <option value="1">1 Hour</option>
                            <option value="2">2 Hours</option>
                            <option value="3">3 Hours</option>
                            <option value="4">4 Hours</option>
                        </select>
                </PostFormOptions>
            <CreatePostButton as='a' href='#' type='submit'>
            Create Post
            </CreatePostButton>
        </PostFormContainer>
    )
}