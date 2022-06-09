import React from 'react'
import { PostOutterContainer, PostContainer, PostBody, ImageContainer, PostHeader, PostMessage, PostFooter, } from './Post.styled'
import { PrettyButton } from '../Buttons/PrettyButton.styled'

const data = {
    postTitle: 'Pirate Bay',
    postDescription: `Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl.`,
    postAuthor: 'Mary',
    postValue: 100,
    duration: 1,
    difficulty: 'Medium',
    createdAt: 'June 2, 2022',
    karmaHelpers: [
        {
            helperUsername: 'Bob'
        }
    ]
}

export default function Post() {
    return (
        <PostOutterContainer>
        <PostContainer>
            <ImageContainer>
                <img src='./assets/images/user.png' alt='profile pic' />
            </ImageContainer>
            <PostBody>

                <PostHeader>
                    <h3>{data.postAuthor}</h3>
                    <p>{data.createdAt}</p>
                </PostHeader>
                <PostMessage>
                    <p>{data.postTitle}</p>
                    {data.postDescription}
                </PostMessage>

                {/* Button to add karmaHelper to Post */}
                <PrettyButton>Help {data.postAuthor}</PrettyButton>

            </PostBody>
        </PostContainer>

        {/* Checks to see if someone has been added to karmaHelpers and displays the helpers with an in progress link else it shows the stats of the post including difficulty, duration, coins */}

        { data.karmaHelpers ? 
        <PostFooter>
            <button>In Progress</button>
            <p>with {data.karmaHelpers[0].helperUsername}</p>
            <div>
            <img src='./assets/images/karma_coin.png' alt='coin' height={22} />
            {data.postValue}
            </div>
        </PostFooter>
        : 
        <PostFooter>
            <p>Estimated Duration: { data.duration === 1 ? '1 Hour or less' : data.duration === 2 ? 'About 2 Hours' : data.duration === 3 ? '3 Hours' : '4 Hours or more'}</p>
            <p>{ data.difficulty === 'Easy' ? 'Easy-peasy' : data.difficulty === 'Medium' ? 'Medium-shmedium' :  'Quite difficult' }</p>
            <div>
            <img src='./assets/images/karma_coin.png' alt='coin' height={22} />
            {data.postValue}
            </div>
        </PostFooter>
        }   

        </PostOutterContainer>
    )
}