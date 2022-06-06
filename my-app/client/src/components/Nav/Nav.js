import React from 'react'
import { StyledNavImage, StyledNavContainer, StyledNavEnd } from './Nav.styled'

export default function Nav() {
    return (
        <StyledNavContainer>
            <StyledNavImage src='./assets/images/logo_karmatic.png' alt='karmatic logo' />
            <StyledNavEnd>
                <a href='#logout'>Logout</a>
                <StyledNavImage src='./assets/images/k_logo.png' alt='karmatic square logo' />
            </StyledNavEnd>
        </StyledNavContainer>
    )
}