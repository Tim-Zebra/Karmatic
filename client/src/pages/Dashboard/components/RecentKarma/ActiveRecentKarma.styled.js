import styled from 'styled-components'

export const RecentKarmaBox = styled.div`
    
    border-radius: 10px;
    margin-bottom: .5rem;
    width: 95%;
    margin-bottom: 2rem;

    @media only screen and (min-width: 992px) {
        width: 80%;
    }
    
`
export const RecentContainer =styled.div`
    display: flex;
    justify-content: center;
    margin:0;
    width: 100%;

    @media only screen and (min-width: 992px) {
        flex-direction: column;
        align-items: center;
    }
`
export const ActiveRecentContainer = styled(RecentContainer)`
    flex-direction: column;
    align-items: center;
`

export const ExchangeContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0;
    text-align: center;
    width: 100%;
    @media only screen and (min-width: 992px) {
        justify-content: space-evenly;
    }
`



export const ExchangeBetween = styled.div`
    display: flex;
    align-items: center;
    line-height:0;
    color: ${({ theme }) => theme.colors.darkteal};
    font-size: 14px;
    font-family: ${({ theme }) => theme.fonts.otherfont};
    margin: 0;

    h4 {
        color: ${({ theme }) => theme.colors.teal};
        margin: 0 .25rem;
        
    }
    p {
        margin: 0 .5rem;
    }

    @media only screen and (min-width: 992px) {
        align-items: center;
    }
`
export const ExchangeBetweenTop = styled(ExchangeBetween)`
   
    
    @media only screen and (min-width: 992px) {
        margin: .5rem 0;
        display: flex;
        align-items: center;
    }
`
export const ExchangeBetweenBottom = styled(ExchangeBetween)`

    @media only screen and (min-width: 992px) {
        margin: .5rem 0;
        display: flex;
        align-items: center;
    }
`

export const KarmaCoins = styled.div`
    display: flex;
    align-items: center;
    margin: 0;

    h1 { 
        margin: 0 .5rem;
        font-family: ${({ theme }) => theme.fonts.otherfont};
        font-size: 24px;
    }

    img {
        margin: .5rem .5rem;;
        height: 33px;
    }
`