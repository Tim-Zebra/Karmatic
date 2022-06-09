import React from 'react'
import ColumnOne from '../../components/DashboardColumns/ColumnOne'
import ColumnTwo from '../../components/DashboardColumns/ColumnTwo'
import ColumnThree from '../../components/DashboardColumns/ColumnThree'

import { DashboardContainer, Column } from './Dashboard.styled'


export default function Dashboard({ handlePageChange }) {
    return (
        <DashboardContainer>

            <Column>
            <ColumnOne handlePageChange={handlePageChange} />
            </Column>

            <Column>
            <ColumnTwo />
            </Column>

            <Column>
            <ColumnThree />
            </Column>
            
        </DashboardContainer>
    )
}