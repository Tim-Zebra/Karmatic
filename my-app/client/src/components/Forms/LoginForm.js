import React from 'react';
import { StyledForm, OrDiv } from "./Form.Styled"

import SubmitButton from '../Buttons/SubmitButton'
import ToggleButton from '../Buttons/ToggleButton'

export default function LoginForm({ handleSubmit, handleLoginSignupToggle }) {
    // Button text content
    const toggleButtonTextContent = 'Sign Up';
    const submitButtonTextContent = 'Login';

    return (
        <StyledForm>
            <label for="username">username</label>
            <input type="text" name="username" placeholder="Enter your username..." />

            <label for="password">password</label>
            <input type="password" name="password" placeholder="Type in your password..." />

            <SubmitButton submit={handleSubmit} textContent={submitButtonTextContent} />
            <OrDiv>
                <hr /> or <hr />
            </OrDiv>
            <ToggleButton toggle={handleLoginSignupToggle} textContent={toggleButtonTextContent} />
        </StyledForm>
    );
}