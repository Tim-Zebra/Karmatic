import React from "react";
import ToggleForm from '../../../LoginSignup/components/Forms/ToggleForm'
import LoginForm from "../../../LoginSignup/components/Forms/LoginForm";
import { ModalBackground, ModalCloseButton, ModalContainer } from "../../../../GlobalComponents/Modals/Modal.styled";

export default function LoginModal({ setIsOpen }) {

    return (
        <ModalBackground>
            <ModalContainer>
                <div>
                    <ModalCloseButton onClick={() => setIsOpen(false)}>
                        <img src="./assets/images/cancel.png" alt="cancel x" />
                    </ModalCloseButton>
                    <ToggleForm />
                </div>
            </ModalContainer>
        </ModalBackground>
    )
}