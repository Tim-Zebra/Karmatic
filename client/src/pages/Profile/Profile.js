import React from 'react'
import { ProfileContainer, ColumnOne, ColumnTwo } from './Profile.styled'
import ProfileColumnOne from './components/ProfileColumns/ColumnOne/ProfileColumnOne'
import UserInfo from './components/ProfileColumns/ColumnTwo/UserInfo'
import UserActivity from './components/ProfileColumns/ColumnTwo/UserActivity'
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

            <ColumnTwo>
                <UserInfo userData={userData} />
                <h3>Recent Activity</h3>
                <UserActivity userData={userData}/>
            </ColumnTwo>

            <ColumnOne>
                <ProfileColumnOne />
            </ColumnOne>

        </ProfileContainer>
    )
}