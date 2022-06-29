import styled from 'styled-components'


export const ProfileContainer = styled.div`
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 99%;
`
export const Column = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        border: 1px ${({ theme }) => theme.colors.darkgrey };
        border-style: solid none;
        text-align: center;
        width: 99%;
        padding: 1rem 0;
        margin:0;
    }

    @media only screen and (min-width: 992px) {
        width: 66%;
    }
`
export const NeighborhoodColumn = styled(Column)`
    width: 100%;

    @media only screen and (min-width: 992px) {
        width: 33%;
    }

`

export const ProfileInformation = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 992px) {
        flex-direction: row;
    }
`

export const ProfileHero = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        margin-bottom: 0;
        font-family: ${({ theme }) => theme.fonts.otherfont } ;
    }

    @media only screen and (min-width: 992px) {
        width: 100%;
    }
`