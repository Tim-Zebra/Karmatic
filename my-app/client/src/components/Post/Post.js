import React, { useState } from 'react'
import { PostOutterContainer, PostContainer, PostBody, ImageContainer, PostHeader, PostMessage,  PostBottom, PostFooter, EditButton, PostProfileImage  } from './Post.styled'
import { PrettyButton } from '../Buttons/PrettyButton.styled'
import { useMutation, useQuery } from '@apollo/client';
import EditPostModal from '../Modals/EditPostModal'

import { GET_ME } from '../../';
export default function Post({data}) {
    // Determines if the Modal for edit post should open
    const [isOpen, setIsOpen] = useState(false);
    const [addSelfAsHelper] = useMutation(SAVE_BOOK);
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
    const addHelperToPost = () => {

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
                <PrettyButton onClick={() => addHelperToPost()}>Help {data.postAuthor}</PrettyButton>
                </PostBottom>

            </PostBody>
        </PostContainer>

        {/* Checks to see if someone has been added to karmaHelpers and displays the helpers with an in progress link else it shows the stats of the post including difficulty, duration, coins */}

        { data.karmaHelpers ? 
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
            <p>Estimated Duration: { data.duration === 1 ? '1 Hour or less' : data.duration === 2 ? 'About 2 Hours' : data.duration === 3 ? '3 Hours' : '4 Hours or more'}</p>
            <p>{ data.difficulty === 'Easy' ? 'Easy-peasy' : data.difficulty === 'Medium' ? 'Medium-shmedium' :  'Quite difficult' }</p>
            <div>
            <img src='./assets/images/karma_coin.png' alt='coin' height={22} />
            {data.postValue}
            </div>
        </PostFooter>
        }   

        </PostOutterContainer>
    )
}