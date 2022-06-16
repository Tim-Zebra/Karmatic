import styled from 'styled-components'

export const StyledHomeInfoContainer = styled.div`
    width: 100%;

    @media only screen and (min-width: 992px) {
        width: 100%;
    }
`

export const StyledHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem 2rem;

    @media only screen and (min-width: 992px) {
        flex-direction: row;
    }
`

export const StyledHomeLogo = styled.img`
    height: 150px;
    margin-bottom: 3rem;
`

export const Rows = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Row = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    height: 50vh;
    width: 90%;

    p {
        line-height: 1.5;
        font-family: 'Nunito Sans', sans-serif;
        font-size: 18px;
        width: 80%;
        }

    img {
        margin: 1rem 1rem;
    }
    
    @media only screen and (min-width: 992px) {
        flex-direction: row;
        height: 33vh;
        p {
            height:fit-content;
            width: 50%;
        }

    }
`
