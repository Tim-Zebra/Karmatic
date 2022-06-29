import React from 'react';
import { StyledNavImage, StyledNavContainer, StyledNavEnd, DisappearingNavImage } from './Nav.styled';
import { PrettyButton } from '../Buttons/PrettyButton.styled';
import auth from '../../utils/auth'


export default function Nav({ currentPage, handlePageChange }) {
    return (
        <StyledNavContainer>
            <DisappearingNavImage onClick={() => handlePageChange('Home')} src='./assets/images/logo_karmatic.png' alt='karmatic logo' />

            {currentPage === 'Profile' ?

                <StyledNavEnd>
                    <PrettyButton href='#logout' onClick={auth.logout}>Logout</PrettyButton>
                    <PrettyButton href='#dashboard' onClick={() => handlePageChange('Dashboard')}>Dashboard</PrettyButton>
                    <StyledNavImage src='./assets/images/k_logo.png' alt='karmatic square logo' onClick={() => handlePageChange('Home')} />
                </StyledNavEnd>

                : currentPage === 'Dashboard' ?

                    <StyledNavEnd>
                        <PrettyButton href='#profile' onClick={() => handlePageChange('Profile')}>Profile</PrettyButton>
                        <StyledNavImage src='./assets/images/k_logo.png' alt='karmatic square logo' onClick={() => handlePageChange('Home')} />
                    </StyledNavEnd>

                    : currentPage === 'Login' ?

                    <StyledNavEnd>
                        <PrettyButton onClick={() => handlePageChange('SignUp')}>Sign Up</PrettyButton>
                        <StyledNavImage onClick={() => handlePageChange('Home')} src='./assets/images/k_logo.png' alt='karmatic square logo' />
                    </StyledNavEnd>

                    : currentPage === 'SignUp' ?

                    <StyledNavEnd>
                        <PrettyButton onClick={() => handlePageChange('Login')}>Login</PrettyButton>
                        <StyledNavImage onClick={() => handlePageChange('Home')} src='./assets/images/k_logo.png' alt='karmatic square logo' />
                    </StyledNavEnd>

                    :

                    <StyledNavEnd>
                        <PrettyButton onClick={() => handlePageChange('Login')}>Login</PrettyButton>
                        <PrettyButton onClick={() => handlePageChange('SignUp')}>Sign Up</PrettyButton>
                        <StyledNavImage src='./assets/images/k_logo.png' alt='karmatic square logo' />
                    </StyledNavEnd>

            }

        </StyledNavContainer>
    )
}