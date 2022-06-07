import React from 'react';
import { StyledForm } from "./LoginForm.styled"

import submitButton from '../../Buttons/SubmitButton'
import toggleButton from '../../Buttons/ToggleButton'

export default function LoginForm({ handleSubmit, handleLoginSignupToggle }) {
    const toggleButtonTextContent = 'Sign Up Instead!!';
    const submitButtonTextContent = 'Login/Submit';
    
    return (
        <StyledForm>
            <label for="email">email</label>
            <input type="text" name="email" placeholder="Enter your email..." />

            <label for="password">password</label>
            <input type="password" name="password" placeholder="Type in your password..." />
            <submitButton submit={handleSubmit} textContent={submitButtonTextContent}/>
            <toggleButton toggle={handleLoginSignupToggle} textContent={toggleButtonTextContent}/>
        </StyledForm>
        
    );
}