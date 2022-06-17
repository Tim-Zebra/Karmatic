import styled from 'styled-components'

export const StyledNavContainer = styled.header`
    height: 3rem;
    padding: 1em;
    z-index: 1;
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    background-color: ${({ theme }) => theme.colors.darkgrey };
    align-content: center;
    justify-content: flex-end;

    @media only screen and (min-width: 400px) {
        justify-content: space-between;
        }

`
export const StyledNavImage =  styled.img`
    height: 44px;
    cursor: pointer;

`
export const DisappearingNavImage = styled(StyledNavImage)`
        display: none;
    @media only screen and (min-width: 400px) {
            display: block;
        }
`

export const StyledNavEnd =  styled.div`
    margin-right: 1.5rem;
    display: flex;
    align-items: center;
    

    a {
        margin-right: 3em;
        border: solid ${({ theme }) => theme.colors.lightgrey } 2px;
        border-radius:30px;
        padding: .6rem;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.lightgrey };
        cursor: pointer;

    }


`
