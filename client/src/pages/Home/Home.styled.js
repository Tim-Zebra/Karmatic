import styled from 'styled-components'

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 1rem;

    @media only screen and (min-width: 992px) {
        flex-direction: row;
    }
`

export const HomeInfoContainer = styled.div`
    margin: 6rem 1rem 0 1rem;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1 0 auto;

    @media only screen and (min-width: 992px) {
        width: 66vw;
        margin: 6rem 3rem 0 3rem;
    }
`
