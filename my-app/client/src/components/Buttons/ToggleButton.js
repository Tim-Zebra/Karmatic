import React from 'react'
import { PrettyButton } from './PrettyButton.styled'

export default function toggleButton({ toggle }) {
    return (
        <PrettyButton onClick={() => toggle()}>
            Signup
        </PrettyButton>
    )
}