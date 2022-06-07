import React from 'react'
import { DashboardContainer, Column, GreetingContainer } from './Dashboard.styled'
import { UserContainer, UserContainerBorder, UserContainerBorderThick } from '../../components/Forms/LoginForm.styled'
import { PrettyButton } from '../../components/Buttons/PrettyButton.styled'

export default function Dashboard() {
    return (
        <DashboardContainer>
            <Column>
                <GreetingContainer>
                    Hey, Bob!
                </GreetingContainer>
                <UserContainer>
                    <UserContainerBorder>
                        <UserContainerBorderThick>
                            <div>
                                Current Karma
                            </div>
                        </UserContainerBorderThick>
                    </UserContainerBorder>
                </UserContainer>
            </Column>
        </DashboardContainer>
    )
}