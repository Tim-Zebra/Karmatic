import React from 'react'
import { ColumnContainer, GreetingContainer, UserContainerHeader, StyledCoin, CurrentKarmaCoinsContainer } from './ColumnOne.styled'
import StatusBanner from '../StatusBanner/StatusBanner'
import { UserContainer, UserContainerBorder, UserContainerBorderThick } from '../Box/Box.styled'

// Imports Authorization
import Auth from '../../utils/auth';
// Allows use for both queries and mutations from our utils folder
import { useQuery } from '@apollo/client';

// Gets Queries
import { GET_ME } from '../../utils/queries';

export default function ColumnOne({ handlePageChange }) {
    // Querys username and karma
    // Sets hooks for data loading
    const { loading, data } = useQuery(GET_ME);

    const userData = data?.me || {};

    // Returns null if userdata is not present
    if (!userData) {
        return null;
    }

    // Displays differently during loading
    if (loading) {
        return <h2>LOADING...</h2>;
    }
    
    // If token is not matched in DB, and DB is not querying, then assumed token is expired/no longer valid in DB and destroys token.
    if (!loading && data?.me === null) {
        Auth.logout();
    }
    return (
        <ColumnContainer>
            <GreetingContainer>
                Hey, {userData.username}!
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
                            {userData.karma} Karma Coins
                        </CurrentKarmaCoinsContainer>
                        <UserContainerHeader>
                            Overall Status:
                        </UserContainerHeader>

                        <StatusBanner data={userData} />

                        <a href='#profile' onClick={() => handlePageChange('Profile')}>
                            View Your Profile
                        </a>
                    </UserContainerBorderThick>
                </UserContainerBorder>
            </UserContainer>
        </ColumnContainer>
    )
}