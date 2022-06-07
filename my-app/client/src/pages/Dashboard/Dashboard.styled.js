import styled from 'styled-components'

export const DashboardContainer = styled.div`
    margin-top: 6rem;
`
export const Column = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (min-width: 992px) {
        width: 33vw;
    }
`

export const GreetingContainer = styled.div`
    background-color: white;
    border-radius: 25px;
    padding: 1rem;
    box-shadow: 3px 3px ${({ theme  }) => theme.colors.lightpurple};
    width: 50%;
    text-align: left;
    color: ${({ theme }) => theme.colors.darkteal }
`

export const UserContainerHeader = styled.div`
    font-family: ${({ theme }) => theme.fonts.otherfont };
    text-align: center;
    font-size: 20px;
    margin-bottom: 1rem;
`
export const CurrentKarmaCoinsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
`
export const StyledCoin = styled.img`
    height: 44px;
`

// export const KarmaBar = styled.div`
//     height: 1rem;
//     width: 99%;
//     border-radius: 25px;
//     background: rgb(0,161,145);
//     background: linear-gradient(90deg, rgba(0,161,145,1) ${({ Karma }) => Karma }%, rgba(168,94,172,1) ${({ Karma }) => 100 - Karma }%);
//     margin-bottom: 1rem;
// `
