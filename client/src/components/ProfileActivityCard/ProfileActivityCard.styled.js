import styled from 'styled-components'

export const CardContainer = styled.div`
    border: solid 2px ${({ theme }) => theme.colors.darkgrey };
    border-radius: 5px;
    margin: 0 1rem 1rem 1rem;
    display: flex;
    padding: .5rem;
    align-items: center;
    justify-content: space-evenly;

`
export const LogoImage = styled.img`
    height: 44px;
    margin-right: 1rem;
`

export const DeleteImage = styled.img`
    height: 33px;
    cursor: pointer;

`