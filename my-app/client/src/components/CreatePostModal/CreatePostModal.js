import React from "react";
import PostForm from '../Forms/PostForm'
import { ModalBackground, ModalContainer } from "./CreatePostModal.styled";

export default function CreatePostModal({setIsOpen}){
 
    return (
        <ModalBackground onClick={() => setIsOpen(false)}>
            <ModalContainer>
                <div>
                    <p>Post</p>
                    <button onClick={() => setIsOpen(false)}><img src="./assets/images/cancel.png" alt="cancel x" /></button>
                </div>
            <PostForm />
            </ModalContainer>
        </ModalBackground>
    )
}