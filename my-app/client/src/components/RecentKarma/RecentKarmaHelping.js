import React from 'react'
import { RecentKarmaBox, ExchangeContainer, ExchangeBetween, KarmaCoins, RecentContainer } from './RecentKarmaHelping.styled'

export default function RecentKarmaHelping({ karmaPostData }) {
console.log('Helping Karma Post', karmaPostData);
    return (
        <RecentKarmaBox>
            <img src='./assets/images/karma_coin.png' height='44px' alt='karma coin' />
            <RecentContainer>
                <ExchangeContainer>
                    <ExchangeBetween>
                        <h4>received</h4>
                    </ExchangeBetween>
                    <ExchangeBetween>
                        <h4>from</h4>
                        <p>{karmaPostData.postAuthor}</p>
                    </ExchangeBetween>
                </ExchangeContainer>
                <KarmaCoins>
                    <h1>{karmaPostData.postValue}</h1>
                    <p>Karma Coins</p>
                </KarmaCoins>
            </RecentContainer>
        </RecentKarmaBox>
    )
}