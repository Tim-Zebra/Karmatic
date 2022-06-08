import React from 'react'


import { ProfileContainer, ColumnOne, ColumnTwo } from './Profile.styled'
import ProfileColumnOne from '../../components/ProfileColumns/ProfileColumnOne'
import ProfileColumnTwo from '../../components/ProfileColumns/ProfileColumnTwo'


export default function Profile() {

    return (
        <ProfileContainer>
            <ColumnOne>
                <ProfileColumnOne />
            </ColumnOne>


            <ColumnTwo>
                <ProfileColumnTwo />
            </ColumnTwo>

        </ProfileContainer>
    )
}