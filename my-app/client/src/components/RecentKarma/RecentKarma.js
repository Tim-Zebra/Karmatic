import React from 'react'
import { RecentKarmaBox, ExchangeContainer, ExchangeBetween, KarmaCoins, RecentContainer } from './RecentKarma.styled'

// STATIC DATA BUILT OFF MODEL 
const data = 
{
    postAuthor: 'Mary',
    postValue: '100',
    karmaHelpers: [
        {
        helperUsername: 'Bob',
        }
    ]
}

export default function RecentKarma(){
    return (
        <RecentKarmaBox>
            <img src='./assets/images/karma_coin.png' height='44px' alt='karma coin' />
            <RecentContainer>
                <ExchangeContainer>
                    <ExchangeBetween>
                        <p>{data.karmaHelpers[0].helperUsername}</p>
                        <h4>received</h4>
                    </ExchangeBetween>
                    <ExchangeBetween>
                        <h4>from</h4>
                        <p>{data.postAuthor}</p>
                    </ExchangeBetween>
                </ExchangeContainer>
                <KarmaCoins>
                    <h1>{data.postValue}</h1>
                    <p>Karma Coins</p>
                </KarmaCoins>
            </RecentContainer>
        </RecentKarmaBox>
    )
}