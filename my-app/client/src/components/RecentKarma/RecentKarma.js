import React from 'react'
import { RecentKarmaBox, ExchangeContainer, ExchangeBetween, KarmaCoins, RecentContainer } from './RecentKarma.styled'

const karma = 60

export default function RecentKarma(){
    return (
        <RecentKarmaBox>
            <img src='./assets/images/karma_coin.png' height='44px' alt='karma coin' />
            <RecentContainer>
                <ExchangeContainer>
                    <ExchangeBetween>
                        <h3>Bob</h3>
                        <p>received</p>
                    </ExchangeBetween>
                    <ExchangeBetween>
                        <p>from</p>
                        <h3>Mary</h3>
                    </ExchangeBetween>
                </ExchangeContainer>
                <KarmaCoins>
                    <h1>{karma}</h1>
                    <h3>Karma Coins</h3>
                </KarmaCoins>
            </RecentContainer>
        </RecentKarmaBox>
    )
}