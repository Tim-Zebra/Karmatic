import styled from 'styled-components'

export const ColumnContainer = styled.div`
    margin-top: -1rem;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
`

export const FeedHeaderContainer = styled.div`
    width: 100%;
`

export const CreatePostContainer = styled.div`
    display: flex;
    justify-content: end;
    margin-top: 1rem;
    margin-right: 1rem;

    button {
        color: ${({ theme  }) => theme.colors.darkgrey};
        background-color: white;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        font-size: 20px;
    }
`
export const ActivityHeader = styled.div`
    color: ${({ theme  }) => theme.colors.darkgrey};
    margin-left: 2rem;
    font-family: ${({ theme }) => theme.fonts.otherfont};
    font-size: 32px;
    margin-bottom: 1.5rem;
`

export const FeedContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.teal };
    width: 99%;
    height: 100%;
    border-radius: 25px 25px 0 0;
`
