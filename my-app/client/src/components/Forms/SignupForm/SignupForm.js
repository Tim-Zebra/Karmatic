import React from 'react';
import { StyledForm } from "./SignupForm.styled"
import CreateButton from '../../Buttons/CreateButton'

import submitButton from '../../Buttons/SubmitButton'
import toggleButton from '../../Buttons/ToggleButton'

export default function LoginForm({ handleSubmit, handleLoginSignupToggle }) {
    const toggleButtonTextContent = 'Login Instead!!';
    const submitButtonTextContent = 'Signup/Submit';
    
    return (
        <StyledForm>
            <label for="email">email</label>
            <input type="text" name="email" placeholder="Enter your email..." />

            <label for="email">confirm email</label>
            <input type="text" name="email" placeholder="Confirm your email..." />

            <label for="password">password</label>
            <input type="password" name="password" placeholder="Type in your password..." />

            <label for="password">confirm password</label>
            <input type="password" name="password" placeholder="Confirm your password..." />
            <submitButton submit={handleSubmit} textContent={submitButtonTextContent} />
            <toggleButton toggle={handleLoginSignupToggle} textContent={toggleButtonTextContent} />
            <a href="toggle={handleLoginSignupToggle}">Back to Login</a>
        </StyledForm>
    );
}