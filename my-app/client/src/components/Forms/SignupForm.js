import React from 'react';
import {
    StyledForm, UserContainer, UserContainerBorder, UserContainerBorderThick
} from "./LoginForm.styled"
import SignupButton from '../Buttons/SignupButton'


export default function SignupForm() {
    return (
        <UserContainer>
            <UserContainerBorder>
                <UserContainerBorderThick>
                    <StyledForm>
                        <label for="email">email</label>
                        <input type="text" name="email" placeholder="Enter your email..." />

                        <label for="email">confirm email</label>
                        <input type="text" name="email" placeholder="Confirm your email..." />

                        <label for="password">password</label>
                        <input type="password" name="password" placeholder="Type in your password..." />

                        <label for="password">confirm password</label>
                        <input type="password" name="password" placeholder="Confirm your password..." />
                        <SignupButton />
                        <a href="">Or Login</a>
                    </StyledForm>
                </UserContainerBorderThick>
            </UserContainerBorder>
        </UserContainer >
    );
}