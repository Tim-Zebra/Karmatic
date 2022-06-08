import styled from 'styled-components'

export const AddButton = styled.button`
    color: ${({ theme }) => theme.colors.darkgrey};
    background-color: ${({ theme }) => theme.colors.lightteal};
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 20px;
    margin-bottom: 1rem;
    text-decoration: none;

    &:hover {
        color: ${({ theme }) => theme.colors.darkteal};
    }
`

export const AddButtonWhite = styled.button`
    color: ${({ theme }) => theme.colors.darkgrey};
    background-color: white;
    border-radius:30px;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 20px;
    margin-bottom: 1rem;
    text-decoration: none;

    &:hover {
        color: ${({ theme }) => theme.colors.darkteal};
    }
`