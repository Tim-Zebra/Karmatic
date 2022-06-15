import styled from 'styled-components'

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;
    margin-top: 5rem;
    @media only screen and (min-width: 992px) {
        flex-direction: row;
    }
`

export const HomeInfoContainer = styled.div`
    margin: 6rem 1rem 2rem 1rem;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (min-width: 992px) {
        width: 66vw;
        margin: 6rem 3rem 0 3rem;
    }
`
