import React from 'react'
import RecentKarma from '../RecentKarma/RecentKarma'
import { ColumnContainer } from './ColumnThree.styled'

export default function ColumnThree(){
    return(
        <ColumnContainer>
            <h3>Recent Karma</h3>
            
                    <RecentKarma />
                    <RecentKarma />
        
       
        </ColumnContainer>
    )
}