import React, { useContext, useState } from 'react'
import { PostOutterContainer, PostContainer, PostBody, ImageContainer, PostHeader, PostMessage, PostBottom, PostFooter, EditButton, PostProfileImage } from './Post.styled'
import { PrettyButton } from '../Buttons/PrettyButton.styled'

import EditPostModal from '../Modals/EditPostModal'

// Imports Authorization
import Auth from '../../utils/auth';

// Imports mutations and queries
import { useQuery, useMutation } from '@apollo/client';
// Gets Queries
import { GET_ME } from '../../utils/queries';
// Gets Mutations
import { ADD_HELPER } from '../../utils/mutations'

export default function Post({karmaPostData , refreshCard}) {
    // Determines if the Modal for edit post should open
    const [isOpen, setIsOpen] = useState(false);

    // Sets Mutation function
    const [addMeAsHelper, { error }] = useMutation(ADD_HELPER);
    // const [helpers, setHelpers] = useState([]);
    const [helpersArray, setHelpersArray] = useState(karmaPostData.karmaHelpers.map((karmaHelper) => karmaHelper.helperUsername));
    // Querys username and karma
    // Sets hooks for data loading
    const { loading, data } = useQuery(GET_ME);

    const userData = data?.me || {};

    // Returns null if userdata is not present
    if (!userData) {
        return null;
    }

    // Displays differently during loading
    if (loading) {
        return <h2>LOADING...</h2>;
    }
    
    console.log('This happened', helpersArray);

    // Renders Karma Helpers
    const renderKarmaHelpers = () => {
        // Finds length of Karma
        if(helpersArray.length === 0) {
            return(
                <p>
                    {'No one wants to help :('}
                </p>
            )
        }
        return(
            <p>with:
                {
                    helpersArray.map((karmaHelper, index) => {
                        // Displays names with commas, UNLESS it is the last element in the array which renders without a comma at the end
                        if(index !== helpersArray-1) {
                            return (` ${helpersArray[index]},`);
                        }
                        else {
                            return (` ${helpersArray[index]}`);
                        }
                    })
                }
            </p>
        )
    };

    // Adds logged in user to karmapost as helper
    const addHelperToPost = async (karmaPostId) => {
        // Checks login status
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }
        refreshCard();
        // Adds User to post and adds post to User's karmaHelping array
        try {
            await addMeAsHelper({
                variables: {karmaPostId: karmaPostId }
            });

          } catch (err) {
            console.error(err);
          }
    }

    return (
        <PostOutterContainer>
            <PostContainer>
                <ImageContainer>
                    <PostProfileImage src='./assets/images/user.png' alt='profile pic' />
                    <EditButton onClick={() => setIsOpen(true)}>edit</EditButton>
                    {isOpen && <EditPostModal setIsOpen={setIsOpen} />}
                </ImageContainer>
                <PostBody>

                    <PostHeader>
                        <h3>{karmaPostData.postAuthor}</h3>
                        <p>{karmaPostData.createdAt}</p>
                    </PostHeader>
                    <PostMessage>
                        <p>{karmaPostData.postTitle}</p>
                        {karmaPostData.postDescription}
                    </PostMessage>

                {/* Button to add karmaHelper to Post */}
                <PostBottom>
                <p>{karmaPostData.address}</p>
                    <PrettyButton
                    disabled={karmaPostData.karmaHelpers?.some((author) => author.helperUsername === userData.username)}
                    onClick={() => addHelperToPost(karmaPostData._id)}>
                        {karmaPostData.karmaHelpers?.some((author) => author.helperUsername === userData.username)
                        ? 'Already helping!'
                        : `Help ${karmaPostData.postAuthor}`}
                    </PrettyButton>
                </PostBottom>

                </PostBody>
            </PostContainer>

            {/* Checks to see if someone has been added to karmaHelpers and displays the helpers with an in progress link else it shows the stats of the post including difficulty, duration, coins */}

            {karmaPostData.karmaHelpers ?
                <PostFooter>
                    <button>In Progress</button>
                    {renderKarmaHelpers()}
                    <div>
                        <img src='./assets/images/karma_coin.png' alt='coin' height={22} />
                        {karmaPostData.postValue}
                    </div>
                </PostFooter>
                :
                <PostFooter>
                    <p>Estimated Duration: {karmaPostData.duration === 1 ? '1 Hour or less' : karmaPostData.duration === 2 ? 'About 2 Hours' : karmaPostData.duration === 3 ? '3 Hours' : '4 Hours or more'}</p>
                    <p>{karmaPostData.difficulty === 'Easy' ? 'Easy-peasy' : karmaPostData.difficulty === 'Medium' ? 'Medium-shmedium' : 'Quite difficult'}</p>
                    <div>
                        <img src='./assets/images/karma_coin.png' alt='coin' height={22} />
                        {karmaPostData.postValue}
                    </div>
                </PostFooter>
            }

        </PostOutterContainer>
    )
}