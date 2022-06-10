import React from 'react'
import { ProfileContainer, ColumnOne, ColumnTwo } from './Profile.styled'
import ProfileColumnOne from '../../components/ProfileColumns/ColumnOne/ProfileColumnOne'
import UserActivity from '../../components/ProfileColumns/ColumnTwo/UserActivity'
import UserInfo from '../../components/ProfileColumns/ColumnTwo/UserInfo'


export default function Profile() {


    return (
        <ProfileContainer>

            <ColumnTwo>
                <UserInfo />
                <h3>Recent Activity</h3>
                <UserActivity />
            </ColumnTwo>

            <ColumnOne>
                <ProfileColumnOne />
            </ColumnOne>

        </ProfileContainer>
    )
}