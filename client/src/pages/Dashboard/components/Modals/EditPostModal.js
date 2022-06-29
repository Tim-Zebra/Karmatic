import React from "react";
import EditPostForm from '../Forms/EditPostForm'
import { ModalBackground, ModalHeader, ModalCloseButton, ModalContainer } from '../../../../GlobalComponents/Modals/Modal.styled';
import { DeleteButton } from "../Forms/PostForm.styled";

export default function CreatePostModal({setIsOpen, karmaPostData, setPostsArray, allPosts, deleteKarmaPost}){
    


    return (
        <ModalBackground>
            <>
            <ModalContainer>
                <ModalHeader>
                    <p>Edit Post</p>
                    <ModalCloseButton onClick={() => setIsOpen(false)}>
                    <img src="./assets/images/cancel.png" alt="cancel x" />
                    </ModalCloseButton>
                </ModalHeader>
            <EditPostForm karmaPostData={karmaPostData} setPostsArray={setPostsArray} allPosts={allPosts} setIsOpen={setIsOpen}/>
            </ModalContainer>
            </>
        </ModalBackground>
    )
}