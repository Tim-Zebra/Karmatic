import React from 'react';
import {
    StyledLoginForm, UserContainer, UserContainerBorder, UserContainerBorderThick
} from "./LoginForm.styled"
import SignUpButton from '../../components/Buttons/SignupButton'


export default function LoginForm() {
    return (
        <UserContainer>
            <UserContainerBorder>
                <UserContainerBorderThick>
                    <StyledLoginForm>
                        <label for="email">LORUM IPSUM 4 EVER</label>
                        <input type="text" name="email" placeholder="allwrong***..." />

                        <label for="password">I AM JUST PLACEHOLDER</label>
                        <input type="password" name="password" placeholder="allwrong..." />
                        <SignUpButton />
                    </StyledLoginForm>
                </UserContainerBorderThick>
            </UserContainerBorder>
        </UserContainer >
    );
}