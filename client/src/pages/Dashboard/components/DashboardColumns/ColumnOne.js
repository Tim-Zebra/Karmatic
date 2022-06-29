import React from 'react'
import { ColumnContainer, GreetingContainer, UserContainer, UserContainerHeader, StyledCoin, CurrentKarmaCoinsContainer } from './ColumnOne.styled'
import StatusBanner from '../../../../GlobalComponents/StatusBanner/StatusBanner'

// Imports Authorization
import Auth from '../../../../utils/auth';
// Allows use for both queries and mutations from our utils folder
import { useQuery } from '@apollo/client';

// Gets Queries
import { GET_ME } from '../../../../utils/queries';

export default function ColumnOne({ handlePageChange}) {
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
            <UserContainer>
                <GreetingContainer>
                    Hey, {userData.username}!
                </GreetingContainer>

                <hr />
            
                {/* <UserContainerHeader>
                    <h2>Current Karma</h2>
                </UserContainerHeader> */}
                {/* im just proud of the karmabar and dont want to delete :( */}
                {/* <KarmaBar Karma={`75`}></KarmaBar> */}
                <CurrentKarmaCoinsContainer>
                    <StyledCoin src='./assets/images/karma_coin.png' alt='karma coin' /> 
                    <h3>{userData.karma}</h3>
                </CurrentKarmaCoinsContainer>
                <UserContainerHeader>
                    <h2>Status</h2>
                </UserContainerHeader>

                <StatusBanner data={userData} />

                <p onClick={() => handlePageChange('Profile')}>
                    View Your Profile
                </p>
            </UserContainer>
        </ColumnContainer>
    )
}