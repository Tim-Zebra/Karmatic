import React from 'react'


import { ProfileContainer, ColumnOne, ColumnTwo } from './Profile.styled'
import ProfileColumnOne from '../../components/ProfileColumns/ColumnOne/ProfileColumnOne'
import ActivityBox from '../../components/ProfileColumns/ColumnTwo/ActivityBox'
import UserBox from '../../components/ProfileColumns/ColumnTwo/UserBox'

export default function Profile() {

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