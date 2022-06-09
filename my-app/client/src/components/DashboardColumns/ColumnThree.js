import React from 'react'
import RecentKarma from '../RecentKarma/RecentKarma'
import { ColumnContainer } from './ColumnThree.styled'

// Imports Authorization
import Auth from '../../utils/auth';

// Allows use for both queries and mutations from our utils folder
import { useMutation, useQuery } from '@apollo/client';

// Gets Queries
// Gets the Karma Post
import { GET_ME } from '../../utils/queries';
import { css } from 'styled-components';

export default function ColumnThree(){
    // Queries recent Karma posts
    // Filters by date created determining if data created it outside scope of 'recent'
    const { loading, data } = useQuery(GET_ME);

    const karmaPosts = data?.me.karmaPosts || [];

    if(!karmaPosts) {
    return null;
    }

    // Filters Karma posts from the current date, up to 1 hour from the current date.
    const recentKarmaPosts = karmaPosts.filter((post) => post.createdAt < Date.now);

    // Displays differently during loading
    if (loading) {
        return <h2>LOADING...</h2>;
    }

    console.log('\n\nPASSED DATA KARMAPOSTS:: \n\n', recentKarmaPosts);

    return(
        <ColumnContainer>
            <h3>Recent Karma</h3>

            {recentKarmaPosts.map((recentPost) => 
            <RecentKarma data={recentPost} />
            )}
                    
        </ColumnContainer>
    )
}