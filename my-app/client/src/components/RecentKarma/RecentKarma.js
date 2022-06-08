import React from 'react'
import { RecentKarmaBox, ExchangeContainer, ExchangeBetween, KarmaCoins, RecentContainer } from './RecentKarma.styled'

const karma = 60

export default function RecentKarma(){
    return (
        <RecentKarmaBox>
            <img src='./assets/images/karma_coin.png' height='66px' alt='karma coin' />
            <RecentContainer>
                <ExchangeContainer>
                    <ExchangeBetween>
                        <p>Bob</p>
                        <p>received</p>
                    </ExchangeBetween>
                    <ExchangeBetween>
                        <p>from</p>
                        <p>Mary</p>
                    </ExchangeBetween>
                </ExchangeContainer>
                <KarmaCoins>
                    <h1>{karma}</h1>
                    <p>Karma Coins</p>
                </KarmaCoins>
            </RecentContainer>
        </RecentKarmaBox>
    )
}