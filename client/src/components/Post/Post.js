<<<<<<< HEAD
import React, { useContext, useState } from 'react'
import { PostOutterContainer, PostContainer, PostBody, SidebarContainer, PostAuthorHeader, PostHeader, PostMessage, PostBottom, PostFooter, EditButton, PostProfileImage } from './Post.styled'
=======
import React, { useState } from 'react'
import { PostOutterContainer, PostContainer, PostBody, ImageContainer, PostHeader, PostMessage, PostBottom, PostFooter, EditButton, PostProfileImage } from './Post.styled'
>>>>>>> main
import { PrettyButton } from '../Buttons/PrettyButton.styled'
import EditPostModal from '../Modals/EditPostModal'

// Imports Authorization
import Auth from '../../utils/auth';

// Imports mutations and queries
import { useQuery, useMutation } from '@apollo/client';
// Gets Queries
import { GET_ME } from '../../utils/queries';
// Gets Mutations
import { ADD_HELPER, KARMAPOST_COMPLETE, CHANGE_KARMA, DELETE_POST, REMOVE_HELPER } from '../../utils/mutations'
export default function Post({ karmaPostData, usersKarma, setPostsArray, allPosts }) {
    // populatePostKarma finds the amount of karma for the post author and returns it
    const populatePostKarma = (karmaPostData, usersKarma) => {
        let postAuthorKarma = 0;
        for (let i = 0; i < usersKarma.users.length; i++) {
            if (karmaPostData.postAuthor === usersKarma.users[i].username) {
                postAuthorKarma = usersKarma.users[i].karma
            }
        }
        return postAuthorKarma;
    };

    // Uses populatePostKarma to declare a variable that can be used by the component to display the karma for the post author
    let postAuthorKarma = populatePostKarma(karmaPostData, usersKarma);
    JSON.stringify(postAuthorKarma);
    // Determines if the Modal for edit post should open
    const [isOpen, setIsOpen] = useState(false);
    // Sets Mutation function
    const [addMeAsHelper] = useMutation(ADD_HELPER);
    const [removeMeAsHelper] = useMutation(REMOVE_HELPER);
    const [deletePost] = useMutation(DELETE_POST);
    const [completeKarmaPostMutation] = useMutation(KARMAPOST_COMPLETE);
    const [refundKarma] = useMutation(CHANGE_KARMA);
    const [karmaPayment] = useMutation(CHANGE_KARMA);

    // Creates helpers array that sets hooks for page refresh. Get's initial helpers from karmaPostData Prop.

    const [helpersArray, setHelpersArray] = useState(karmaPostData.karmaHelpers.map((karmaHelper) => karmaHelper.helperUsername));

    // Creates hook to mark off completion
    const [isComplete, setIsComplete] = useState(karmaPostData.complete);

    // Creates hook post delete
    const [isDeleted, setIsDeleted] = useState(false);

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
    // Renders Karma Helpers
    const renderKarmaHelpers = () => {
        // Finds length of Karma
        if (helpersArray.length === 0) {
            return (
                <p>
                    {'No helpers yet. Hang tight!'}
                </p>
            )
        }
        return (
            <p>
                {
                    helpersArray.map((karmaHelper, index) => {
                        // Displays names with commas, UNLESS it is the last element in the array which renders without a comma at the end
                        if (index !== helpersArray.length - 1) {
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
        // Adds User to post and adds post to User's karmaHelping array
        if (!helpersArray?.some((author) => author === userData.username)) {
            try {
                await addMeAsHelper({
                    variables: { karmaPostId: karmaPostId }
                });
                // Adds new helper to hooked Array to refresh page
                setHelpersArray([...helpersArray, userData.username])
            } catch (err) {
                console.error(err);
            }

        } else {
            // Removes self from Karma Post Helper
            try {
                await removeMeAsHelper({
                    variables: { karmaPostId: karmaPostId }
                });
                setHelpersArray([...helpersArray.filter(helpers => helpers !== userData.username)]);
            } catch (err) {
                console.error(err);
            }
        }
    }

    // Completes Karma Post...In-progress
    const completeKarmaPost = async (karmaPostId) => {
        let i = 0;
        try {
            await completeKarmaPostMutation({
                variables: { karmaPostId: karmaPostId }
            });
            for (i = 0; i < karmaPostData.karmaHelpers.length; i++) {
                let helperKarma = usersKarma.users[i].karma + karmaPostData.postValue;
                let helperUsername = karmaPostData.karmaHelpers[i].helperUsername
                await karmaPayment({
                    variables: {
                        username: helperUsername,
                        karma: helperKarma
                    }
                })
            }

            setIsComplete(true);
        } catch (err) {
            console.error(err);
        }
    }

    // Completes Karma Post...In-progress
    const deleteKarmaPost = async () => {
        try {
            await deletePost({
                variables: { karmaPostId: karmaPostData._id }
            });
            const refundedUserKarma = userData.karma + karmaPostData.postValue;
            await refundKarma({
                variables: {
                    username: karmaPostData.postAuthor,
                    karma: refundedUserKarma,
                }
            })
            setIsDeleted(true);
        } catch (err) {
            console.error(err);
        }
    };

    for (let j = 0; j <= allPosts.length; j++) {
        if (!allPosts[j].complete) {
            return (
                <PostOutterContainer>
            {!isDeleted &&
                <>
                    <PostContainer>
                        <SidebarContainer>
                            <PostProfileImage src='./assets/images/user.png' alt='profile pic' />
                            {userData.username === karmaPostData.postAuthor && !isComplete && helpersArray[0] ?
                                    // React requires parent child relationship. Must be wrapped in div or rendered as separate boolean statements
                                    <>
                                        <EditButton onClick={() => completeKarmaPost(karmaPostData._id)}>
                                            complete
                                        </EditButton>

                                        {/* // Delete Karma Post */}
                                        <EditButton onClick={() => deleteKarmaPost()}>
                                            delete
                                        </EditButton>
                                    
                                        <EditButton onClick={() => setIsOpen(true)}>
                                            edit
                                        </EditButton>
                            
                            {isOpen && <EditPostModal karmaPostData={karmaPostData} setIsOpen={setIsOpen} setPostsArray={setPostsArray} allPosts={allPosts}/>}
                                    </>
                            : userData.username === karmaPostData.postAuthor && !isComplete && !helpersArray[0] ?
                            // React requires parent child relationship. Must be wrapped in div or rendered as separate boolean statements
                            <>
                                {/* // Delete Karma Post */}
                                <EditButton onClick={() => deleteKarmaPost()}>
                                    delete
                                </EditButton>
                            
                                <EditButton onClick={() => setIsOpen(true)}>
                                    edit
                                </EditButton>
                    
                    {isOpen && <EditPostModal karmaPostData={karmaPostData} setIsOpen={setIsOpen} setPostsArray={setPostsArray} allPosts={allPosts}/>}
                            </>
                            : ''   
                        }
                            
                        </SidebarContainer>
                        <PostBody>

                            <PostHeader>
                                <PostAuthorHeader>
                                <h3>{karmaPostData.postAuthor}</h3>
                                <img src='./assets/images/karma_coin.png' alt='karma coin' />
                                <p>{postAuthorKarma}</p>
                                </PostAuthorHeader>
                                <p>{karmaPostData.createdAt}</p>
                            </PostHeader>
                            <PostMessage>
                                <p>{karmaPostData.postTitle}</p>
                                {karmaPostData.postDescription}
                            </PostMessage>

                            {/* Address and button line */}
                            <PostBottom>
                                <p>{karmaPostData.address}</p>
                                {/* Button to add karmaHelper if user is not the post author*/}
                                {userData.username !== karmaPostData.postAuthor && !isComplete &&
                                    <PrettyButton
                                    // disabled={helpersArray?.some((author) => author === userData.username)}
                                    onClick={() => addHelperToPost(karmaPostData._id)}>
                                    {helpersArray?.some((author) => author === userData.username)
                                        ? 'Already helping!'
                                        : `Help ${karmaPostData.postAuthor}`}
                                </PrettyButton>
                                }
                                {/* Buttons to allow Complete/Delete of Karma Post if post author is logged in user*/}
                                

                            </PostBottom>
                        </PostBody>
                    </PostContainer>

                    {/* Checks to see if someone has been added to karmaHelpers and displays the helpers with an in progress link else it shows the stats of the post including difficulty, duration, coins */}

                    { !isComplete && helpersArray[0] ?
                    <PostFooter>
                        <p>In progress with {renderKarmaHelpers()}</p>
                        
                        <p>{karmaPostData.duration === 1 ? '1 Hour or less' : karmaPostData.duration === 2 ? 'About 2 Hours' : karmaPostData.duration === 3 ? '3 Hours' : '4 Hours or more'}</p>
                        <p>{karmaPostData.difficulty === 'Easy' ? 'Easy-peasy' : karmaPostData.difficulty === 'Medium' ? 'Medium-shmedium' : 'Quite difficult'}</p>
                        <div>
                            <img src='./assets/images/karma_coin.png' alt='coin' height={22} />
                            {karmaPostData.postValue}
                        </div>
                    </PostFooter>
                    : isComplete ?
                        <PostFooter>
                            <button>
                                Completed
                            </button>
                            {renderKarmaHelpers()}
                            <div>
                                <img src='./assets/images/karma_coin.png' alt='coin' height={22} />
                                {karmaPostData.postValue}
                            </div>
                        </PostFooter>
                        : 
                        <PostFooter>
                            <p>{karmaPostData.duration === 1 ? '1 Hour or less' : karmaPostData.duration === 2 ? 'About 2 Hours' : karmaPostData.duration === 3 ? '3 Hours' : '4 Hours or more'}</p>
                            <p>{karmaPostData.difficulty === 'Easy' ? 'Easy-peasy' : karmaPostData.difficulty === 'Medium' ? 'Medium-shmedium' : 'Quite difficult'}</p>
                            <div>
                                <img src='./assets/images/karma_coin.png' alt='coin' height={22} />
                                {karmaPostData.postValue}
                            </div>
                        </PostFooter>
                    }
                </>
            }
            {/* Displays if post is deleted */}
            {isDeleted &&
                <>
                    <PostContainer>
                        <SidebarContainer>
                            <PostProfileImage src='./assets/images/user.png' alt='profile pic' />
                        </SidebarContainer>
                        <PostBody>
                            <PostHeader>
                                <h3>{karmaPostData.postAuthor}</h3>
                                <p>{karmaPostData.createdAt}</p>
                            </PostHeader>
                            <PostMessage>
                                <p>Post deleted Karma refunded!</p>
                            </PostMessage>
                            <PostBottom>
                                <p></p>
                            </PostBottom>
                        </PostBody>
                    </PostContainer>

                    <PostFooter>
                        <p></p>
                    </PostFooter>
                </>
            }
        </PostOutterContainer>


            )
        }
    }

}