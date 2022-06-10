import styled from 'styled-components'

export const Button = styled.button`
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

export const CreatePostButton = styled(Button)`
    border: solid 2px ${({ theme }) => theme.colors.darkgrey};
    border-radius:30px;
    padding: .5rem;
    font-size: 16px;
    height: fit-content;

    &:hover {
        color: ${({ theme }) => theme.colors.darkteal};
        border: solid 2px ${({ theme }) => theme.colors.darkteal};
    }
`

export const CreatePostButtonProfile = styled(CreatePostButton)`
    height: fit-content;
    margin-right: 1rem;
    background-color: ${({ theme }) => theme.colors.lightgrey};
`
