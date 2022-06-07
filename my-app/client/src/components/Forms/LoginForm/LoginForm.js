import React from 'react';
import { StyledLoginForm } from "./LoginForm.styled"

// Imports buttons
import LoginButton from '../../Buttons/LoginButton'
import ToggleButton from '../../Buttons/ToggleButton'

export default function LoginForm({handleLoginSignupToggle}) {
    return (
        <StyledLoginForm>
            <h1>Login Form</h1>
            <label for="email">email</label>
            <input type="text" name="email" placeholder="Enter your email..." />

            <label for="password">password</label>
            <input type="password" name="password" placeholder="Type in your password..." />
            <LoginButton />
            <ToggleButton toggle={handleLoginSignupToggle}/>
        </StyledLoginForm>
    );
}