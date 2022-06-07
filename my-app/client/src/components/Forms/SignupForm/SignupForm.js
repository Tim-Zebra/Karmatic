import React from 'react';
import { StyledForm } from "./SignupForm.styled"
import CreateButton from '../../Buttons/CreateButton'
import LoginButton from '../../Buttons/LoginButton'

export default function LoginForm({ handleLoginSignupToggle }) {
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
            <CreateButton />
            <a href="toggle={handleLoginSignupToggle}">Back to Login</a>
        </StyledForm>
    );
}