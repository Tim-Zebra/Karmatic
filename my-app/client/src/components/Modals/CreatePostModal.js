import React from "react";
import PostForm from '../Forms/PostForm'
import { ModalBackground, ModalCloseButton, ModalContainer } from "./Modal.styled";

export default function CreatePostModal({ setIsOpen }) {

    return (
        <ModalBackground>
            <ModalContainer>
                <div>
                    <p>Post</p>
                    <ModalCloseButton onClick={() => setIsOpen(false)}>
                        <img src="./assets/images/cancel.png" alt="cancel x" />
                    </ModalCloseButton>
                </div>
                <PostForm />
            </ModalContainer>
        </ModalBackground>
    )
}