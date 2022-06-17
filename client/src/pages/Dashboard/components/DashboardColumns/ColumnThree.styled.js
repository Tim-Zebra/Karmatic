import styled from 'styled-components'

export const ColumnContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5rem;
    text-align: center;

    h3 { 
        font-family: ${({ theme }) => theme.fonts.otherfont}
    }

    hr {
        width: 66%;
    }
`