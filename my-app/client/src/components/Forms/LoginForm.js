import React from 'react';
import { StyledForm } from "./Form.Styled"

import SubmitButton from '../Buttons/SubmitButton'
import ToggleButton from '../Buttons/ToggleButton'

export default function LoginForm({ handleSubmit, handleLoginSignupToggle }) {
    // Button text content
    const toggleButtonTextContent = 'Sign Up';
    const submitButtonTextContent = 'Login';

    return (
        <StyledForm>
            <label for="email">email</label>
            <input type="text" name="email" placeholder="Enter your email..." />

            <label for="password">password</label>
            <input type="password" name="password" placeholder="Type in your password..." />

            <SubmitButton submit={handleSubmit} textContent={submitButtonTextContent} />
            <ToggleButton toggle={handleLoginSignupToggle} textContent={toggleButtonTextContent} />
        </StyledForm>
    );
}