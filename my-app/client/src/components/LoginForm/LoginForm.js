import React from 'react';
import { StyledLoginForm, StyledLoginFormContainer } from "./LoginForm.styled"

export default function LoginForm() {
    return (
        <StyledLoginFormContainer>
            <StyledLoginForm>
                <label for="email">Email:</label>
                <input type="text" name="email" placeholder="Enter your email..." />

                <label for="password">Password</label>
                <input type="password" name="password" placeholder="Type in your password..." />
                <button>Submit</button>
            </StyledLoginForm>
        </StyledLoginFormContainer>
    );
}