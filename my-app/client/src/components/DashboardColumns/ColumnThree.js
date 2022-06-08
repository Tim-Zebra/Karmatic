import React from 'react'
import { UserContainer, UserContainerBorder, UserContainerBorderThick } from '../Box/Box.styled'
import RecentKarma from '../RecentKarma/RecentKarma'

export default function ColumnThree(){
    return(
        <>
            Recent Karma
            <UserContainer>
                <UserContainerBorder>
                    <UserContainerBorderThick>
                    <RecentKarma />
                    <RecentKarma />
                    </UserContainerBorderThick>
                </UserContainerBorder>
            </UserContainer>
        </>
    )
}