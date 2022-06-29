import React from 'react';
import { StyledFooter, Icons } from "./Footer.styled"


export default function Footer() {
    return (
        <StyledFooter>
            <Icons>
            <img src='./assets/images/instagram.png' alt='instagram icon' />
            <img src='./assets/images/twitter.png' alt='twitter icon' />
            </Icons>
            <p>
            &copy; Karmatic
            </p>
            

        </StyledFooter>
    );
}