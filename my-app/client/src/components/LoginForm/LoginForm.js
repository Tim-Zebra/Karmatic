import React from 'react';
import {
    StyledLoginForm, StyledLoginFormContainer, StyledLoginContainerBorder, StyledLoginContainerBorderThick
} from "./LoginForm.styled"

export default function LoginForm() {
    return (
        <StyledLoginFormContainer>
            <StyledLoginContainerBorder>
                <StyledLoginContainerBorderThick>
                    <StyledLoginForm>
                        <label for="email">email</label>
                        <input type="text" name="email" placeholder="Enter your email..." />

                        <label for="password">password</label>
                        <input type="password" name="password" placeholder="Type in your password..." />

                    </StyledLoginForm>
                </StyledLoginContainerBorderThick>
            </StyledLoginContainerBorder>
        </StyledLoginFormContainer >
    );
}