import React from 'react'
import ColumnOne from './ColumnOne'
import { DashboardContainer, Column } from './Dashboard.styled'


export default function Dashboard() {
    return (
        <DashboardContainer>
            <Column>
            <ColumnOne />
            </Column>
        </DashboardContainer>
    )
}