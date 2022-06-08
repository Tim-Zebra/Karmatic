import React from 'react';
import { StyledForm } from './Form.Styled'
import SubmitButton from '../Buttons/SubmitButton';
import ToggleButton from '../Buttons/ToggleButton';

export default function SignupForm({ handleSubmit, handleLoginSignupToggle }) {
    // Button text content
    const submitButtonTextContent = 'Create Account';
    const toggleButtonTextContent = 'Back to Login';

    return (
        <StyledForm>
            <label for="username">username</label>
            <input type="text" name="username" placeholder="Enter your username..." />

            <label for="email">email</label>
            <input type="text" name="email" placeholder="Enter your email..." />

            <label for="password">password</label>
            <input type="password" name="password" placeholder="Type in your password..." />

            <label for="password">confirm password</label>
            <input type="password" name="password" placeholder="Confirm your password..." />

            <SubmitButton submit={handleSubmit} textContent={submitButtonTextContent} />
            <ToggleButton toggle={handleLoginSignupToggle} textContent={toggleButtonTextContent} />
        </StyledForm>
    );
}