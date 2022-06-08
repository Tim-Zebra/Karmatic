import styled from 'styled-components'

export const RecentKarmaBox = styled.div`
    border: 2px solid ${({ theme }) => theme.colors.lightteal};
    border-radius: 20px;
    display: flex;
    align-items: center;
    width: 100%;
    max-height: 150px;
`
export const RecentContainer =styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
export const ExchangeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 1rem;
`
export const ExchangeBetween = styled.div`
    display: flex;
    flex-direction: column;
`

export const KarmaCoins = styled.div`
    width: 100%;
    height: 50%;
`