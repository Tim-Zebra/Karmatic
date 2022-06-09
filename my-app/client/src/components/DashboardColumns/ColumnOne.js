import React from 'react'
import { ColumnContainer, GreetingContainer, UserContainerHeader, StyledCoin, CurrentKarmaCoinsContainer } from './ColumnOne.styled'
import StatusBanner from '../StatusBanner/StatusBanner'
import { UserContainer, UserContainerBorder, UserContainerBorderThick } from '../Box/Box.styled'

const data = 
{
    username: 'Bob',
    karma: 2000,
}

export default function ColumnOne({handlePageChange}) {
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

                            <StatusBanner data={data} />

                            <a href='#profile' onClick={() => handlePageChange('Profile')}>
                                View Your Profile
                            </a>
                        </UserContainerBorderThick>
                    </UserContainerBorder>
                </UserContainer>
            </ColumnContainer>
    )
}