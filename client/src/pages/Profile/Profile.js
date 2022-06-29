import React from 'react'
import { ProfileContainer, Column, NeighborhoodColumn, ProfileHero, ProfileInformation } from './Profile.styled'
import Neighborhood from './components/Neighborhood/Neighborhood'
import UserInfo from './components/UserActivityInfo/UserInfo'
import UserActivity from './components/UserActivityInfo/UserActivity'
import { useQuery } from '@apollo/client';
import { GET_ME} from '../../utils/queries';

export default function Profile() {
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


    return (
        <ProfileContainer>

            <ProfileHero>
                <UserInfo userData={userData} />
            </ProfileHero>

            <ProfileInformation>
            <NeighborhoodColumn>
                <h3>Neighborhoods</h3>
                <Neighborhood />
            </NeighborhoodColumn>

            <Column>
                <h3>Recent Activity</h3>
                <UserActivity userData={userData}/>
            </Column>
            </ProfileInformation>

        </ProfileContainer>
    )
}