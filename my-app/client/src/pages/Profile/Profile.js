import React from 'react'
import { ProfileContainer, ColumnOne, ColumnTwo } from './Profile.styled'
import ProfileColumnOne from '../../components/ProfileColumns/ColumnOne/ProfileColumnOne'
import ActivityBox from '../../components/ProfileColumns/ColumnTwo/ActivityBox'
import UserBox from '../../components/ProfileColumns/ColumnTwo/UserBox'

import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_USER, GET_ME } from '../../utils/queries';
import Auth from '../../utils/auth';

export default function Profile() {
    const { username: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? GET_USER : GET_ME, {
        variables: { username: userParam },
    });

    const user = data?.me || data?.user || {};
    // navigate to personal profile page if username is yours
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        return <Navigate to="/me" />;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user?.username) {
        return (
            <h4>
                You need to be logged in to see this. Use the navigation links above to
                sign up or log in!
            </h4>
        );
    }

    return (
        <ProfileContainer>

            <ColumnOne>
                <ProfileColumnOne />
            </ColumnOne>


            <ColumnTwo>
                <UserBox />
                <ActivityBox />
            </ColumnTwo>

        </ProfileContainer>
    )
}