import React from 'react';
import { StyledNavImage, StyledNavContainer, StyledNavEnd } from './Nav.styled';
import NavTabs from './NavTabs';

export default function Nav({ currentPage, handlePageChange }) {
    return (
        <StyledNavContainer>
            <StyledNavImage src='./assets/images/logo_karmatic.png' alt='karmatic logo' />
            
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>

            { currentPage === 'Profile' ? 

            <StyledNavEnd>
                <a href='#dashboard' onClick={() => handlePageChange('Dashboard')}>Dashboard</a>
                <a href='#logout'>Logout</a>
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