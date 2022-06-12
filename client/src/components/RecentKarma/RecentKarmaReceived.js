import React from 'react'
import { RecentKarmaBox, ExchangeContainer, ExchangeBetween, KarmaCoins, RecentContainer } from './RecentKarmaReceived.styled'

export default function RecentKarmaReceived({ karmaPostData }) {
    return (
        <RecentKarmaBox>
            <img src='./assets/images/karma_coin.png' height='44px' alt='karma coin' />
            <RecentContainer>
                <ExchangeContainer>
                    <ExchangeBetween>
                        <h4>received</h4>
                    </ExchangeBetween>
                    <ExchangeBetween>
                        {/* Displays postauthor */}
                        <h4>from</h4>
                        <p>{karmaPostData.postAuthor}</p>
                    </ExchangeBetween>
                    {/* Displays posttitle */}
                    <div>
                        <h4>post</h4>
                        <p>{karmaPostData.postTitle}</p>
                    </div>
                </ExchangeContainer>
                {/* Displays Karma Coins */}
                <KarmaCoins>
                    <h1>{karmaPostData.postValue}</h1>
                    <p>Karma Coins</p>
                </KarmaCoins>
            </RecentContainer>
        </RecentKarmaBox>
    )
}