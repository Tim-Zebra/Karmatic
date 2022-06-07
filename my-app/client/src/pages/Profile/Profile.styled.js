import styled from 'styled-components'


export const ProfileContainer = styled.div`
    width: 80%;
    height: 90%;
    background-color: white;
    background-color: ${({ theme }) => theme.colors.lightteal};
    @media only screen and (min-width: 992px) {
        flex-direction: row;
    }
`