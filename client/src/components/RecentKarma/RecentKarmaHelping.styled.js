import styled from 'styled-components'

export const RecentKarmaBox = styled.div`
    border: 3px solid ${({ theme }) => theme.colors.darkteal};
    background-color: white ;
    border-radius: 20px;
    display: flex;
    align-items: center;
    width: 80%;
    margin-bottom: .5rem;

    img {
        margin: 0 1rem;
    }
`
export const RecentContainer =styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem;
`
export const ExchangeContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const KarmaCoins = styled.div`
    width:80%;
    display: flex;
    align-items: center;

    img {
        height: 33px;
    }
`