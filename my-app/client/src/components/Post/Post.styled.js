import styled from 'styled-components'

export const PostOutterContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem;
    
`

export const PostContainer = styled.div`
    height: fit-content;
    border-radius: 10px 10px 0 0;
    background-color: white;
    display: flex;
`
export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-width: 60px;
    
    img {
        height: 44px;
        border: solid 1px ${({ theme }) => theme.colors.darkgrey };
        margin-left: 1rem;
        padding: .5rem;
        border-radius: 10px;
        margin: 1rem;
    }

`
export const PostBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-end;
`
export const PostHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    p {
        font-size: 14px;
        margin-right: 1rem;
        font-family: ${({ theme }) => theme.fonts.otherfont };
    }

`

export const PostMessage = styled.div`
    height: fit-content;
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.otherfont };
    width: 95%;
    padding-right: 1em;
`

export const PostFooter = styled.div`
    background-color: ${({ theme }) => theme.colors.lightteal };
    padding: 1rem;
    border-radius: 0 0 10px 10px;
    font-size: 12px;

    button {
        background-color: ${({ theme }) => theme.colors.lightteal } ;
        border: none;
        cursor: pointer;
    }
    button:hover {
        text-decoration: underline;
    }
`