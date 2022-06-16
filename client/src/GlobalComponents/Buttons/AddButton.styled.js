import styled from 'styled-components'

export const Button = styled.button`
    color: ${({ theme }) => theme.colors.darkgrey};
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 20px;
    text-decoration: none;

    &:hover {
        color: ${({ theme }) => theme.colors.darkteal};
    }
`

export const CreatePostButton = styled(Button)`
    border-radius:10px;
    padding: .75rem;
    font-size: 16px;
    height: fit-content;
    width: 50%;
    background-color: ${({ theme }) => theme.colors.teal};
    display: flex;
    justify-content: center;
    margin-top: 1rem;

    &:hover {
        color: ${({ theme }) => theme.colors.lightgrey};
        background-color: ${({ theme }) => theme.colors.darkteal};
    }
    @media only screen and (min-width: 992px) {
        margin-top: 0;
    }
`

export const CreatePostButtonProfile = styled(CreatePostButton)`
    height: fit-content;
    margin-right: 1rem;
    background-color: ${({ theme }) => theme.colors.lightgrey};
`
