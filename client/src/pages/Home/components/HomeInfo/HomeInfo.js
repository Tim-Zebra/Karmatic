import React from 'react'
import {
    StyledHomeInfoContainer,
    StyledHeaderContainer,
    StyledHomeLogo,
    Rows,
    Row
} from './HomeInfo.styled'

import { PrettyButton } from '../../../../GlobalComponents/Buttons/PrettyButton.styled'

export default function HomeInfo({handlePageChange}) {

    return (
        <StyledHomeInfoContainer>
            <StyledHeaderContainer>
                <StyledHomeLogo src='./assets/images/logo_karmatic_pretty.png' alt='karmatic logo' />
            </StyledHeaderContainer>
            <hr />
            <Rows>
                <Row>
                    <img src='./assets/images/hands.png' alt='hands shaking' />
                    <p>Karmatic is a hub for communities to come together and help each other by volunteering assistance and posting requests for help. You earn karma by helping your community. Karmatic is a free service designed to make good deeds easier!</p>
                </Row>
                
                <Row>
                <img src='./assets/images/helping.png' alt='helping wheelbarrel' />
                    <p>
                        You start with 100 karma, which you can use to request help, and when you help someone else,  you get DOUBLE the karma they spent.
                    </p>
                </Row>
                <Row>
                <img src='./assets/images/flags.png' alt='waving flags' />
                    <p>
                        You can get help with simple tasks, like mowing the lawn or walking a dog, but you can also get help with tasks requiring extra knowledge, like setting up a wifi network or planting a garden. The karma depends on how much time the tasks takes, and how difficult it is. Sign up now to get started!
                    </p>
                </Row>
                <Row>
                    <p>
                        All you need to do is make a free account, join a community, and request help, or start helping, today!
                    </p>
                    <PrettyButton onClick={() => handlePageChange('SignUp')}>Sign Up</PrettyButton>
                </Row>
            </Rows>
        </StyledHomeInfoContainer>
    )
}
