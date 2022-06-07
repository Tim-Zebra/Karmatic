import React from 'react';
import {
    StyledForm, UserContainer, UserContainerBorder, UserContainerBorderThick
} from "./LoginForm.styled"
import LoginButton from '../Buttons/LoginButton'
import SignupButton from '../Buttons/SignupButton'



export default function LoginForm() {
    return (
        <UserContainer>
            <UserContainerBorder>
                <UserContainerBorderThick>
                    <StyledForm>
                        <label for="email">email</label>
                        <input type="text" name="email" placeholder="Enter your email..." />

                        <label for="password">password</label>
                        <input type="password" name="password" placeholder="Type in your password..." />
                        <LoginButton />
                        <SignupButton />
                    </StyledForm>
                </UserContainerBorderThick>
            </UserContainerBorder>
        </UserContainer >
    );
}