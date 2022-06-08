import React from 'react'
import ColumnOne from '../../components/DashboardColumns/ColumnOne'
import ColumnTwo from '../../components/DashboardColumns/ColumnTwo'
import ColumnThree from '../../components/DashboardColumns/ColumnThree'

import { DashboardContainer, Column } from './Dashboard.styled'


export default function Dashboard() {
    return (
        <DashboardContainer>

            <Column>
            <ColumnOne />
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