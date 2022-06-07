// SIGN UP FORM
import React from 'react';
import { StyledLoginForm } from "./SignupForm.styled"

// Imports buttons
import SignUpButton from '../../components/Buttons/SignupButton'
import ToggleButton from '../../Buttons/ToggleButton'

// Renders login form
export default function LoginForm() {
    return (
        <StyledLoginForm>
            <label for="email">LORUM IPSUM 4 EVER</label>
            <input type="text" name="email" placeholder="allwrong***..." />

            <label for="password">I AM JUST PLACEHOLDER</label>
            <input type="password" name="password" placeholder="REALLY WRONG.." />
            <SignUpButton />
            <ToggleButton />
        </StyledLoginForm>
    );
}