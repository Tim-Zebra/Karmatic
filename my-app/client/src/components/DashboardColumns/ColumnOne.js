import React from 'react'
import { ColumnContainer, GreetingContainer, UserContainerHeader, StyledCoin, CurrentKarmaCoinsContainer, GreatKarmaBanner, AwesomeKarmaBanner, ExcellentKarmaBanner, CommunityLeaderKarmaBanner, KarmaticHeroKarmaBanner } from './ColumnOne.styled'
import { UserContainer, UserContainerBorder, UserContainerBorderThick } from '../Box/Box.styled'

const data = 
{
    username: 'Bob',
    karma: 2000,
}

export default function ColumnOne({ handlePageChange }) {
    return (
            <ColumnContainer>
                <GreetingContainer>
                    Hey, {data.username}!
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
                                {data.karma} Karma Coins
                            </CurrentKarmaCoinsContainer>
                            <UserContainerHeader>
                                Overall Status:
                            </UserContainerHeader>

                            { data.karma > 100 && data.karma < 500 ?
                            <GreatKarmaBanner>
                                Great!
                            </GreatKarmaBanner>
                            : data.karma >= 500 && data.karma < 1000 ?
                            <AwesomeKarmaBanner>
                                Awesome!
                            </AwesomeKarmaBanner>
                            : data.karma >= 1000 && data.karma < 1500 ?
                            <ExcellentKarmaBanner>
                                Excellent!
                            </ExcellentKarmaBanner>
                            : data.karma >= 1500 && data.karma < 2000 ?
                            <CommunityLeaderKarmaBanner>
                                Community Leader!
                            </CommunityLeaderKarmaBanner>
                            : data.karma >= 1500 ?
                            <KarmaticHeroKarmaBanner>
                                Karmatic Hero!
                            </KarmaticHeroKarmaBanner>
                            : <>Help Somone Today to Change your Status!</>
                            }

                            <a href='#profile' onClick={() => handlePageChange('Profile')}>
                                View Your Profile
                            </a>
                        </UserContainerBorderThick>
                    </UserContainerBorder>
                </UserContainer>
            </ColumnContainer>
    )
}