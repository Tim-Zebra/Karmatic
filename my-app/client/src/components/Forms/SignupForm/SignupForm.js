// SIGN UP FORM
import React from 'react';
import { StyledSignupForm } from "./SignupForm.styled"

// Imports buttons
import SignupButton from '../../Buttons/SignupButton'
import ToggleButton from '../../Buttons/ToggleButton'

// Renders login form
export default function LoginForm({handleLoginSignupToggle}) {
    return (
        <StyledSignupForm>
            <h1>Sign Up Form</h1>
            <label for="email">LORUM IPSUM 4 EVER</label>
            <input type="text" name="email" placeholder="allwrong***..." />

            <label for="password">I AM JUST PLACEHOLDER</label>
            <input type="password" name="password" placeholder="REALLY WRONG.." />
            <SignupButton />
            <ToggleButton toggle={handleLoginSignupToggle}/>
        </StyledSignupForm>
    );
}