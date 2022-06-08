import React from 'react'


import { ProfileContainer, ColumnOne, ColumnTwo } from './Profile.styled'
import ProfileColumnOne from '../../components/ProfileColumns/ProfileColumnOne'
import ProfileColumnTwo from '../../components/ProfileColumns/ProfileColumnTwo'

import { useQuery } from '@apollo/client';
import { QUERY_USER } from "../../utils/queries"

export default function Profile() {
    const { data } = useQuery(QUERY_USER);
    const user = data?.users[0].username
    console.log(data)
    console.log(user)

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