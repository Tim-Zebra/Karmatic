import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    background-color: ${({ theme }) => theme.colors.lightteal};

    & h1, h2, h3{
    color:${({ theme }) => theme.colors.darkteal};
    }
`
export const ContainerSubRowOne = styled.div`
    display: flex;
    width:100%;
    flex-direction: row;
    justify-content: end;

    @media only screen and (min-width: 992px) {
        width: 33vw;
    }
`
export const ContainerSubRowTwo = styled.div`
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content: end;

    & img{
        padding:0 5px 5px 0;
    }
    /* @media only screen and (min-width: 992px) {
        width: 33vw;
    } */
`

export const ContainerSubColumnOne = styled.div`
    width:55%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    /* @media only screen and (min-width: 992px) {
        width: 33vw;
    } */
`

export const ContainerSubColumnTwo = styled.div`
    width:55%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
& h2{
    color:${({ theme }) => theme.colors.darkteal};
}
    /* @media only screen and (min-width: 992px) {
        width: 33vw;
    } */
`