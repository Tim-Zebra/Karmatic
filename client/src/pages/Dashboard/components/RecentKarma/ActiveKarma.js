import React from 'react'
import { RecentKarmaBox, ExchangeContainer, KarmaCoins, ActiveRecentContainer } from './ActiveRecentKarma.styled'

export default function ActiveKarma({ karmaPostData }) {

    return (
        <RecentKarmaBox>
            <ActiveRecentContainer>
                <ExchangeContainer>

                        <h4>You are currently helping {karmaPostData.postAuthor} with '{karmaPostData.postTitle}'</h4>
                
                </ExchangeContainer>

                <KarmaCoins>
                    <h1> {karmaPostData.postValue}</h1>
                    <img src='./assets/images/karma_coin.png' alt='karma coin' />
                    
                </KarmaCoins>
            </ActiveRecentContainer>
        </RecentKarmaBox>
    )
}