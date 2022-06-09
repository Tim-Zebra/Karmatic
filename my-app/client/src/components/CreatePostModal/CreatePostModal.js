import React from "react";
import PostForm from '../Forms/PostForm'
import { ModalBackground, ModalContainer } from "./CreatePostModal.styled";

export default function CreatePostModal({setIsOpen}){
 
    return (
        <ModalBackground>
            <ModalContainer>
                <div>
                    <p>Post</p>
                    <button onClick={() => setIsOpen(false)}>X</button>
                </div>
            <PostForm />
            </ModalContainer>
        </ModalBackground>
    )
}