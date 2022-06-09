import React from 'react'
import { ColumnContainer, GreetingContainer, UserContainerHeader, StyledCoin, CurrentKarmaCoinsContainer } from './ColumnOne.styled'
import StatusBanner from '../StatusBanner/StatusBanner'
import { UserContainer, UserContainerBorder, UserContainerBorderThick } from '../Box/Box.styled'

// Imports Authorization
import Auth from '../../utils/auth';

// Allows use for both queries and mutations from our utils folder
import { useMutation, useQuery } from '@apollo/client';

// Gets Queries
// Gets the Karma Post
import { GET_ME } from '../../utils/queries';

const data1 = 
{
    username: 'Bob',
    karma: 2000,
}

export default function ColumnOne({handlePageChange}) {
    // Querys username and karma
    // Sets hooks for data loading
    console.log('Column ONE happened');
    const { loading, data } = useQuery(GET_ME);

    const userData = data?.me || {};

    if(!userData) {
        return null;
    }

    // Displays differently during loading
    if (loading) {
        return <h2>LOADING...</h2>;
    }

    console.log('\nUSERDATA:: \n\n', userData);
    return (
            <ColumnContainer>
                <GreetingContainer>
                    Hey, {data1.username}!
                </GreetingContainer>
                <UserContainer>
                    <UserContainerBorder>
                        <UserContainerBorderThick>
                            <UserContainerHeader>
                                Current Karma
                            </UserContainerHeader>
                            {/* im just proud of the karmabar and dont want to delete :( */}
                            {/* <KarmaBar Karma={`75`}></KarmaBar> */}
                            <CurrentKarmaCoinsContainer>
                            <StyledCoin src='./assets/images/karma_coin.png' alt='karma coin' />
                                {data1.karma} Karma Coins
                            </CurrentKarmaCoinsContainer>
                            <UserContainerHeader>
                                Overall Status:
                            </UserContainerHeader>

                            <StatusBanner data={data1} />

                            <a href='#profile' onClick={() => handlePageChange('Profile')}>
                                View Your Profile
                            </a>
                        </UserContainerBorderThick>
                    </UserContainerBorder>
                </UserContainer>
            </ColumnContainer>
    )
}