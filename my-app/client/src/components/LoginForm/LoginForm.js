import React from 'react';
import {
    StyledLoginForm, UserContainer, UserContainerBorder, UserContainerBorderThick
} from "./LoginForm.styled"
import LoginButton from '../Buttons/LoginButton'


export default function LoginForm() {
    return (
        <UserContainer>
            <UserContainerBorder>
                <UserContainerBorderThick>
                    <StyledLoginForm>
                        <label for="email">email</label>
                        <input type="text" name="email" placeholder="Enter your email..." />

                        <label for="password">password</label>
                        <input type="password" name="password" placeholder="Type in your password..." />
                        <LoginButton />
                    </StyledLoginForm>
                </UserContainerBorderThick>
            </UserContainerBorder>
        </UserContainer >
    );
}