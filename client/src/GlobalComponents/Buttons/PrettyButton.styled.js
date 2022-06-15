import styled from 'styled-components'

export const PrettyButton = styled.button`
    color: ${({ theme }) => theme.colors.darkgrey};
    font-size: 16px;
    width: 95px;
    padding: .75rem;
    margin:.5rem;
    border: .25px solid ${({ theme }) => theme.colors.darkteal};
    border-radius: 10px;
    background:${({ theme }) => theme.colors.lightteal};
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.darkteal};
        color: white;
        
    }
    &:active {
        box-shadow: 2px 2px 5px grey;
    }

`

export const FormPrettyButton = styled(PrettyButton)`
    margin: 1.5rem 0;
    width: 80%;
`