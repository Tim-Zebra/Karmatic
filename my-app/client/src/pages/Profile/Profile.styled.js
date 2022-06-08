import styled from 'styled-components'


export const ProfileContainer = styled.div`
    margin-top: 6rem;
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 992px) {
        flex-direction: row;
    }
`
export const ColumnOne = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (min-width: 992px) {
        width: 33vw;
    }
`
export const ColumnTwo = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (min-width: 992px) {
        width: 66vw;
    }
`