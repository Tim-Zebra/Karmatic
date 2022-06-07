import styled from 'styled-components'

export const PrettyButton = styled.button`
    color: ${({ theme }) => theme.colors.darkteal };
    font-size: 20px;
    padding: 1rem;
    border: 2px solid ${({ theme }) => theme.colors.darkteal };
    border-radius: 25px;
    background: rgb(177,220,216);
    background: linear-gradient(82deg, rgba(177,220,216,1) 15%, rgba(194,171,171,1) 84%);
    cursor: pointer;

    &:hover {
        background: rgb(177,220,216);
        background: linear-gradient(262deg, rgba(177,220,216,1) 15%, rgba(194,171,171,1) 84%);  
    }
    &:active {
        box-shadow: 2px 2px ${({ theme }) => theme.colors.lightpurple}
    }
`