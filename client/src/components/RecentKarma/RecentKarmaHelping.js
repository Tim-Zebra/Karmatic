import React from 'react'
import { RecentKarmaBox, ExchangeContainer, KarmaCoins, RecentContainer } from './RecentKarmaHelping.styled'

export default function RecentKarmaHelping({ karmaPostData }) {

    return (
        <RecentKarmaBox>
            <RecentContainer>
                <ExchangeContainer>

                        <h3>You are currently helping {karmaPostData.postAuthor} with '{karmaPostData.postTitle}'</h3>
                
                </ExchangeContainer>

                <KarmaCoins>
                    <img src='./assets/images/karma_coin.png' alt='karma coin' />
                    <p> {karmaPostData.postValue} Karma Coins</p>
                </KarmaCoins>
            </RecentContainer>
        </RecentKarmaBox>
    )
}