import styled from 'styled-components'

export const StyledNavContainer = styled.header`
    height: 3rem;
    padding: 1em;
    z-index: 1;
    position: fixed;
    top: 0;
    width: 100vw;
    display: flex;
    flex: nowrap;
    background-color: ${({ theme }) => theme.colors.darkgrey };
    align-content: center;
    justify-content: space-between;

`
export const StyledNavImage =  styled.img`
    height: 44px;
`
export const StyledNavEnd =  styled.div`
    margin-right: 3rem;
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
