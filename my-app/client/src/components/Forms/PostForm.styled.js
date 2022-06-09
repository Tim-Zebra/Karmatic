import styled from 'styled-components'

export const PostFormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const PostTitleContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    align-items: center;
    width: 96%;

    input {
        width: 100%;
        font-family: ${({ theme }) => theme.fonts.otherfont};
        font-size: 16px;
        border: none;
    }
`

export const PostTextArea = styled.textarea`
    margin: 1rem;
    width: 96%;
    height: 5rem;
    font-family: ${({ theme }) => theme.fonts.otherfont};
    font-size: 16px;
    border: none;

    &:active {
        border: none
    }
`

export const PostFormOptions = styled.div`
    width: 96%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 1rem;
    
    @media only screen and (min-width: 992px) {
        flex-direction: column;
    }
    @media only screen and (min-width: 1212px) {
        flex-direction: row;
    }

    label {
    font-family: ${({ theme }) => theme.fonts.otherfont };
    margin-right: 1rem;
    }
`