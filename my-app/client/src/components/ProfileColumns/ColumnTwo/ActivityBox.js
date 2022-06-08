import React from "react";
import { UserContainerLong } from '../../Box/Box.styled'
import { ActivityBoxStyled, ActivityHistory } from "../../Box/ActivityBox.styled";
import { Container } from "./ProfileColumnTwo.styled";



export default function ActivityBox() {


    return (
        <Container>
            <UserContainerLong>
                <h3>Activity</h3>
                <ActivityBoxStyled>
                    <img height="100px" src='./assets/images/k_logo.png' alt='karmatic logo'></img>
                    <ActivityHistory>

                    </ActivityHistory>
                </ActivityBoxStyled>
            </UserContainerLong>
        </Container>

    )
};