import styled from 'styled-components'


export const ProfileContainer = styled.div`
    margin-top: 5rem;
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
    background-color: ${({ theme }) => theme.colors.lightteal};

    h3 {
        margin-bottom: 0;
        font-family: ${({ theme }) => theme.fonts.otherfont } ;
    }

    @media only screen and (min-width: 992px) {
        width: 66vw;
    }
`