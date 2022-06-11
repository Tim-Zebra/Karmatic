import React from "react";
import EditPostForm from '../Forms/EditPostForm'
import { ModalBackground, ModalCloseButton, ModalContainer } from './Modal.styled';

export default function CreatePostModal({setIsOpen, karmaPostData}){
 
    return (
        <ModalBackground>
            <ModalContainer>
                <div>
                    <p>Edit Post</p>
                    <ModalCloseButton onClick={() => setIsOpen(false)}>
                        <img src="./assets/images/cancel.png" alt="cancel x" />
                    </ModalCloseButton>
                </div>
            <EditPostForm karmaPostData={karmaPostData}/>
            </ModalContainer>
        </ModalBackground>
    )
}