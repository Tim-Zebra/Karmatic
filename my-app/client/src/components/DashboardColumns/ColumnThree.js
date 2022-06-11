import React, { useState } from 'react'
import RecentKarmaReceived from '../RecentKarma/RecentKarma'

// CSS components
import { ColumnContainer } from './ColumnThree.styled'
import { css } from 'styled-components';

// Imports Authorization
import Auth from '../../utils/auth';

// Allows use for both queries and mutations from our utils folder
import { useMutation, useQuery } from '@apollo/client';

// Gets Queries
// Gets the Karma Post
import { GET_ME } from '../../utils/queries';

const dateFormat = require('../../utils/dateFormat');

// Shows recent KarmaPost activity
export default function ColumnThree() {
    // Queries recent Karma posts
    // Filters by date created determining if data created it outside scope of 'recent'
    const { loading, data } = useQuery(GET_ME);

    const meData = data?.me || [];

    if (!meData) {
        return null;
    }

    // Displays differently during loading
    if (loading) {
        return <h2>LOADING...</h2>;
    }

    const karmaPosts = meData?.karmaPosts;
    const karmaHelping = meData?.karmaHelping;
    console.log('This happened', meData);
    console.log('This happened', karmaHelping);
    // hours variable sets how far in the past the dates will be filtered.
    const hours = 4;
    const pastDate = dateFormat(Date.now() - (1000 * 60 * 60 * hours));

    // Filters Karma posts from the up to 4 hours in the past from the current date.
    const recentKarmaPosts = karmaPosts.filter((post) => post.createdAt > pastDate);



    return (
        <ColumnContainer>
        {/* Recent Karma Received */}
            <h3>Recent Karma Received:</h3>
            {recentKarmaPosts.map((recentPost) =>
                <RecentKarmaReceived data={recentPost} />
            )}
            <h3>Recent Karma Received</h3>
            {recentKarmaPosts.map((recentPost) =>
            <RecentKarmaReceived data={recentPost} />
)}

        </ColumnContainer>
    )
}