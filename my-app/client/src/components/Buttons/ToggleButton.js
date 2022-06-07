import React from 'react'
import { PrettyButton } from './PrettyButton.styled'

export default function toggleButton({ toggle, textContent }) {
    
  return (
      <PrettyButton onClick={() => toggle()}>
        {textContent}
      </PrettyButton>
  )
}