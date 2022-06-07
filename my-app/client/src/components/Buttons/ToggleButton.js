import React from 'react'
import { StyledButton } from './Button.styled'

export default function ToggleButton() {
    return(
        <StyledButton>
          <button
          type="submit"
          >
            <img src='./assets/images/signup_btn.png' alt='signup button' />
          </button>
        </StyledButton>
    )
}