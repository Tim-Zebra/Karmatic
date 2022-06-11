import React, { useState } from 'react'
import RecentKarma from '../RecentKarma/RecentKarma'

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

    const karmaPosts = data?.me.karmaPosts || [];

    if (!karmaPosts) {
        return null;
    }

    // hours variable sets how far in the past the dates will be filtered.
    const hours = 1000;
    const pastDate = dateFormat(Date.now() - (1000 * 60 * 60 * hours));

    // Filters Karma posts from the up to 4 hours in the past from the current date.
    const recentKarmaPosts = karmaPosts.filter((post) => post.createdAt > pastDate);

    // Displays differently during loading
    if (loading) {
        return <h2>LOADING...</h2>;
    }

    return (
        <ColumnContainer>
            <h3>Recent Karma</h3>

            {recentKarmaPosts.map((recentPost) =>
                <RecentKarma data={recentPost} />
            )}

        </ColumnContainer>
    )
}