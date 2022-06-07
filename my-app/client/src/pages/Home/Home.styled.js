import styled from 'styled-components'

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    @media only screen and (min-width: 992px) {
        flex-direction: row;
    }
`

export const StyledHomeLeft = styled.div`
    margin-top: 6rem;
    height: fit-content;
    width: 100vw;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (min-width: 992px) {
        width: 33vw;
        height: 100vh;
    }
`
export const StyledHomeRight = styled.div`
    margin: 3rem 1rem 2rem 1rem;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (min-width: 992px) {
        width: 66vw;
        margin: 10rem 3rem 0 3rem;
    }
`
export const StyledLogo = styled.img`
    height: 100px;
`
