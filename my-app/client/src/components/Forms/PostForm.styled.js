import styled from 'styled-components'

export const PostFormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const PostTextArea = styled.textarea`
    margin: 2rem 0 1rem 0;
    width: 90%;
    max-height: 5rem;
    font-family: ${({ theme }) => theme.fonts.otherfont};
    font-size: 16px;
    border: none;

    &:active {
        border: none
    }
`

export const PostFormOptions = styled.div`
    display: flex;
    justify-content: space-evenly;
`