import React from 'react'
import { StyledButton } from './Button.styled'

export default function ToggleButton({toggle}) {
  // When this button is clicked. The toggle function activates in the parent, which should inverse the boolean
  return(
        <StyledButton>
          <button
          onClick={() => toggle()}
          type="submit"
          > TOGGLE ME

          </button>
        </StyledButton>
    )
}