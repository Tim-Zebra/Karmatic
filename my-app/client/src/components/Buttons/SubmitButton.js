import React from 'react'
import { PrettyButton } from './PrettyButton.styled'

export default function submitButton({ submit, textContent }) {
    return (
        <PrettyButton onClick={() => submit()}>
          {textContent}
        </PrettyButton>
    )
}