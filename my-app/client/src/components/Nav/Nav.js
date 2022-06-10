import React from 'react';
import { StyledNavImage, StyledNavContainer, StyledNavEnd } from './Nav.styled';
import NavTabs from './NavTabs';
import auth from '../../utils/auth'
export default function Nav({ currentPage, handlePageChange }) {
    return (
        <StyledNavContainer>
            <StyledNavImage src='./assets/images/logo_karmatic.png' alt='karmatic logo' />

            {currentPage === 'Profile' ?

                <StyledNavEnd>
                    <a href='#dashboard' onClick={() => handlePageChange('Dashboard')}>Dashboard</a>
                    <a href='#logout' onClick={auth.logout}>Logout</a>
                    <StyledNavImage src='./assets/images/k_logo.png' alt='karmatic square logo' />
                </StyledNavEnd>

                : currentPage === 'Dashboard' ?

                    <StyledNavEnd>
                        <a href='#profile' onClick={() => handlePageChange('Profile')}>Profile</a>
                        <StyledNavImage src='./assets/images/k_logo.png' alt='karmatic square logo' />
                    </StyledNavEnd>

                    :

                    <StyledNavEnd>
                        <StyledNavImage src='./assets/images/k_logo.png' alt='karmatic square logo' />
                    </StyledNavEnd>

            }

        </StyledNavContainer>
    )
}