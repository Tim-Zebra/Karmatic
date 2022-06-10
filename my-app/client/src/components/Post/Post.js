import React, { useState } from 'react'
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

export default function Post({data}) {
    console.log('DATA from previous', data);
    // Determines if the Modal for edit post should open
    const [isOpen, setIsOpen] = useState(false);
    const [addSelfAsHelper] = useMutation(ADD_HELPER);
    // Finds length of Karma
    let lengthOfKarmaHelpersArray = data.karmaHelpers.length;

    // Renders Karma Helpers
    const renderKarmaHelpers = () => {
        return(
            <p>with:
                {data.karmaHelpers.map((karmaHelper, index) => {
                    // Displays names with commas, UNLESS it is the last element in the array which renders without a comma at the end
                    if(index !== lengthOfKarmaHelpersArray-1) {
                        return (` ${karmaHelper.helperUsername},`);
                    }
                    else {
                        return (` ${karmaHelper.helperUsername}`);
                    }
                })}
            </p>
        )
    };

    // Adds logged in user to karmapost as helper
    const addHelperToPost = async (helperId) => {
        // Checks login status
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        // Adds User to post and adds post to User's karmaHelping array
        try {
            console.log('log BEFORE add helper', helperId);
            await addSelfAsHelper({
              variables: { 
                postId: {_id: helperId } 
              }
            });
            
            console.log('post TRY happened');
      
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
                        <h3>{data.postAuthor}</h3>
                        <p>{data.createdAt}</p>
                    </PostHeader>
                    <PostMessage>
                        <p>{data.postTitle}</p>
                        {data.postDescription}
                    </PostMessage>

                {/* Button to add karmaHelper to Post */}
                <PostBottom>
                <p>{data.address}</p>
                <PrettyButton onClick={() => addHelperToPost(data._id)}>Help {data.postAuthor}</PrettyButton>
                </PostBottom>

                </PostBody>
            </PostContainer>

            {/* Checks to see if someone has been added to karmaHelpers and displays the helpers with an in progress link else it shows the stats of the post including difficulty, duration, coins */}

            {data.karmaHelpers ?
                <PostFooter>
                    <button>In Progress</button>
                    {renderKarmaHelpers()}
                    <div>
                        <img src='./assets/images/karma_coin.png' alt='coin' height={22} />
                        {data.postValue}
                    </div>
                </PostFooter>
                :
                <PostFooter>
                    <p>Estimated Duration: {data.duration === 1 ? '1 Hour or less' : data.duration === 2 ? 'About 2 Hours' : data.duration === 3 ? '3 Hours' : '4 Hours or more'}</p>
                    <p>{data.difficulty === 'Easy' ? 'Easy-peasy' : data.difficulty === 'Medium' ? 'Medium-shmedium' : 'Quite difficult'}</p>
                    <div>
                        <img src='./assets/images/karma_coin.png' alt='coin' height={22} />
                        {data.postValue}
                    </div>
                </PostFooter>
            }

        </PostOutterContainer>
    )
}