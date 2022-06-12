import React from "react";
import EditPostForm from '../Forms/EditPostForm'
import { ModalBackground, ModalCloseButton, ModalContainer } from './Modal.styled';

export default function CreatePostModal({setIsOpen, karmaPostData, setPostsArray, allPosts}){
 
    return (
        <ModalBackground>
            <ModalContainer>
                <div>
                    <p>Edit Post</p>
                    <ModalCloseButton onClick={() => setIsOpen(false)}>
                        <img src="./assets/images/cancel.png" alt="cancel x" />
                    </ModalCloseButton>
                </div>
            <EditPostForm karmaPostData={karmaPostData} setPostsArray={setPostsArray} allPosts={allPosts}/>
            </ModalContainer>
        </ModalBackground>
    )
}