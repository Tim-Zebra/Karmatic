import React from 'react'
import ColumnOne from '../../components/DashboardColumns/ColumnOne'
import ColumnTwo from '../../components/DashboardColumns/ColumnTwo'
import ColumnThree from '../../components/DashboardColumns/ColumnThree'

import { DashboardContainer, Column } from './Dashboard.styled'
import { useQuery } from '@apollo/client';
import { GET_USERS_KARMA, GET_ALL_KARMAPOSTS } from '../../utils/queries';


export default function Dashboard({ handlePageChange }) {
    const {data, loading } = useQuery(GET_USERS_KARMA);

    const karmaPosts = useQuery(GET_ALL_KARMAPOSTS);

    if (!data) {
        return null;
    }
    // Displays differently during loading
    if (loading) {
        return <h2>LOADING...</h2>
    }

    if (!karmaPosts.data) {
        return null;
    }

    // Displays differently during loading
    if (karmaPosts.loading) {
        return <h2>LOADING...</h2>;
    }

    return (
        
        <DashboardContainer>

            <Column>
            <ColumnOne handlePageChange={handlePageChange} />
            </Column>

            <Column>
            <ColumnTwo usersKarma={data} karmaPosts={karmaPosts.data.allKarmaPosts}/>
            </Column>

            <Column>
            <ColumnThree />
            </Column>
            
        </DashboardContainer>
    )
}