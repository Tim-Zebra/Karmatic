import styled from 'styled-components'

export const ColumnContainer = styled.div`
    margin-top: -1rem;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 10px;
`

export const FeedHeaderContainer = styled.div`
    width: 100%;
`

export const CreatePostContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.lightteal};
    border-radius: 10px;

`

export const PostTextArea = styled.textarea`
    margin: 2rem 0 1rem 0;
    width: 90%;
    height: 5rem;
    font-family: ${({ theme }) => theme.fonts.otherfont};
    font-size: 16px;
    border: none;

    &:active {
        border: none
    }
`
export const ActivityHeader = styled.div`
    color: ${({ theme  }) => theme.colors.darkgrey};

    font-family: ${({ theme }) => theme.fonts.otherfont};
    font-size: 32px;
    margin: 1.5rem 0 1.5rem 2rem;
`

export const FeedContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.teal };
    width: 99%;
    height: 100%;
    border-radius: 25px 25px 0 0;
`
