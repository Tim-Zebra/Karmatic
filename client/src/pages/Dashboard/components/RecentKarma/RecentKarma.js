import React from 'react'
import { RecentKarmaBox, PostTitle, ExchangeBetweenTop, ExchangeBetweenBottom, KarmaCoins, RecentContainer } from './ActiveRecentKarma.styled'

export default function RecentKarma({ karmaPostData }) {
    return (
        <RecentKarmaBox>
            <RecentContainer>
                    <ExchangeBetweenTop>
                        <p>You</p>
                        <p>received</p>
                    </ExchangeBetweenTop>
                    {/* Displays posttitle */}
                
                {/* Displays Karma Coins */}
                <KarmaCoins>
                    <h1>{karmaPostData.postValue}</h1>
                    <img src='./assets/images/karma_coin.png' alt='karma coin' />
                </KarmaCoins>
                <ExchangeBetweenBottom>
                        {/* Displays postauthor */}
                        <p>from</p>
                        <p>{karmaPostData.postAuthor}</p>
                    </ExchangeBetweenBottom>
                    {/* <PostTitle>
                <p>for</p>
                <h4>{karmaPostData.postTitle}</h4>
            </PostTitle> */}
            </RecentContainer>
            
        </RecentKarmaBox>
    )
}