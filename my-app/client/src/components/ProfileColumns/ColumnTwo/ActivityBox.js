import React from "react";
import { UserContainerLong } from '../../Box/Box.styled'
import { ActivityBoxStyled, ActivityHistory } from "../../Box/ActivityBox.styled";
import { Container } from "./ProfileColumnTwo.styled";

import { useQuery } from '@apollo/client';
import { QUERY_USER } from "../../../utils/queries"


export default function ActivityBox() {
    const { data } = useQuery(QUERY_USER);
    const user = data?.users[0].username

    return (
        <Container>
            <UserContainerLong>
                <h3>Activity</h3>
                <ActivityBoxStyled>
                    <img height="100px" src='./assets/images/k_logo.png'></img>
                    <ActivityHistory>

                    </ActivityHistory>
                </ActivityBoxStyled>
            </UserContainerLong>
        </Container>

    )
};