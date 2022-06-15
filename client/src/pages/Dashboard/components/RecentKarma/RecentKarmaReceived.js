import React from 'react'
import { RecentKarmaBox, PostTitle, ExchangeBetweenTop, ExchangeBetweenBottom, KarmaCoins, RecentContainer } from './RecentKarmaReceived.styled'

export default function RecentKarmaReceived({ karmaPostData }) {
    return (
        <RecentKarmaBox>
            <img src='./assets/images/karma_coin.png' height='44px' alt='karma coin' />
            <RecentContainer>
                    <ExchangeBetweenTop>
                        <p>You</p>
                        <h4>received</h4>
                    </ExchangeBetweenTop>
                    {/* Displays posttitle */}
                
                {/* Displays Karma Coins */}
                <KarmaCoins>
                    <h1>{karmaPostData.postValue}</h1>
                    <p>Karma Coins</p>
                </KarmaCoins>
                <ExchangeBetweenBottom>
                        {/* Displays postauthor */}
                        <h4>from</h4>
                        <p>{karmaPostData.postAuthor}</p>
                    </ExchangeBetweenBottom>
            </RecentContainer>
            {/* <PostTitle>
                <p>for</p>
                <h4>{karmaPostData.postTitle}</h4>
            </PostTitle> */}
        </RecentKarmaBox>
    )
}