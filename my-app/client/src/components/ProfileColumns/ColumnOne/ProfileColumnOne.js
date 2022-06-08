import React from "react";
//Styled Components
import { UserContainer, UserContainerBorder, UserContainerBorderThick } from '../../Box/Box.styled'
import { ActivityBoxStyled } from "../../Box/ActivityBox.styled";

export default function ProfileColumnOne() {
    return (
        <UserContainer>
            <UserContainerBorder>
                <UserContainerBorderThick>
                    <h1>Neighbors</h1>
                    <ActivityBoxStyled>
                        <img height="80px" border="1px solid" src='./assets/images/user.png' alt='profile pic' />
                    </ActivityBoxStyled>
                </UserContainerBorderThick>
            </UserContainerBorder>
        </UserContainer>
    )
}