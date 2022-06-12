import React from 'react'
import { RecentKarmaBox, ExchangeContainer, ExchangeBetween, KarmaCoins, RecentContainer } from './RecentKarmaHelping.styled'

export default function RecentKarmaHelping({ karmaPostData }) {

    return (
        <RecentKarmaBox>
            <RecentContainer>
                <div>
                    {/* Determines verbage if pasttense or current based on current helping post being completed or not */}
                    {karmaPostData.complete &&
                        <h2>Helped out {karmaPostData.postAuthor} with</h2>
                    }
                    {!karmaPostData.complete &&
                        <h2>Helping out {karmaPostData.postAuthor} with</h2>
                    }
                    <h3>{karmaPostData.postTitle}</h3>
                    <p>"{karmaPostData.postDescription}"</p>
                </div>
                <div>

                </div>
                <KarmaCoins>
                    <h3>Post Value: </h3>
                    <p> {karmaPostData.postValue} Karma Coins</p>
                </KarmaCoins>
            </RecentContainer>
        </RecentKarmaBox>
    )
}