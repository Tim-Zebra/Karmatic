import styled from 'styled-components'

export const RecentKarmaBox = styled.div`
    justify-content: center;
    border: 3px solid ${({ theme }) => theme.colors.darkteal};
    background-color: white ;
    border-radius: 20px;
    display: flex;
    align-items: center;
    width: 80%;
    margin-bottom: .5rem;
    padding: 0;


    img {
        margin: 0 1rem;
    }
    
`
export const RecentContainer =styled.div`
    display: flex;
    flex-direction: column;
    margin:0;
`
export const ExchangeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0;
`
export const ExchangeBetween = styled.div`
    display: flex;
    line-height:0;
    color: ${({ theme }) => theme.colors.darkteal};
    font-size: 14px;
    font-family: ${({ theme }) => theme.fonts.otherfont};
    margin: 0;

    h4 {
        color: ${({ theme }) => theme.colors.teal};
        margin: .5rem;
    }
    p {
        margin: 0;
        margin: .5rem;
    }
`
export const ExchangeBetweenTop = styled(ExchangeBetween)`
    margin-top: .5rem
`
export const ExchangeBetweenBottom = styled(ExchangeBetween)`
    margin-bottom: .5rem
`

export const KarmaCoins = styled.div`
    width:80%;
    display: flex;
    align-items: center;
    margin: 0;

    h1 {
        margin: 0 1rem 0 0;
        font-family: ${({ theme }) => theme.fonts.otherfont};
    }
`

export const PostTitle = styled.div`
    display: flex;
    flex-direction: column;
    line-height:10px;
    color: ${({ theme }) => theme.colors.darkteal};
    font-size: 14px;
    font-family: ${({ theme }) => theme.fonts.otherfont};
    margin: .5rem 0;


    h4 {
        color: ${({ theme }) => theme.colors.teal};
        margin: .5rem;
    }
    p {
        margin: 0;
        margin: .5rem;
    }
`