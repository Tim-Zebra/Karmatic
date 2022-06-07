import React from 'react';
import { StyledForm } from "./SignupForm.styled";
import CreateButton from '../../Buttons/CreateButton';

import SubmitButton from '../../Buttons/SubmitButton';
import ToggleButton from '../../Buttons/ToggleButton';

export default function LoginForm({ handleSubmit, handleLoginSignupToggle }) {
    // Button text content
    const submitButtonTextContent = 'Signup/Submit';
    const toggleButtonTextContent = 'Login Instead!!';

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

            <SubmitButton submit={handleSubmit} textContent={submitButtonTextContent} />
            <ToggleButton toggle={handleLoginSignupToggle} textContent={toggleButtonTextContent} />
            
            <a href="toggle={handleLoginSignupToggle}">Back to Login</a>
        </StyledForm>
    );
}