import React from "react";
import { AddButton } from '../Buttons/AddButton.styled'
import { PostFormContainer, PostTextArea, PostFormOptions } from './PostForm.styled'

export default function PostForm() {
    return (
        <PostFormContainer>
            <PostTextArea placeholder='Karmatic Post Here!'/>
                <PostFormOptions>
                    <label>Difficulty</label>
                        <select id="difficulty" name="difficulty">
                            <option value="volvo">Easy</option>
                            <option value="saab">Medium</option>
                            <option value="fiat">Hard</option>
                        </select>
                    <label>Duration</label>
                        <select id="difficulty" name="difficulty">
                            <option value="volvo">1 Hour</option>
                            <option value="saab">2 Hours</option>
                            <option value="fiat">3 Hours</option>
                            <option value="fiat">4 Hours</option>
                        </select>
                </PostFormOptions>
            <AddButton as='a' href='#' type='submit'>
            <img src='./assets/images/addbutton.png' alt='add button' />
            Create Post
            </AddButton>
        </PostFormContainer>
    )
}