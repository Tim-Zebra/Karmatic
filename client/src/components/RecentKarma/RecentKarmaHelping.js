import React from 'react'
import { RecentKarmaBox, ExchangeContainer, KarmaCoins, RecentContainer } from './RecentKarmaHelping.styled'

export default function RecentKarmaHelping({ karmaPostData }) {

    return (
        <RecentKarmaBox>
            <RecentContainer>
                <ExchangeContainer>

                    {/* Determines verbage if pasttense or current based on current helping post being completed or not */}
                    {karmaPostData.complete &&
                        <h2>You helped out {karmaPostData.postAuthor} with '{karmaPostData.postTitle}'</h2>
                    }
                    {!karmaPostData.complete &&
                        <h2>You are currently helping {karmaPostData.postAuthor} with '{karmaPostData.postTitle}'</h2>
                    }
                
                </ExchangeContainer>

                <KarmaCoins>
                    <h3>Post Value: </h3>
                    <p> {karmaPostData.postValue} Karma Coins</p>
                </KarmaCoins>
            </RecentContainer>
        </RecentKarmaBox>
    )
}