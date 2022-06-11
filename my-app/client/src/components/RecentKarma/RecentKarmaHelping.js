import React from 'react'
import { RecentKarmaBox, ExchangeContainer, ExchangeBetween, KarmaCoins, RecentContainer } from './RecentKarmaHelping.styled'

export default function RecentKarmaHelping({ karmaPostData }) {
console.log('Helping Karma Post', karmaPostData);
    return (
        <RecentKarmaBox>
            <RecentContainer>
                <div>
                    <h1>Helping out: {karmaPostData.postAuthor}</h1>
                    <p>postCONTENT</p>
                </div>
                <div>

                </div>
                <KarmaCoins>
                    <h1>{karmaPostData.postValue}</h1>
                    <p>Karma Coins</p>
                </KarmaCoins>
            </RecentContainer>
        </RecentKarmaBox>
    )
}