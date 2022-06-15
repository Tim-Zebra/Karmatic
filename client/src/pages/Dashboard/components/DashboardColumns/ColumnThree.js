import React from 'react'
import RecentKarmaReceived from '../RecentKarma/RecentKarmaReceived'
import RecentKarmaHelping from '../RecentKarma/RecentKarmaHelping'
// CSS components
import { ColumnContainer } from './ColumnThree.styled'

// Imports Authorization

// Allows use for both queries and mutations from our utils folder
import { useQuery } from '@apollo/client';

// Gets Queries
// Gets the Karma Post
import { GET_ME } from '../../../../utils/queries';

// Imports util functions
const unDateFormatToUnix = require('../../../../utils/unDateFormatToUnix');

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

    // Gets array of all the karmapost where ME is a helper
    const karmaHelping = meData?.karmaHelping;

    // hours variable sets how far in the past the dates will be filtered.
    const hours = 72;
    const pastDate = Date.now() - (1000 * 60 * 60 * hours);
    // Accounts for user time zone, which needs to be accounted for from the dateFormat Function
    const timeZoneOffSet = new Date(Date.now()).getTimezoneOffset()/60;

    // Filters a new array based on recent karma received and recent karmaPosts helping
    const recentKarmaArray = karmaHelping.filter((post) => unDateFormatToUnix(post.createdAt, timeZoneOffSet) > pastDate );

    const recentKarmaReceivedArray = recentKarmaArray.filter((post) => post.complete === true);
    const recentKarmaHelpingArray = recentKarmaArray.filter((post) => post.complete === false);

    return (

        <ColumnContainer>
            {/* Keys are generated with a string plus the index */}
            {/* Recent karma received after the postAuthor Completed the post */}
            <h3>Recent Karma Received:</h3>
            {recentKarmaReceivedArray.length === 0 &&
                <div>
                    No Karma Received Recently {':('}
                </div>}
            {recentKarmaReceivedArray.length > 0 &&
                recentKarmaReceivedArray.map((recentPost, index) =>
                    <RecentKarmaReceived karmaPostData={recentPost} key={`karmareceived${index}`} />
                )
            }
            <h3>Recent Karma Helping:</h3>
            {recentKarmaHelpingArray.length === 0 &&
                <div>
                    Current joined Karma Posts will appear here.
                </div>
            }

            {recentKarmaHelpingArray.length > 0 &&
                recentKarmaHelpingArray.map((recentPost, index) =>
                    <RecentKarmaHelping karmaPostData={recentPost} key={`karmahelping${index}`} />
                )
            }

        </ColumnContainer>
    )
}