import React, { useState } from 'react'
import RecentKarmaReceived from '../RecentKarma/RecentKarmaReceived'
import RecentKarmaHelping from '../RecentKarma/RecentKarmaHelping'
// CSS components
import { ColumnContainer } from './ColumnThree.styled'
import { css } from 'styled-components';
import { PostFormOptions } from '../Forms/PostForm.styled'
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
    // set hooks
    const [recentHours, setRecentHours] = useState(4);
    const [pastDate, setPastDate] = useState(dateFormat(Date.now() - (1000 * 60 * 60 * recentHours)));

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

    // hours variable sets how far in the past the dates will be filtered.
    // const hours = 72;
    // const pastDate = dateFormat(Date.now() - (1000 * 60 * 60 * hours));
    // Filters Karma posts from the up to 4 hours in the past from the current date.
    const recentKarmaPostsArray = karmaPosts.filter((post) => post > pastDate);

    // Filters a new array based on recent karma received and recent karmaPosts helping
    const recentKarmaHelpingArray = karmaHelping.filter((post) => post > pastDate);
    const recentKarmaReceivedArray = recentKarmaHelpingArray.filter((post) => post.complete === true);

    const updatePastDate = (hours) => {
        dateFormat(Date.now() - (1000 * 60 * 60 * hours))
    }

    // Renders drop down so user can select how far back they want to view each set of posts.
    const rendersFormDropDown = () => {
        return(
            <PostFormOptions>
            <label>Difficulty:</label>
            <select
                name="hours"
                value={recentHours}
                onChange={(e) => {setRecentHours(e.target.value); updatePastDate(e.target.value)}}>
                <option value="1">From 1 hour ago</option>
                <option value="4">From 4 hours ago</option>
                <option value="8">From 8 hours ago</option>
                <option value="24">From 24 hours ago</option>
                <option value="48">From 48 hours ago</option>
                <option value="72">From 72 hours ago</option>
            </select>
            <hr />
        </PostFormOptions>
        )
    }

    
    return (
        <ColumnContainer>
        {/* Recent Karma Received */}
        {/* Keys are generated with a string plus the index */}
            <h3>Recent Karma Received:</h3> 
            {rendersFormDropDown()}
            {recentKarmaReceivedArray.map((recentPost, index) =>
                <RecentKarmaReceived karmaPostData={recentPost} key={`karmareceived${index}`}/>
            )}
            <h3>Recent Karma Helping:</h3>
            {recentKarmaHelpingArray.map((recentPost, index) =>
                <RecentKarmaHelping karmaPostData={recentPost} key={`karmahelping${index}`} />
            )}

        </ColumnContainer>
    )
}