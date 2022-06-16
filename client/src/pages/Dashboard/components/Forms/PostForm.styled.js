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
    width: 100%;

    input {
        width: 100%;
        font-family: ${({ theme }) => theme.fonts.otherfont};
        font-size: 16px;
        border: none;
        margin: 0 1rem;
    }
`

export const PostTextArea = styled.textarea`
    margin: 1rem;
    width: 90%;
    height: 1rem;
    font-size: 16px;
    border: none;
    resize: none;
    background-color: ${({ theme }) => theme.colors.lightgrey};
    border-radius: 10px;
    padding: 1rem;

    &:focus {
      border: none;
      outline: none;
      box-shadow: 0px 0px 10px ${({ theme }) => theme.colors.teal};
    }
`

export const PostFormOptions = styled.div`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 1rem;

    select {
        border: none;
        border-radius:5px;
        padding: 0.25rem;
        font-family: ${({ theme }) => theme.fonts.otherfont};
        font-size: 12px;
        outline: none;
        height: 2rem;
    }
    label {
    font-family: ${({ theme }) => theme.fonts.otherfont };
    margin-right: 1rem;
    }
    
    @media only screen and (min-width: 992px) {
        flex-direction: column;
    }
    @media only screen and (min-width: 1212px) {
        flex-direction: row;
    }

    
`
export const DeleteButton = styled.div`
    font-family: ${({ theme }) => theme.fonts.otherfont };
    font-size: 16px;
    color: ${({ theme }) => theme.colors.darkgrey };

    &:hover {
        color: ${({ theme }) => theme.colors.darkpurple};
        cursor: pointer;
    }
`