import styled from 'styled-components'

export const StyledNavContainer = styled.header`
    height: 3rem;
    padding: 1em;
    position: fixed;
    width: 100vw;
    display: flex;
    flex: nowrap;
    background-color: #4A5655;
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
        border: solid #E9E9E9 2px;
        border-radius:30px;
        padding: .6rem;
        text-decoration: none;
        color: #E9E9E9;
        cursor: pointer;

    }
`
