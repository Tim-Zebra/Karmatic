import React from 'react'
import { ColumnContainer, GreetingContainer, UserContainerHeader, StyledCoin, CurrentKarmaCoinsContainer, KarmaBanner } from './ColumnOne.styled'
import { UserContainer, UserContainerBorder, UserContainerBorderThick } from '../Box/Box.styled'

export default function ColumnOne() {
    return (
            <ColumnContainer>
                <GreetingContainer>
                    Hey, Bob!
                </GreetingContainer>
                <UserContainer>
                    <UserContainerBorder>
                        <UserContainerBorderThick>
                            <UserContainerHeader>
                                Current Karma
                            </UserContainerHeader>
                            {/* im just proud of the karmabar and dont want to delete :( */}
                            {/* <KarmaBar Karma={`75`}></KarmaBar> */}
                            <CurrentKarmaCoinsContainer>
                            <StyledCoin src='./assets/images/karma_coin.png' alt='karma coin' />
                            100 Karma Coins
                            </CurrentKarmaCoinsContainer>
                            <UserContainerHeader>
                                Overall Status:
                            </UserContainerHeader>
                            <KarmaBanner>
                                Great!
                            </KarmaBanner>
                            <a href='#page3'>
                                View Your Profile
                            </a>
                        </UserContainerBorderThick>
                    </UserContainerBorder>
                </UserContainer>
            </ColumnContainer>
    )
}