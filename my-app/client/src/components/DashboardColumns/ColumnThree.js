import React from 'react'
import RecentKarma from '../RecentKarma/RecentKarma'
import { ColumnContainer } from './ColumnThree.styled'

// Imports Authorization
import Auth from '../../utils/auth';

// Allows use for both queries and mutations from our utils folder
import { useMutation, useQuery } from '@apollo/client';

// Gets Queries
// Gets the Karma Post
import { GET_LOCATIONS } from '../../utils/queries';

const data = [
{
    postAuthor: 'Mary',
    postValue: '100',
    karmaHelpers: [
        {
        helperUsername: 'Bob',
        }
    ]
},
{
    postAuthor: 'Bob',
    postValue: '200',
    karmaHelpers: [
        {
        helperUsername: 'Mary',
        }
    ]
}
]

export default function ColumnThree(){
    // Queries recent Karma posts
    // Filters by date created determining if data created it outside scope of 'recent'
    console.log('Column THREE happened');
    const { loadingKarmaPosts, dataKarmaPosts } = useQuery(GET_LOCATIONS);

    const karmaPosts = dataKarmaPosts?.karmaPosts || [];

    if(!karmaPosts) {
    return null;
    }

    console.log('KARMAPOST VALUES\n', karmaPosts);
    // Filters Karma posts from the current date, up to 2 days from the current date.
    const recentKarmaPosts = karmaPosts.filter((post) => post.date < Date.now - 2 hours);

    // Displays differently during loading
    if (loadingKarmaPosts) {
        return <h2>LOADING...</h2>;
    }

    console.log('\n\nPASSED DATA KARMAPOSTS:: \n\n', recentKarmaPosts);
    // Need 

    return(
        <ColumnContainer>
            <h3>Recent Karma</h3>

            {recentKarmaPosts.map((recentPost) => 
            <RecentKarma data={recentPost} />
            )}
                    
        </ColumnContainer>
    )
}