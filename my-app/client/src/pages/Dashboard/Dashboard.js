import React from 'react'
import ColumnOne from '../../components/DashboardColumns/ColumnOne'
import ColumnTwo from '../../components/DashboardColumns/ColumnTwo'
import ColumnThree from '../../components/DashboardColumns/ColumnThree'

import { DashboardContainer, Column } from './Dashboard.styled'
import { useQuery } from '@apollo/client';
import { GET_USERS_KARMA } from '../../utils/queries';


export default function Dashboard({ handlePageChange }) {
    const {data, loading } = useQuery(GET_USERS_KARMA);

    if (!data) {
        return null;
    }

    if (loading) {
        return <h2>LOADING...</h2>
    }
    return (
        
        <DashboardContainer>

            <Column>
            <ColumnOne handlePageChange={handlePageChange} />
            </Column>

            <Column>
            <ColumnTwo usersKarma={data}/>
            </Column>

            <Column>
            <ColumnThree />
            </Column>
            
        </DashboardContainer>
    )
}