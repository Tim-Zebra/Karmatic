import React from 'react'
import ColumnOne from '../../components/DashboardColumns/ColumnOne'
import ColumnTwo from '../../components/DashboardColumns/ColumnTwo'

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
        </DashboardContainer>
    )
}