import React from 'react'
import { PrettyButton } from './PrettyButton.styled'

export default function toggleButton({ submit, textContent }) {
    return (
        <PrettyButton onClick={() => submit()}>
          {textContent}
        </PrettyButton>
    )
}