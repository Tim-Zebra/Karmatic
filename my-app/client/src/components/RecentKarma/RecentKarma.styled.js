import styled from 'styled-components'

export const RecentKarmaBox = styled.div`
    border: 3px solid ${({ theme }) => theme.colors.lightteal};
    border-radius: 20px;
    display: flex;
    align-items: center;
    width: 100%;
    max-height: fit-content;
    margin-bottom: .5rem;

    img {
        margin: 0 1rem;
    }
    
`
export const RecentContainer =styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
export const ExchangeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width:80%;
    margin-top: 1rem;
    margin-bottom: -1rem;
`
export const ExchangeBetween = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height:0;
    color: ${({ theme }) => theme.colors.darkteal};
    font-size: 14px;
    font-family: ${({ theme }) => theme.fonts.otherfont};
`

export const KarmaCoins = styled.div`
    width:80%;
    display: flex;
    align-items: center;

    h1 {
        margin-right: 1rem;
    }
`