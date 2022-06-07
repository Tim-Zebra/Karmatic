import React from 'react';
import { StyledForm } from "./LoginForm.styled"
import LoginButton from '../../Buttons/LoginButton'
import SignupButton from '../../Buttons/SignupButton'
import toggleButton from '../../Buttons/ToggleButton'

export default function LoginForm({ handleLoginSignupToggle }) {
    return (
        <StyledForm>
            <label for="email">email</label>
            <input type="text" name="email" placeholder="Enter your email..." />

            <label for="password">password</label>
            <input type="password" name="password" placeholder="Type in your password..." />
            <LoginButton></LoginButton>
            <toggleButton toggle={handleLoginSignupToggle}></SignupButton>
        </StyledForm>
    );
}