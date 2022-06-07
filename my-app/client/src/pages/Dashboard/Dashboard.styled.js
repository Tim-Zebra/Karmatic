import styled from 'styled-components'

export const DashboardContainer = styled.div`
    margin-top: 6rem;
    display: flex;
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





// export const KarmaBar = styled.div`
//     height: 1rem;
//     width: 99%;
//     border-radius: 25px;
//     background: rgb(0,161,145);
//     background: linear-gradient(90deg, rgba(0,161,145,1) ${({ Karma }) => Karma }%, rgba(168,94,172,1) ${({ Karma }) => 100 - Karma }%);
//     margin-bottom: 1rem;
// `
