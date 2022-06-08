import React from "react";
import { UserContainer, UserContainerBorder, UserContainerBorderThick } from '../Box/Box.styled'

export default function ProfileColumnOne() {
    return (
        <UserContainer>
            <UserContainerBorder>
                <UserContainerBorderThick>
                    <p>Neighbors</p>
                </UserContainerBorderThick>
            </UserContainerBorder>
        </UserContainer>
    )
}