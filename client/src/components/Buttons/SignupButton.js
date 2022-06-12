import React from 'react'
import { PrettyButton } from './PrettyButton.styled'

export default function SignUpButton({ toggle }) {
    return (
        <PrettyButton onClick={() => toggle()}>
            Signup
        </PrettyButton>
    )
}